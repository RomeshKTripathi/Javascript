// piece of code which can be called when we need to perform some task

console.log('H') // is also a function.

// Syntax 
function fun(/**Parameters of the fun*/){
    // body of the function
}

// calling the function
fun(/**parameters */)


function sayHello(){
    console.log('Hello')
}

// sayHello()

// FUNCTION TO ADD TWO NUMBERS

function addTwoNumbers(num1, num2){
    return num1 + num2
}

const result = addTwoNumbers(4, 5)

// console.log(result) // 9

function loginUserMessage(username){
    return `${username} just logged in..`
}

const message = loginUserMessage("romesh")
console.log(message)


// STANDARD WAY TO WRITE FUNCTION IN PRODUCTION CODE.






