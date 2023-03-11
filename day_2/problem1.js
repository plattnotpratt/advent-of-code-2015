const fs = require('node:fs/promises');
function getAreaPlusSlack(l, w, h){
  small = 0;
  const lw = l * w;
  const wh = w * h;
  const hl = h * l;
  small = Math.min(lw, wh, hl);
  const total = lw*2 + wh*2 +hl*2 + small;
  return total;
}
async function readInput(){
  const data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push( line.split('x'));
  }
  //console.log(data);
  return data;
}
async function init(){
  let data = await readInput();
  let total = 0;
  for(let i = 0; i < data.length; i++){
    const x = data [i];
    total += getAreaPlusSlack(parseInt(x[0]), parseInt(x[1]), parseInt(x[2]));
  }
  console.log(total);
}

init();
