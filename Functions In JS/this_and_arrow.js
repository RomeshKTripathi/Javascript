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

function chai(){
    console.log(this)
}

chai()