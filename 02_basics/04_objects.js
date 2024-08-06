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

// const obj3 = {obj1,obj2}
// console.log(obj3)  // we are getting the output as object inside object like array inside array

// const obj3 = Object.assign({},obj1,obj2)
// follow above syntax or we can also do it by spread the output will be same
const obj3 = {...obj1,...obj2}
// console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))   // [ 'id', 'name', 'isLoggedIn' ]   we get the array of keys
// console.log(Object.values(tinderUser))   // [ '1216rb', 'samantha', true ]  we get the array of values
// console.log(Object.entries(tinderUser))    //   [ [ 'id', '1216rb' ], [ 'name', 'samantha' ], [ 'isLoggedIn', true ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true


// object destructuring  

const course = {
    courseName : " flute",
    price: 1600,
    courseInstructor : "krishna"
}

// course.courseInstructor
const {courseInstructor:instructor,courseName:cname} = course
// console.log(instructor)  // krishna
// console.log(cname)   // flute

// JSON API

{
    // this two courley braces is simplt known as JSON

    "name" ; "raghav",
    "course" ; " flute"
}

[
    // this is also an API
    {},
    {},
    {}
]
