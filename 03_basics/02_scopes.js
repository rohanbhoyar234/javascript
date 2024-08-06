// {} this braces represents the scope

if(true){
    let a = 100
    const b =200
    var c = 300
}
// console.log(a)  //  output : a is not defined because we are printing it out of ots scope
// console.log(b)  //  output : a is not defined because we are printing it out of ots scope
// console.log(c)   // 300 here var get accessed out of its scope also

// nested scopes

function one(){
    const username = "rajat"

    function two(){
        const website ="youtube"
        console.log(username)   // rajat
    }
    // console.log(website)     // will not printed 

    two()  
}
// one()  

if(true){
    const username ="raghav"
    if(username === "raghav"){
        const website = " youtube"
        // console.log(username + website)  // raghav youtube
    }
    // console.log(website)   // will not execute
}
// console.log(username)  // will not execute

// ************ something new ************

// console.log(addOne(5))  // will execute output is 6
function addOne(num){
    return num +1
}

// console.log(addTwo(5))  // will not execute because we in this case we hold the function in a variable
// concept of hosting
const addTwo = function(num){
    return num +2
}


