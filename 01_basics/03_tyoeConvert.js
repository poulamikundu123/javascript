/*let score = 23
let score1 = "23"
//const {score} = req.body

// line 1 mei toh we know ki score is an integer
// but in line 3 we are asking the user to input, we arent sure ki kya aaega input pe 

console.log(typeof score);
console.log(typeof (score));

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score3 = "33abc"
let valueInNumber1 = Number(score3);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); //the oupt NaN stands for not a number
// vo bhalei usko number pe convert krderaha hai

// convert input to number
// null => 0
// undefined => NaN
// poulami => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
//ab yaha 1 ke jagay "" input letey toh output false aata, "poulami" input letey toh trut aata
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber); //dikhne mei number jaisa hai but string ban chuka hai

*/
// ********************** OPERATIONS ********************

let value = 3
let negValue = -value
//console.log(negValue);

/* BASIC MATH OPERATIONS
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);
*/

let str1 = "poulami"
let str2 = " kundu"

let str3 = str1 + str2 //add hi hota hai bss, not substract
console.log(str3);

console.log("poulami" + "kundu");

console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2 + 2); // output 122
console.log(1 + "2" + 2); // output 122
console.log(1 + 2 + "2"); // output 32  1+2 =3 and then 2 is getting add

console.log((1 + 2)+ "2"); //wahi bss code readability ko improve, ki kaunsa execution kaisa
                          // console.log((3+4) * 3 % 4);

console.log(true);
console.log(+true); //+ krne se value mei convert hojaraha hai
console.log(+"");

let num1, num2 , num3

num1= num2 = num3= 2+2 //not advised kyuki readability, better more ways to declarre it

let gameCounter = 100
gameCounter++ ;
console.log(gameCounter);


// postfix & prefix increment
let a=3;
const b=a++;
console.log(a,b);

let x=3;
const y=++x;
console.log(x,y);

