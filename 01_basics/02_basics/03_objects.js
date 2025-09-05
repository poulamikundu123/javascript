//const tinderUser = {} //not a singleton objects
//const tinderUser = new Object() //singleton objects

//console.log(tinderUser); //we will see that both will give us the same output...the only diff is one is singleton, the other isnt

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Poulami"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "poulamikundu103@gmail.com",
    fullname: {
        userfullname:{
            firstName: "poulami",
            lastName: "Kundu",
        }
    }
}

/*console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstName);
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1 , obj2 }

//const obj3 = Object.assign(obj1 , obj2) //isme saare object1 mei jaa rahe hai, obj1 is acting as the target
//console.log(obj1);
//console.log(obj3);



const obj4 = Object.assign({},obj1 , obj2) //ensure ki khali object mei hi jaaye..kyuki as per the syntax, pehle jeta likhi that is target, next is source
console.log(obj1);
console.log(obj4);

const obj3 = {...obj1 , ...obj2}
console.log(obj3);
console.log(obj1);

// jab database se vlaues aayegi, tab arrays of objects aayegi

const user = [
    {
        id: 1,
        email:"poulami1"
    },
    {
        id: 2,
        email:"poulami2"
    },
    {
        id: 3,
        email:"poulami3"
    },
]

console.log(user[2].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //toh ab humne saare keys ko liya aaur ak datatype(array) mei rakh diya and now if we want we cn access them using loop
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
