// const tinderUser = new Object()  // singelton object
// console.log(tinderUser)  // {}

const tinderUser = {}   // non - singelton object

tinderUser.id = "1216rb"
tinderUser.name = "samantha"
tinderUser.isLoggedIn = true

// console.log(tinderUser)  // {}

const user = {
    email : "sam21@gmail.com",
    fullname : {
        userfullname : {
            firstname : "samantha",
            lastname : "raghavan"
        }
    }
}

// console.log(user.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1,obj2}
console.log(obj3)  // we are getting the output as object inside object like array inside array
