const coding = ['js', 'swift', 'python', 'java', 'cpp']

// coding.forEach((item, index, array)=>{
//     // do something with values.
//     console.log(`at index ${index} item is ${item}, in array ${array}`)
// })

function printer(item){
    console.log(item);
}

// coding.forEach(printer)



const myCoding = [
    {
        languageName:"JavaScript",
        languageExtension:"js",
    },
    {
        languageName:"Python",
        languageExtension:"py",
    },
    {
        languageName:"C++",
        languageExtension:"cpp"
    }
]

myCoding.forEach((object)=>{
    console.log(object.languageName)
})