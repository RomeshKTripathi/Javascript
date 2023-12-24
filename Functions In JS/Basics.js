// piece of code which can be called when we need to perform some task

// console.log('H') // is also a function.

// Syntax 
function fun(/**Parameters of the fun*/){
    // body of the function
}

// calling the function
fun(/**parameters */)


function sayHello(){
    // console.log('Hello')
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
// console.log(message)


function calculateCartPrice(val1, val2, ...args){ // Here '...' is rest operator args becomes array
    return args;
}

// console.log(calculateCartPrice(1,2,3,4,5,6,7))

const user = {
    username : 'romesh',
    price : 299
}

function handleObject(userObject){
    console.log(`Username is ${userObject['username']} and price is ${userObject['price']}`)
}

// handleObject({username:"user one", price:499})

// passing arrays to functions 
const myArray = [100, 200, 300, 400]

function returnSecondValur(getArray){
    return getArray[1]
}
// console.log(returnSecondValur(myArray))











