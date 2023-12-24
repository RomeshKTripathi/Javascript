const score = 456 // Number defined Primitive
const balance = new Number(100.909) // Number Object
console.log(balance.valueOf().toFixed())

console.log(balance.toString()) // Return the string representation of the number "100.909"
console.log(balance.toFixed()) // returns the fixed value of given number : 100
console.log(balance.toPrecision(3)) // Returns precise value in String format with precise value of given digits
const hundreds = 1000000
console.log(hundreds.toLocaleString()) // Returns in readable string 10,00,000

Number.MIN_VALUE // Minimum intiger value
Number.MAX_VALUE // Maximum value


// ############################## MATHS #################################

console.log(Math)
console.log(Math.abs(-456)) // Returns absolute value
console.log(Math.round(78.3875)) // Returns RoundOFF value of 78.3875 : 78
console.log(Math.floor(45.56)) // returns floor round off : 45
console.log(Math.ceil(45.109)) // return ceil round off : 46
console.log(Math.min(2,5,4,8)) // returns minimum value : 2
console.log(Math.max(4,2,6,4))// returns Maximum value : 6
console.log(Math.random()) // returns random value b/w 0-1:
console.log(((Math.random() * 10) + 1).toFixed()) // returns random value b/w 0-1:
const min = 10
const max = 20
// we need random value b/w a range
console.log(Math.floor(Math.random()* (max - min + 1)) + min)