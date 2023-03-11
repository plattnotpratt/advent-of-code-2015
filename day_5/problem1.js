const fs = require('node:fs/promises');

async function readInput(){
  const data = [];
  const file = await fs.open('input.txt');
  for await (let line of file.readLines()){
    data.push( line );
  }
  //console.log(data);
  return data;
}
function threeVowels(str){
  re = /[aeiou].*[aeiou].*[aeiou]/;
  if(re.exec(str)){
    return true;
  }else{
    return false;
  }
}
function doubleLetters(str){
  const re = /(.)\1/
  if(re.exec(str)){
    return true;
  }else{
    return false;
  }
}
function badPairs(str){
  const re = /([a][b]|[c][d]|[p][q]|[x][y])/;
  if(re.exec(str)){
    return false;
  }else{
    return true;
  }
}

async function init(){
  //console.log(badPairs('ugknbfddgicrmopn'));
  let count = 0;
  let data = await readInput();
  for(let i = 0; i < data.length; i++){
    if(doubleLetters(data[i]) && threeVowels(data[i]) && badPairs(data[i])){
      count ++
    }
  }
  console.log(count);
}

init();
