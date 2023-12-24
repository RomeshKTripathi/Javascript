// Primitive Data Types;
// 7 Types: String, Number, Boolean, null, undefined, "Symbol", BigInt
const num = 100
const name = "string"
const isLoggedIn = true
const isNull = null
const id = Symbol('123')
const anotherId = Symbol('123')
const apple = undefined;
console.log(apple)
const bigNumber = 283474565837456483674567n;
console.log(typeof(bigNumber))


// Javascript is a dynamically typed language | We don't need to assing datatype to variables.

// Reference Type | Non Primitive datatypes;
// Arrays, Objects, Functions.

const heros = ["Shaktiman", "Ironman", "Captain Marvel"]
const dataObject = {
    name : "romesh",
    age : 23,
    email : "romeshktripathi@gmail.com"
}

const myFunction = function(){
    console.log("inside function")
}
myFunction()

// typeOf(variable) to know the type of data .

// ########################################---MEMORIES---########################################

// Stack(Primitive) , Heap(Non-Primitive)

let myName = "romesh kumar tripathi"
let copyMyName = myName
copyMyName = "new name"
// console.log(copyMyName)
// console.log(myName)

const userOne = {
    email: "someone@gmail.com",
    upi: "somebody@okicici"
}

let copyUserName = userOne
copyUserName.email = "otherone@gmail.com"

console.log(userOne)

