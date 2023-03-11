const fs = require('node:fs/promises');
async function readInput(){
  const data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push( line.split(''));
  }
  return data[0];
}
async function init(){
  let data = await readInput();
  let count = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i] == '('){
      count ++;
    }else{
      count --;
    }
  }
  console.log(count);
}

init();
