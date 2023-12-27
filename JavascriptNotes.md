# Data Types in Javascript
## Primitive Data Types
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt

> Number 
```Javascript
const num = 100 // Declaration
```

> String
```Javascript
const name = "string"
```

> Boolean
```Javascript
const isLoggedIn = true
```

> null
```js
const isNull = null
```

> Symbol
```js
const id = Symbol('123')
const anotherId = Symbol('123')
```

> undefined
```js
const apple = undefined;
```

> BigInt
```js
const bigNumber = 283474565837456483674567n;
console.log(typeof(bigNumber))
```
    Output: bigint

* Javascript is a dynamically typed language | We don't need to assing datatype to variables.

## Reference Type | Non Primitive datatypes;
1. Arrays
2. Objects
3. Functions

> Array
```js
const heros = ["Shaktiman", "Ironman", "Captain Marvel"]
```

> Objects
```js
const dataObject = {
    name : "romesh",
    age : 23,
    email : "romeshktripathi@gmail.com"
}
```

> function
```js
function fun(){
    console.log("inside function")
}
// calling 
fun()
```

> [!TIP] typeof operator is used to know the data type of variable.


### How memory assigned to variable ?

    Primitive values are stored in stack space and Non-primitive values assigned with heap memory.

*Code Examples:*
```js
const myName = "romesh kumar tripathi"
let copyMyName = myName
copyMyName = "new name"
console.log(copyMyName)
console.log(myName)
```
    Output:
    new name
    romesh kumar tripathi
> [!NOTE] 
> Above example shows that the copy of *myName* is assigned to *copyMyName* variable because it is Primitive type

```js
const userOne = {
    email: "someone@gmail.com",
    upi: "somebody@okicici"
}
let copyUserName = userOne
copyUserName.email = "otherone@gmail.com"
console.log(userOne)
```
    Output
    { email: 'otherone@gmail.com', upi: 'somebody@okicici' }

> [!NOTE]
> In above example we can see that reference of *userOne* is assigned to *copyUserName* and we are able to manipulate the values of object. Object is reference type *variable.*