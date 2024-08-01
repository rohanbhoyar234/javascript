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

console.log(typeof myFunction)  // function   also called as object function

// all non primitive datatype has object return type 
