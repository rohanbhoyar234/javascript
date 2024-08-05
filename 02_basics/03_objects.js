// we can define objects in two ways either literal or constructor
// when we declare with literal singleton is not formed

// object literals
// object.create  ---> in this singleton is formed

const mySym = Symbol("key1")

const user = {
    name : "Raghav",
    "full name": "Rohan B Bhoyar",   // we can not access this by "." (dot) operator
    [mySym] : "mykey1",
    age : 16,
    location : "vrindavan",
    email : "rohan16@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays : ["monday","tuesday"]
}

// console.log(user.email)  // rohan16@gmail.com
// console.log(user["email"])  // rohan16@gmail.com
// console.log(user["full name"])  // Rohan B Bhoyar
// console.log(user[mySym])

// user.email = "raghav16@gmail.com"
// console.log(user.email)  // email get changed

// Object.freeze(user)  // now changes will not get propoget

user.email = "raghav16@gmail.com"
// console.log(user.email)  // email does not changed

user.greeting = function(){
    console.log("hello, user")
}

// console.log(user.greeting)  // [Function (anonymous)]  ---> function return back
// console.log(user.greeting())

user.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(user.greetingTwo())
