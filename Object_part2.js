// Making Singleton object
const tinderUser = new Object() // this is Singleton Object


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email : "some@gmail.com",
    fullname:{
        fname:'John',
        lname:'Doe'
    },
    address:'Mathura'
}

// console.log(regularUser.fullname?.fname) // ? is used to check if fullname exist only then check for fname

// console.log(regularUser.name?.fname) // output : undefined

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3 : 'c', 4: 'd'}

const obj3 = Object.assign({}, obj1, obj2) // combines all object in first passed object FIRST OBJECT GETS CHANGED
console.log(obj3)

// spread syntax
const obj4 ={...obj1, ...obj2} // {} is use in object spread [] is array spread1
console.log(obj4)

// we receive array of objects from database

const database = [
    {
        id:'1',
        name:'user one',
        email:'userone@gmail.com'
    },
    {
        id:'2',
        name: 'user two',
        email: 'usertwo@gmail.com'
    },
    {
        id:'3',
        name:'user three',
        email:'userthree@gmail.com'
    }
]

console.log(database)

// How to get keys from a object
const keys = Object.keys(tinderUser)
const values = Object.values(tinderUser)
console.log(`keys are : ${keys}`)
console.log(`values are : ${values}`)
// check if a key exists in the object

console.log(tinderUser.hasOwnProperty('isLogged')) // determines whether the property presents in the object
