function sayMyName(){
    console.log("P");
    console.log("O");
    console.log("U");
    console.log("L");
    console.log("A");
    console.log("M");
    console.log("I");
}

//sayMyName() //ye () lagana fn name ke side me will be its EXECUTION.
sayMyName   // it will be be its REFERENCE

/*
function add(num1,num2){ //parameters
    console.log(num1+num2);
}

add(1,2)
add(1,"2")  //arguments

const result = add(3,5)

console.log("result:", result);
*/

function add(num1,num2){ //parameters
    let result = num1+num2
    return result
    //console.log("polo"); //retunr ke baad kuch bhi line of code execute nhi karega
    
}
const result = add(3,5)

//console.log("result:", result);


function loginUserName(username){
    if(username === undefined){ //(!username)
        console.log("please enter a username");
        return
    }
    
    return `${username} just logged in`

}

loginUserName("poulami")
console.log(loginUserName("poulami"));
console.log(loginUserName(""));
console.log(loginUserName());