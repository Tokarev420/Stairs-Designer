$(document).on("click", ".balusterItem", function(e){
	selectBaluster($(this));
	resetBuy();
	reset();
});

$(document).on("click", ".newelItem", function(){
	selectNewel($(this));
	reset();
});

$(document).on("click", ".handrailItem", function(){
	selectHandrail($(this));
});

function selectBaluster(e){
	if(SELECTED_BALUSTER_ITEM !== undefined)
	{
		SELECTED_BALUSTER_ITEM.css("background", "transparent");
		SELECTED_BALUSTER_ITEM.css("border", "none");
		SELECTED_BALUSTER_ITEM.find("p").removeClass("selected");
		SELECTED_BALUSTER_ITEM.removeClass("selected");
	}

	SELECTED_BALUSTER_ITEM = e;
	SELECTED_BALUSTER_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_BALUSTER_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_BALUSTER_ITEM.find("p").addClass("selected");
	SELECTED_BALUSTER_ITEM.addClass("selected");
	SELECTED_BALUSTER_ID = SELECTED_BALUSTER_ITEM.data("id");
	BALUSTER = balusters[SELECTED_BALUSTER_ID];

	parseType(SELECTED_BALUSTER_ID);

	$("#balusterProduct").empty();
	$("#balusterProduct").append(`<div class="balusterProductItem"><img src="${RES}/balusters/${balusters[SELECTED_BALUSTER_ID]}.png"><p>${getName(balusters[SELECTED_BALUSTER_ID])}</p></div>`);
}

function selectNewel(e){
	deselectCurrentNewel();

	SELECTED_NEWEL_ITEM = e;
	SELECTED_NEWEL_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_NEWEL_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_NEWEL_ITEM.find("p").addClass("selected");
	SELECTED_NEWEL_ITEM.addClass("selected");
	SELECTED_NEWEL_ID = SELECTED_NEWEL_ITEM.data("id");
	NEWEL = newels[SELECTED_NEWEL_ID];

	$("#newelProduct").append(`<div class="newelProductItem"><img src="${RES}/newels/${newels[SELECTED_NEWEL_ID]}.png"><p>${getName(newels[SELECTED_NEWEL_ID])}</p></div>`);
}

function deselectCurrentNewel(){
	$("#newelProduct").empty();
	if(SELECTED_NEWEL_ITEM !== undefined)
	{
		SELECTED_NEWEL_ITEM.css("background", "transparent");
		SELECTED_NEWEL_ITEM.css("border", "none");
		SELECTED_NEWEL_ITEM.find("p").removeClass("selected");
		SELECTED_NEWEL_ITEM.removeClass("selected");
	}
}


function selectHandrail(e){
	deselectCurrentHandrail();

	SELECTED_HANDRAIL_ITEM = e;
	SELECTED_HANDRAIL_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_HANDRAIL_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_HANDRAIL_ITEM.find("p").addClass("selected");
	SELECTED_HANDRAIL_ITEM.addClass("selected");
	SELECTED_HANDRAIL_ID = SELECTED_HANDRAIL_ITEM.data("id");
	HANDRAIL = handrails[SELECTED_HANDRAIL_ID];

	$("#handrailProduct").append(`<div class="handrailProductItem"><img src="${RES}/handrails/${handrails[SELECTED_HANDRAIL_ID]}.png"><p>${getName(handrails[SELECTED_HANDRAIL_ID])}</p></div>`);
}

function deselectCurrentHandrail(){
	$("#handrailProduct").empty();
	if(SELECTED_HANDRAIL_ITEM !== undefined)
	{
		SELECTED_HANDRAIL_ITEM.css("background", "transparent");
		SELECTED_HANDRAIL_ITEM.css("border", "none");
		SELECTED_HANDRAIL_ITEM.find("p").removeClass("selected");
		SELECTED_HANDRAIL_ITEM.removeClass("selected");
	}
}


$('input[name="steps"]').change(
	function(){
		NUM = $(this).val();
		reset();
});

$('input:checkbox[name="material"]').change(
	function(){
	    MATERIAL = $(this).is(':checked')? 1:0;
		resetAssets();
		reset();
});

$('input:checkbox[name="state"]').change(
	function(){
	    STATE = $(this).is(':checked')? 1:0;
		resetAssets();
		reset();
});

$('input:checkbox[name="kneewallInput"]').change(
	function(){
	    KNEEWALL = $(this).is(':checked')? 0:1;
	    console.log(KNEEWALL);
		resetAssets();
		reset();
});




function reset(){
	$("#baluster").empty();
	$("#handrail").empty();
	$("#newel").empty();
	$("#stair").empty();
	$("#kneewall").empty();


	var ROOM_WIDTH = $("#room").width() / rem();
	var x = (NUM-1) * 2.82;
	var y = (NUM-1) * 2.34;
	LEFT = (ROOM_WIDTH - 12.5 - x) / 2.0;
	TOP = (36.0 - 15 + y) / 2.0;

	draw(NUM, BALUSTER, NEWEL);
}

function resetBuy(){
	NEWEL = "";
	HANDRAIL = "";

	SELECTED_NEWEL_ID = -1;
	SELECTED_HANDRAIL_ID = -1;

	deselectCurrentNewel();
	deselectCurrentHandrail();
}


function resetAssets(){
	if(STATE == 0){
		if(MATERIAL == 0){
			insertBalustersTopWood();
			insertNewelsTopWood();
			insertHandrailsTopWood();
		}
		else{
			insertBalustersTopIron();
			insertNewelsTopIron();
			insertHandrailsTopIron();
		}
	}
	else{
		if(MATERIAL == 0){
			insertBalustersOverWood();
			insertNewelsOverWood();
			insertHandrailsOverWood();
		}
		else{
			insertBalustersOverIron();
			insertNewelsOverIron();
			insertHandrailsOverIron();
		}

	}

	/*selectBaluster($(".balusterItem").first());
	selectNewel($(".newelItem").first());
	selectHandrail($(".handrailItem").first());*/
}


$("#buyButton").on("click", function(){
	generatePdf();
});


var rem = function rem() {
        var html = document.getElementsByTagName('html')[0];

        return function () {
            return parseInt(window.getComputedStyle(html)['fontSize']);
        }
    }();

window.onresize = reset;



var roomTop = 0;
var marginOffset = 0;
var floatEnabled = false;

$(document).ready(function(){
	checkPosition();
});


$(window).scroll(function() {
	if(floatEnabled){
		var q = $(this).scrollTop() - roomTop + marginOffset;
		if(q < 0) q = 0;
   		$('#room').css('top', q + "px");
	}
});


$(document).load($(window).bind("resize", checkPosition));

function checkPosition()
{
	marginOffset = (rem() * 1.5);
	roomTop = $('#room').position().top;
	
	if (window.matchMedia('(max-width: 1100px)').matches) {
        floatEnabled = false;

    } else {
        floatEnabled = true;
    }

}