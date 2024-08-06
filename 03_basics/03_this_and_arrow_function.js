const user ={
    username : "ram",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)


function rb(){
    let username = "rohan"
    // console.log(this)
    // console.log(this.username)  // output us undefined so we can use this in js with objects only
}
// rb()


// arrow function

const arrow = () => {
    let username = "radha"
    // console.log(this.username)  // undefined
    console.log(this)  // {}
}
// arrow()


const addTwo = (num1,num2) =>{
    return num1+num2
}
// console.log(addTwo(3,4))

// implicit return
// in this we do not use braces {}
// const add= (num1,num2) =>  num1+num2
// console.log(add(3,4))

// but to return the object we need to wrap it in ()
const addition = (num1,num2) => ({username:"rohan"})
// console.log(addition(3,4))      // { username: 'rohan' }
