const name = "romesh"
const email = "romesh@yahoo.com"
// Old way of concatination
// console.log(name + email + "something")
// console.log(`hello My name is ${name} and my email is ${email}.`)

// Other syntax
const gameName = new String('romesh tripathi') // string object
// console.log(gameName.length) // length is property
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('t'))
// console.log(gameName.endsWith('l'))

// console.log(gameName.substring(0, 5)) // returns portion of string starting from the given indices.
const part = gameName.slice(-14, 12) 
// console.log(part)

const newStringOne = "      romesh    tripathi      ji"
// console.log(newStringOne.trim())
const url = "https://localhost/index.js/paper%20bot/name?=romesh"
// console.log(url.replace("%20", " "))
// console.log(url.includes("romesh"))

// Convert String into array
const nameArr = newStringOne.trim().split(" ");
// console.log(nameArr)

// String Primitive
let strPrim = "string";
// String object
const strObj = new String(false)
// console.log(strObj.valueOf())

// #########################  STRING FUNCTIONS   ###################################

const str = new String("something@gmail.com")

console.log(str.at(2)) // return character at index 2 : m
console.log(str.charAt(2)) // return character at index 2 : m
console.log(str.charCodeAt(2)) // return CHARACTER CODE of character present at index 2 : 109
console.log(str.concat(" anything")) // concats the PASSED string with CALLING string : something anything
console.log(str.endsWith('g')) // determines whether a string ends with a character or not.
console.log(str.includes('thing')) // determines whether calling string CONTAINS SEARCH_STRING ? : true
console.log(str.indexOf('t')) // returns the first occurance of the search string: 4
console.log(str.lastIndexOf('i')) // return the index of last occurance of search value : 6
console.log(str.localeCompare('something') ) // returns number indication whether the CALLING string comes before(-1)/after(+1)/or_equivalent(0) to given string in sort order: 1
// console.log(str.match("[a-z0-9{+}]+@[a-z{+}]+.+[a-z{+}]")) // used to match regexp against a string
// console.log(str.matchAll(RegExp)) // return iterator of all regexp's matches
console.log(str.normalize()) // returns UNICODE NORMALIZATION form of the calling string value : something
const TARGET_LENGTH = 25
console.log(str.padEnd(TARGET_LENGTH, '.')) // pads the passed string at the end of given string and returns a new string with TARGET_LENGTH : something................
console.log(str.padStart(TARGET_LENGTH, '.')) // pads the passed string at the start of given string and returns a new string with TARGET_LENGTH : ................something
console.log(str.repeat(3)) // repeats the given string by given number of times : somethingsomethingsomething
console.log(str.replace('t','x')) // replaces the target value with the reference value : somexing
console.log(str.replaceAll('t','x')) // replaces all occurrences
// console.log(str.search(RegExp)) search for a match between a regular expression and calling string
console.log(str.slice(2,5)) // extracts a section of string and returns a new string : met
console.log(str.startsWith('s')) // Determines whether the calling string begins with the characters of string searchString : true
const LENGTH = 5
console.log(str.substr(3,LENGTH)) // returns a portion of the string starting at specified index and extending for a given LENGTH
const START = 3
const END = 5
console.log(str.substring(START, END)) // return portion BETWEEN the INDEXES
console.log(str.toLowerCase()) // string converted to lower case
console.log(str.toUpperCase()) // string converted to upper case
console.log(str.toString()) // Returns a string representing the specified object : something
console.log(str) // [String: "something"]
console.log("    data    ".trim()) // trims whitespace from beginning and end of the string
console.log(str.trimEnd()) // trims whitespace from the end of the stirng
console.log(str.trimStart()) // trims whitespace from start of the string.
console.log(str.valueOf()) // returns the primitive value of the specified object Overrides the Object.prototype.valueOf() method
// console.log()

// ####### DOM Function for string ########
console.log(str.anchor("link")) // <a name="link">something@gmail.com</a>
console.log(str.big())  // <big>something@gmail.com</big>
console.log(str.blink()) // <blink>something@gmail.com</blink>
console.log(str.bold())  // <b>something@gmail.com</b>
console.log(str.fixed())  // <tt>something@gmail.com</tt>
console.log(str.fontcolor("red"))  // <font color="red">something@gmail.com</font>
console.log(str.fontsize(20))  // <font size="20">something@gmail.com</font>
console.log(str.italics()) // <i>something@gmail.com</i>
console.log(str.link('url')) // <a href="url">something@gmail.com</a>
console.log(str.small()) // <small>something@gmail.com</small>
console.log(str.strike()) // <strike>something@gmail.com</strike>
console.log(str.sub()) // <sub>something@gmail.com</sub>
console.log(str.sup()) // <sup>something@gmail.com</sup>

