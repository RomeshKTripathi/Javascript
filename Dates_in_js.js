const myDate = new Date()
console.log(myDate) // 2023-12-23T03:35:27.019Z
console.log(myDate.toString()) // Sat Dec 23 2023 09:05:27 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Sat Dec 23 2023
console.log(myDate.toISOString()) // 2023-12-23T03:35:27.019Z
console.log(myDate.toJSON()) // 2023-12-23T03:35:27.019Z
console.log(myDate.toUTCString()) // Sat, 23 Dec 2023 03:35:27 GMT

console.log(myDate.toLocaleString('default', {
    weekday:"long", // show properties 'ctrl + space'
    month:"long"
}))


console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())


console.log(typeof myDate) // object

let myCreatedDate = new Date(2000, 0, 1)
console.log(myCreatedDate.toDateString()) // Sat Jan 01 2000
let dateOne = new Date("2001-01-21")
console.log(dateOne.toDateString()) // Mon Jan 21 2001

let myTimeStamp = Date.now()
console.log(myTimeStamp) // time stamp in miliseconds | seconds = miliseconds/1000




