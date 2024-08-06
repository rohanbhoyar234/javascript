// Immediately Invoked Function Expression (IIFE)
// we use IIFE to stop global scope pollution

(
    function rb(){  // named iife
        console.log("DB connected")
    }
)();  // we to compulsory give semicolon ; after IIFE to end it 
// otherwise the another IIFE followed by it will not execute 

(
    (name )=> {  // unnamed iifescript
        console.log(`db connected two ${name}`) // db connected two rohan
    }
)("rohan")
