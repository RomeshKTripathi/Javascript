# Promises in Javascripts

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

> Creating Promises

```js
const promiseOne = new Promise()
```
Promise constructor takes a callback function and calls it with two parameters *resolve* and *reject* 
```js
const promise = new Promise(function(resolve, reject){
    // your async task here
})
```
## Why use Promise

1. To do some async task.
1. Perform database operations
1. Cryptographic calculation which takes time.
1. Netword calls which also takes time.

> Example
```js
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task is complete");
        // after completing async task call resolve
        resolve();
    }, 1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed')
})
```
> Other Syntex
```js
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async Task two completed');
        resolve();
    }, 1000)

}).then(()=>{
    console.log('Promise two consumed')
})
```

> *Handling reject*
```js

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({usename:'romesh', password:'1234'});
        }else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.usename;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log('Finally the promise is either resolved or rejected'))

```

> Handling using *async await*

```js
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'romesh', password:'1234'});
        }else{
            reject("Error: Something went wrong!");
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
```

## Fetching Data from API

> Using async await
```js
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // time taking process 
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers();

```

> Using then
```js
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((jsonData)=>{
    console.log(jsonData);
})
.catch((error)=>{
    console.log("E: ", error);
})
.finally(()=>{
    console.log('Task Completed')
})
```