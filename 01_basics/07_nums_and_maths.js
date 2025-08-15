const score = 400
console.log(score); //isme js automaatically detect kr le raha hai ki ye number type hai

const balance = new Number(100)
console.log(balance); //yaha we are defining it specially

console.log(balance.toString()); //now we can access to the additional properties of the string
console.log(balance.toFixed(2)); // to ease up the digits to the client.. in e-commerce websites

const otherNumber = 123.7842
console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(3,4,5,6));
console.log(Math.min(3,4,5,6));

console.log(Math.random()); //any random number from 0-1
console.log((Math.random()*10)+1); //+1 to avoid agr 0.01 hota toh
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

