

// write a program that creates objects containing these items.

// datatype of person object
interface person {
        age : number,
        name :string,
        nationality : string,
        student :boolean
}
// person object
let person :person ={
    age : 24,
     name : 'faizan' ,
     nationality : 'pakistan' ,
     student : true
}

// print person
console.log(person);


//datatype of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean
}

// car object
let car = {
    maker : 'toyota',
    color :'black',
    automatic : true
}

// print car
console.log(car);

