const name = "poulami"
const repocount = 50

console.log(name + repocount + "KUNDU"); // this type of syntax is asked to avoid

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


const gamename = new String('poulami-kundu') // 0-'p' 1- 'o'......here dont think it iss an array, object ki tarah store hua hai.

console.log(gamename[5]); //ab koi bhi key value ko access kr sakte hai humlog
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('p'));
console.log(gamename.charAt(5));

const newString = gamename.substring(0,5)
console.log(newString);

