const accountId = 123456
let accountEmail = "poulamikundu@gmail.com"
var accountPassword = "poulami"
accountcity = "naxalbari"

// accountId = 2 // not allowed // was declared as constant, so cant change

/* prefer not to use var
because of issue in block scope and functional scope
earlier when var was used, even in different files the same variavle name value was chnaged, each file thike change hoye jeto
and that created a problem.
*/

accountEmail = "polo@gmail.com"
accountPassword = "cutie"
accountcity = "turkey"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountcity])
