// dates

let date = new Date()
// console.log(date)   // 2024-08-05T01:15:42.194Z
// console.log(date.toString())   // Mon Aug 05 2024 01:16:31 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString())  // Mon Aug 05 2024
// console.log(date.toLocaleString())  //  8/5/2024, 1:18:36 AM

// console.log(typeof date)  // object

// let myCreatedDate = new Date(2024,10,16)   // Sat Nov 16 2024   ---> because months started from 0 in JS
let myCreatedDate = new Date("2004-11-16")   // Tue Nov 16 2004
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)  // 1722821227052 in mili sec
// console.log(myCreatedDate.getTime())   // 1100563200000  so now both are in mili sec so we can compare them
// console.log(Math.floor(Date.now()/1000))   // 1722821463 time in sec

let newDate = new Date()
let specifiDate = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(specifiDate)  // Monday




