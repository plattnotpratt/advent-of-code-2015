const fs = require('node:fs/promises');

async function readInput(){
  const data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push( line.split(''));
  }
  //console.log(data);
  return data[0];
}
function updatePosition(dirString, pos){
  if(dirString === '^'){
    //y - 1;
    pos.y -= 1;
  }else if(dirString === '>'){
    //x + 1;
    pos.x += 1;
  }else if(dirString === 'v'){
    //y + 1;
    pos.y += 1;
  }else if(dirString === '<'){
    //x - 1;
    pos.x -= 1;
  }
  return pos;

}
async function init(){
  let pos = {x: 0, y: 0};
  let posR = {x: 0, y: 0};
  let housesVisited = { x0y0:2 }
  let data = await readInput();
  for(let i = 0; i < data.length; i++){

    posString = "";
    if(i % 2 == 0){
      pos = updatePosition(data[i],pos);
      posString = `x${pos.x}y${pos.y}`;
    }else{
      posR = updatePosition(data[i],posR);
      posString = `x${posR.x}y${posR.y}`;
    }
    housesVisited[`${posString}`] += 1;
  }
  console.log(Object.keys(housesVisited).length);
}

init();