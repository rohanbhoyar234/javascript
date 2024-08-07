// const userEmail = " rb@gmail.com"
// if(userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("do not have user email")
// }

/*

falsy value :
    false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN  etc

truthy value :
    true , "0" , "false" , " " , [] , {} , function(){}   etc 

*/

// const userEmail = []
// if(userEmail.length === 0){
//     console.log("Array is empty")      //output : Array is empty
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty")  // output is : object is empty
// }


// Nullish Coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 15  // 10
// console.log(val1)

// terniary operator
// condition ? truec : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")
