////STATE / RUNTIME VARS
var BALUSTER = "";
var NEWEL = "";
var HANDRAIL = "";

var SELECTED_BALUSTER_ID = -1;
var SELECTED_BALUSTER_ITEM;

var SELECTED_NEWEL_ID = -1;
var SELECTED_NEWEL_ITEM;

var SELECTED_HANDRAIL_ID = -1;
var SELECTED_HANDRAIL_ITEM;

var TYPE = 0;
var MATERIAL = 0;
var STATE = 0;
var KNEEWALL = 0;

var newels = [];
var balusters = [];
var handrails = [];



function parseType(id){
  if(STATE == 0){
    if(MATERIAL == 0){
      
    }
    else{

    }
  }
  else
  {
    if(MATERIAL == 0){

    }
    else{
      
    }
  }
}



/////TYPES
/*
1  10     Normal
11 12     2
13 16   3 - 6A10,6B10,6010,6601,6109


var topWoodTypes = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 0, 5];









