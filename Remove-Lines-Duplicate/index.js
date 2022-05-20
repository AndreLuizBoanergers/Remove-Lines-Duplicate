const utils = require('utils');
const fs = require('fs');
const colors = require('colors');

function RemoveDuplicate(list){
    const newlist = new Set(list);
     return [...newlist];
}

const lista = fs.readFileSync('./list.txt', {encoding: 'utf-8'}).split('\r\n');
console.log()
console.log(fs.readFileSync("./assets/ascii.txt", "utf-8").toString().rainbow.bold);
const NewList = RemoveDuplicate(lista);
const Duplicate =  lista.length - NewList.length;
console.log(`[Remove Duplicate] Loaded list: ${lista.length} Duplicate: ${Duplicate}`);
console.log();

for(var i =0; i < NewList.length; i++){
    let line = NewList[i];
    console.log(`${line}`.green)
    fs.appendFileSync("ListRemoved.txt", ` ${line} \n`);
}
