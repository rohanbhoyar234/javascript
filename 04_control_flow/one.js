/*
if statement
if(true){

}

comparison operator
> , < ,>= , <= , == ,!= , ===

*/

if(2 == "2"){
    // console.log("executed")  // output is : executed
}
// so here we can see that " == " operator only check the value and does not check the data type

if(2 === "2"){
    // console.log("executed")  // does not get executed
}
// here " === " operator also check the data type

// const temprature = 41
// if(temprature < 50){
//     console.log("temprature is less than 50")
// }
// else{
//     console.log("temprature is greater than 50")
// }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`) // user power: fly
// }


const balance = 1000
// if(balance > 500) console.log("test")  // test   this is implicit scope 
// if(balance > 500) console.log("test"),
// console.log("test2")
// //output is : test
            // test2

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(userLoggedIn && debitCard ){
//     console.log("allow to buy course")  //  allow to buy course
// }

// if( loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in")   // user logged in
// }

