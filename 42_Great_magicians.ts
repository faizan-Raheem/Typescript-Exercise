import { markAsUntransferable } from "worker_threads";


let magician :string[] = ['harry potter', 'hermione granger','ron weasley','albus dumbledore'];

function make_great (magicianArray:string[]){
for(let i= 0; i<magicianArray.length; i++)
  magician[i]= 'the great ' +magicianArray[i]
}



function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);