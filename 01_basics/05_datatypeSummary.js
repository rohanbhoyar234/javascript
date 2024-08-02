//javascript is dynamic typed language

// primitive datatypes
// 7 types : they are call by value
/*
String
Number
Boolean
null
undefined
Symbol
BigInt
 */

// Refrence (Non primitive)
/*
Array
Objects
Function
 */

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)  // false so they both are different 

// const bigNumber = 78596412589635n  // so now it becomes bigInt

//array
const heros = ["vijay","ram","pawan","ramcharan","allu arjun"]

//objects
let myObj ={
    name : "rohan",
    age: 20 
}

//function
const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myFunction)  // function   also called as object function

// all non primitive datatype has object return type 


// *******************  memmory  ***********************
// primitive => stack memory (we get a copy of a variable)
// non-primitive => heap memory (we get a refrence)

let rohan = "rohanname"
let anotherName = rohan   // will get a copy of variable rohan
// console.log(rohan)
// console.log(anotherName)

// anotherName ="rajat"
// console.log(rohan)
// console.log(anotherName)

let userOne ={
    email : "rohan.com",
    upi : "user@16"
}

let userTwo = userOne // now userTwo will get the refrence of userOne
userTwo.email = "raghav.com"     // email get changed in both 
console.log(userOne.email)     // "raghav.com" 
console.log(userTwo.email)      //  "raghav.com" 

