const fs = require('node:fs/promises');
function ribbonLengthCalculator(l, w, h){
  const parim = ((l + w + h) - Math.max(l, w, h)) * 2;
  const total = parim + l * w * h;
  return total;
}
async function readInput(){
  const data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push( line.split('x'));
  }
  return data;
}
async function init(){
  let data = await readInput();
  let total = 0;
  for(let i = 0; i < data.length; i++){
    const x = data [i];
    total += ribbonLengthCalculator(parseInt(x[0]), parseInt(x[1]), parseInt(x[2]));
  }
  console.log(total);
}
init();
