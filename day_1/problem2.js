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
  let basement = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i] == '('){
      count ++;
    }else{
      count --;
    }
    if(count == -1){
      basement = i;
      break;
    }
  }
  //position starts at 1 not 0... add 1 to base 0 index
  console.log(basement + 1);
}

init();
