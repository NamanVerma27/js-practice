const accountId = 144553
let accountEmail = "naman@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

console.log(accountId);

/*
Prefer not to use var 
because of the issues in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangalore"

// declaring accounState variable without value
let accountState
// it gives undefined as output

console.table([accountEmail , accountPassword , accountCity , accountState])