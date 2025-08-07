/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
*/

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* the reason is that an equality check == and comparisions > < >= <= work differently
Comparisions convert null to a number, treating it as a 0.
That's why in the last case null >= 0 is true and first case null > 0 is false
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
// undefined har case mei answer false hi dega

// === strict check, not only checks the value but also the data type

console.log("2" == 2); // isme conversion ho jaaraha hai
console.log("2" === 2); // isme conversion ho nhi raha hai
