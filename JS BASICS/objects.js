// Objects in javascript
// Javascripts objects can be declared in two ways Literals | Constructor(Singleton)

const JsUser = {} // Empty object created

// javascript object has key value pairs
const mySym = Symbol('key1')
const data = {
    'full name': "Romesh Tripathi",
    'mobile': "5348726374",
    'email': "romesh@yahoo.com",
    'address': "Mathura",
    [mySym]:"myKey1" // how to use symbol as key

}
// MOST IMPORTANT FOR INTERVIEW.
console.log(typeof data[mySym])

data.email = "romeshtripathi@gmail.com"
console.log(data)

// Object.freeze(data) // Now no changes will reflect in the data object

data["full name"] = "Romesh Kumar Tripathi"
console.log(data)


data.greeting = function(){
    console.log(`hello ${this["full name"]} your email is ${this.email}`)
}

console.log(data.greeting())













 