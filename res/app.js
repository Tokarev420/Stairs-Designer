const fs = require('fs');
const fetch = require('node-fetch');
const url = `https://stair.ljsmith.com/assets/files/products/md/`;



var dom = fs.readFileSync("./web.html").toString();
var names = [];


var currentIdx = dom.indexOf("sm/");

while(currentIdx != -1){
	var nextIdx = dom.indexOf(".png");
	names.push(dom.substring(currentIdx+3, nextIdx));
	dom = dom.substring(nextIdx+5);
	currentIdx = dom.indexOf("sm/");
}

console.log(names);

async function download(name) {
  const response = await fetch(url + name + ".png");
  const buffer = await response.buffer();
  fs.writeFile(`./${name}.png`, buffer, () => 
    console.log('downloaded ' + name));
}


