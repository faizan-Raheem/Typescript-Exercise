import { markAsUntransferable } from "worker_threads";


let magician :string[] = ['harry potter', 'hermione granger','ron weasley','albus dumbledore'];
function copyArray(arr:string[]){
  return[...arr]
}
function make_great (magicianArray:string[]){
for(let i= 0; i<magicianArray.length; i++)
  magicianArray[i]= 'the great ' +magicianArray[i]
}



function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}


const copyMagicianArray= copyArray(magician)
make_great(copyMagicianArray);
console.log('\n\nthis is my orignal array:')
console.log('\n\nthis is my modifiedcoppy of the array:');
show_magicians(copyMagicianArray);