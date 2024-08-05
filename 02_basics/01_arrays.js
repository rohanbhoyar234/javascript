// arrays 
// js arrays are resizable
// js arrays are can be of mixed data types
// array-copy in js create shallow copy   ---> which share the same refrence

// const myArr = [0,1,2,3,4,5,true,"Rohan"]   // also valid
const myArr = [0,1,2,3,4,5]
const Heros = ["thalapathy","rowdy","ram","ramcharan","alluarjun"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1])  // 1

// Array methods

// myArr.push(6)
// console.log(myArr)   // 6 is added in array
// myArr.pop()
// console.log(myArr)  // last value get poped

// console.log(myArr.includes(9))  // false
// console.log(myArr.indexOf(9))  // -1
// console.log(myArr.indexOf()) // -1

// const newArray = myArr.join()  // join the array in string format
// console.log(myArr)   // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray) // 0,1,2,3,4,5 ---> string

// slice ,splice

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)      // A  [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1)     // [ 1, 2 ]
console.log("B ",myArr)     // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("c ",myArr)
console.log(myn2)    // [ 1, 2, 3 ]  
/*
output after splice   c  [ 0, 4, 5 ]
                        [ 1, 2, 3 ]
                         so it removes the elements from original array after doing splice
 */

                         


