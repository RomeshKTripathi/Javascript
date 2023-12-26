const myArr = [0, 1, 2, 3, true, false, "romesh", {name:"romesh", email:"romesh@gmail.com"}]
console.log(myArr)

const myHeroes = ["Ironman", "Batsman", "Capt.Marvel"]

const myArray2 = Array(1,2,3,4,5)
console.log(myArray2[1])

// ########### Array Methods ############

const first = Array(1, 2, 3)
console.log(first) // prints array : [1, 2, 3]
console.log(typeof first) // object
console.log(first.push(4)) // Push 4 at the end in array
console.log(first) // [ 1, 2, 3, 4 ]
console.log(first.pop()) // removes an element from last
console.log(first) // [ 1, 2, 3 ]

console.log(first.shift()) // removes first element from start all values shifted to left O(n)
console.log(first)

console.log(first.unshift(1)) // adds element at start position all values shifted to right O(n)
console.log(first)

console.log(first.includes(3)) // determines whether array contains Search value : true;

console.log(first.indexOf(4)) // return the index of search value if it is present -1 otherwise : -1

const newArr = first.join() // converts array in string 
console.log(typeof newArr) // string
 
// console.log(myHeroes.join())

console.log("A ", myHeroes)
 
const myn1 = myHeroes.slice(1,3) // returns a copy of portion of the array from START to end index.
console.log(myn1) // [ 'Batsman', 'Capt.Marvel' ]

// SPLICE
console.log(myHeroes.splice(1,2)) // REMOVES AND RETURNS the actual portion of the array.
console.log(myHeroes) // array after splice operation.