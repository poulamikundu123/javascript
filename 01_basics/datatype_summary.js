/* ye jo data hai vo memory mei kis tarah store ho raha hai and kis tarah uss data ko access kiya jaata hai
based on this, call by value and call by function

overall dekha jaaye toh we can classify all the datatypes on 2 categories

PRIMITIVE (callby value- jab we copy the data we arent given the reference of the original memory,copy krke diya jaata hai)
=> 7 types: String, Number, Boolean, null, undefined (variable declared hai, memorey space bhu declared hai but usmei kya value aayegi that
             is not decided yet), Symbol(to make a value unique), BigInt


REFERENCE (non-primitive)
=> array, objects, functions

Javascript is a dynamically typed language.
because data type will automatically assigned at teh time of the compilation or code execution.

*/

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 328138732733828n // adding n to the last converted it into BigInt

// ARRAYS
const heroes = ["aman", "poulami", "priyanka"]

// OBJECTS (curly braces ke andar jitna bhi hai sb sbjects mei aayega, chahey uska data type kuvh bhi lelo int, string..)
let myObj = {
    name: "poulami",
    age: 20,
    number: 7001309471
}

// FUNCTIONS
const myFunction = function(){
    console.log("hello world");
}


// typeof (datatype janne ke liye)
// undefined=> undefined
// null=> object
// boolean=> boolean
// number=> number
// symbol=> symbol
// string=> string
//function=> function(object function)

//all non-primitive ka datatype FUNCTION hi hota hai
console.log(typeof heroes );
console.log(typeof myObj );
console.log(typeof myFunction);//function=> function(object function)
