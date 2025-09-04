/* singleton -> when we actually declare in literals, the singleton nhi banta
but agar constructor se banta hai toh humesha singleton
*/
// Object.create  ...iss tarah se bhi hum object bana sakte hai,this is the constructor method


// object literals

const mySym = Symbol("key1") //interview Q: ak symbol lo aaur usko object  ke key mei add krke dikhado

const mySym2 = Symbol("key2")

const JsUser = {
    name: "poulami", //object humhe key and value dono rakhne ka mauka deta hai jisse hum usse access kr paaye,unlike arrays jiskobss index ke trough hi kr paaatey hai
    age: 18,
    "full name": "poulami kundu",
    mySym: "mykey1",
    [mySym2]: "mykey1",
    location: "siliguri",
    email: "poulamikundu103@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //the only option to print in this case 

console.log(typeof JsUser.mySym); // string aaraha hoga, isnt accessed as a symbol defined above
console.log(JsUser[mySym2]); //value mei toh fharaq nahi padha hai but this is the correct syntax to implement a symbol


//Object.freeze(JsUser)
JsUser.email = 'priyanka123@gmail.com'
console.log(JsUser.email);


//function ko aap ak variable ke jaisa treat krlo koi tension nhi
JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this["full name"]}`);//when we need to take sam object ka hi refernce... this. ab jo bhi properites hai objects ke andar sab mil jayegi
    
}//this ko basically objects ke andar kya kya property hai usko pata krne ke liye bhi use krte hai


console.log(JsUser.greeting); //function execute nhi huwa hai, but function ka refernce return back huwa hai
console.log(JsUser.greeting()); 

console.log(JsUser.greetingTwo());
console.log(JsUser.greetingTwo);