// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


// Nested scope in js
function outer(){
    const username = "Romesh"

    function inner(){  
        const website = "YouTube"
        console.log(username)
    }
    
    inner()
}

// outer()

if(false){
    const username = 'romesh'
    
    if(username == 'romesh'){
        const website = " YouTube"
        console.log(username + website)
    }
    // console.log(website) // Outside the scope.
}

// *******************  INTERESTING  **************************
console.log(addOne(5)) // can be called before declaration

function addOne(num){
    return num + 1
}


// other way to define function.
// Concept Hoisting
const addTwo = function(num){
    return num + 2
}
console.log(typeof addTwo) // because variable holds the function so it can't be called before declaration

// Arrow function 
const addThree = (num)=>{
    return num+3
}



