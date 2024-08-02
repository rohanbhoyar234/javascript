const accountId = 14459
let accountEmail = "rohan16.com"
var accountPassword = "12345"
accountCity = "vrindavan"
let accountState
/*
if declare the variable without assigning value to it
then the output will be undefined
 */

// accountId =21  // not allowed

// but we can change these three
accountEmail ="rajat21@google.com"
accountPassword = "45879"
accountCity = "bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


