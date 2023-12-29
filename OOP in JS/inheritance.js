const Teacher = {
    makeVideo : true
}

const User = {
    name: "chai",
    email: "chai@google.com"
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

// Teacher.__proto__ = User // old syntax

Object.setPrototypeOf(Teacher, User);
console.log(Teacher.name)


