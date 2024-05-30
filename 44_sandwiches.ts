import { Console } from "console";

function makesandwich (item: string[]) {
    console.log('making your sandwich with:');
    item.forEach(Element =>console.log ("_ " + Element));
    console.log('enjoy your sandwich !');
}
makesandwich(['ham','cheese','lettuce']);
makesandwich(['turkey','bacon']);
makesandwich(['peanut butter','jelly']);