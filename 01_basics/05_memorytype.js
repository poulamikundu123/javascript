// Stack (Primitive type) , Heap (Non-primitive)

let myinsta = "Poulamikundu"

let anotherinsta = myinsta
anotherinsta = "priyankakundu"
console.log(anotherinsta);
console.log(myinsta);


let account = {
    accountID: "baniKundu",
    instaId: "sneha@gmail.com" ,
    number: 9734927372
}

let accountID2= account
accountID2.accountID=  "ashutoshKundu"
console.log(account.accountID);
console.log(accountID2.accountID);

