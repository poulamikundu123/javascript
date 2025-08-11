/*const name = "poulami"
const repocount = 50

console.log(name + repocount + "KUNDU"); // this type of syntax is asked to avoid

console.log(`hello my name is ${name} and my repocount is ${repocount}`);
*/

const gamename = new String('poulami-kundu') // 0-'p' 1- 'o'......here dont think it iss an array, object ki tarah store hua hai.

console.log(gamename[5]); //ab koi bhi key value ko access kr sakte hai humlog
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('p'));
console.log(gamename.charAt(5));

const newString = gamename.substring(0,5) // substring mei -ve daalo bhi toh it will ignore it, 0 se hi start karega vo toh
console.log(newString);


const anotherString = gamename.slice(-13,8) //best part about slice is it can accomodate negatives//-13 meaning peeche se start karega
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //to avoid the unnessary gaps mistakenly input by the user..ignores the starting and end gaps

const url = "https://hitesh.com/hitesh%20kundu"
console.log(url);


console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gamename.split('-'));// we can split based on anything
console.log(gamename.split('k'));


