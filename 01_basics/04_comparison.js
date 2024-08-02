// console.log(2>1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)
// console.log(2<1)

// console.log("2">1)  // true
// console.log("02">1)  // true

// console.log(null>0)  // false
// console.log(null==0) //false
// console.log(null>=0) //true
/*
the reason is that an equality check == and comparison > < >= <= work differently.
comparison converts null to number, treating it as 0.
thats why null>=0 is true and null>0 is false
 */

// console.log(undefined == 0) // false
// console.log(undefined > 0) // false
// console.log(undefined >= 0) // false
// console.log(undefined <= 0) // false

// strict check ===
console.log("2" == 2) // true
console.log("2" === 2) // false