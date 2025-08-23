//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);
console.log(myArr2);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr);
console.log(myArr);



// slice , spice

console.log("A ", myArr);

//slice makes change in the copy of the array, without making changes to the original array
const myn1 = myArr.slice(1,3) //slicing from index 1to 3..3 is not included
console.log(myn1);
console.log("B ", myArr);

//splice makes a change to the original array
const myn2 = myArr.splice(1,3) //slicing from index 1to 3..3 is included
console.log(myn2);
console.log("C ", myArr);

const marvel_heroes = ['thor','ironman', 'shinchan']
const disney_heroes = ['superman','flash', 'batman']

marvel_heroes.push(disney_heroes) //disney_heroes array pura ak element ki tarah add horaha hai
console.log(marvel_heroes);
console.log(marvel_heroes[3][0]);

const allHeroes = marvel_heroes.concat(disney_heroes)
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...disney_heroes]
console.log(all_new_heroes);


console.log(Array.isArray("Poulami"))
console.log(Array.from("Poulami"));
console.log(Array.from({name: "Poulami"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
