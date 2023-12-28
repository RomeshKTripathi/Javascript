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