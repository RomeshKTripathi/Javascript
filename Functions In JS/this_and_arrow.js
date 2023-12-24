// this keyword refers to the caller/current object
const user = {
    username : "Romesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website. Price is ${this.price}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sachin"
// user.price = 1999
// user.welcomeMessage()

// console.log(user.welcomeMessage())

// function chai(){
//     console.log(this)
// }

// chai()

const chai =()=>{
    console.log(this) 
}
chai()

const add = (val1, val2) =>{
    return val1 + val2
}
console.log(add(3, 4))

const multiply = (a, b) => a * b // implicit return

console.log(multiply(3, 4))


const getName = ()=>({username:"Romesh"}) // object should be wrapped in brackets'()'
console.log(getName())

const myArray = [2,3,4,5,3,4,5]

// for each
myArray.forEach((item)=>{
    console.log(item)
})



