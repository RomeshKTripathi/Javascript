// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task is complete");
//         // after completing async task call resolve
//         resolve();
//     }, 1000)
// })

// promiseOne.then(()=>{
//     console.log('Promise consumed')
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Async Task two completed');
//         resolve();
//     }, 1000)

// }).then(()=>{
//     console.log('Promise two consumed')
// })

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const data = {
//             name: 'romesh',
//             email:'romesh@outlook.com'
//         }

//         resolve(data);
//     }, 1000)
// }).then((data)=>{
//     console.log(data);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({usename:'romesh', password:'1234'});
//         }else{
//             reject('ERROR: Something went wrong');
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.usename;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log('Finally the promise is either resolved or rejected'))

// console.log(username);

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:'romesh', password:'1234'});
//         }else{
//             reject("Error: Something went wrong!");
//         }
//     }, 1000)
// })


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

//-----------------------------------------------------------------------------

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // time taking process 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();


// By Promises

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
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