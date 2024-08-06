function myName() {
        console.log("vijay")
        console.log("govind")
}
// myName()  // finction calling this will do what we have mentioned in the function 


// function addNumbers(num1 , num2) {
//     console.log(num1+num2)
// }
// addNumbers(7,9)    // 16

function addNumbers(num1 , num2) {
    // let result= num1 +num2
    // return result

    return num1+num2
}
// const result = addNumbers(3,4)
// console.log(result)
// console.log(addNumbers(3,4))


// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("rajat"))  // rajat just logged in
// console.log(loginUserMessage())     // undefined just logged in
// console.log(loginUserMessage(""))   // just logged in


function loginUserMessage(username) {
    if(username === undefined ){
        console.log("please enter the user name")
    }
    else{
        return `${username} just logged in`
    }
}
// console.log(loginUserMessage()) 

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100,700,300,150))  // [ 100, 700, 300, 150 ]

const user = {
    name : "raghav",
    price : 160
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`)
}
handleObject(user)  // user name is raghav and price is 160