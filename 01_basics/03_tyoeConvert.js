let score = 23
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



