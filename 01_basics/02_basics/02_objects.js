/* singleton -> when we actually declare in literals, the singleton nhi banta
but agar constructor se banta hai toh humesha singleton
*/
// Object.create  ...iss tarah se bhi hum object bana sakte hai,this is the constructor method


// object literals
const JsUser = {
    name: "poulami", //object humhe key and value dono rakhne ka mauka deta hai jisse hum usse access kr paaye,unlike arrays jiskobss index ke trough hi kr paaatey hai
    age: 18,
    "full name": "poulami kundu",
    location: "siliguri",
    email: "poulamikundu103@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //the only option to print in this case 
