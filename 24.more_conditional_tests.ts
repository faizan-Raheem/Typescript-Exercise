

// Equality and inequality test 1
console.log("Equality test with string: ",  "apple" === "apple");

// Equality and inequality test 2
console.log("inequality test with string: ",  ("apple" as string) != "orrange");

// tests using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase() ==="hello");
// numerical tests involving equality
console.log("equality test with number:", 26 === 26);

// numerical tests involving inequality 
console.log("inequality test with number:", (26 as number) != 35);


// greater than test
console.log("greater than test", 10 > 5); 
// less than test 
console.log("less than test", 5 < 10)
//greater than equal to
console.log("greater than and equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <=10)


// test using "and" operator
console.log("and operator tes: ", 5===5 && 10 >5)

// test using "or" operator
console.log("or soperator tes: ", 5===5 || false);

// test wheather an item is in a array
const fruits :string[] =['nashpati','banana','Amrood'];
console.log('test "nashpati" in the array: ',fruits.includes("nashpati"));

// test wheather an item is not in a array 
console.log('testing "apple" is not in array ', !fruits.includes('apple'));




