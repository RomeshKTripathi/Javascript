// De Structuring in Object

const course = {
    coursename : 'js in hindi',
    price : '999',
    courseInstructor : 'hitest'
}

// course.courseInstructor // to avoid this 
const {courseInstructor} = course // clean syntax to extract value | Object Destructuring.

console.log(courseInstructor)


// // API : apna kaam kisi aur ke sir pe daal dena 😂
const data = [{
    "name":"romesh",
    "age":"23",
    "address":"Mathura"
}]