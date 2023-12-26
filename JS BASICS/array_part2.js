const marvel = ['thor', 'Ironman', 'Captain Marvel', 'Spiderman']
const dc = ['Superman', 'Flash', 'Batman']

// marvel.push(dc) // pushes array dc as element in array marvel : [    'thor','Ironman','Captain Marvel','Spiderman',[ 'Superman', 'Flash', 'Batman' ]]

const allHeros = marvel.concat(dc) // pushes all the element of dc in marvel array and returns new array.

console.log(allHeros) 

const all_new_heros = [...marvel, ...dc] // spread operator
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 7, [7, 4, 5]]]
const usable_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(usable_array)

console.log(Array.isArray("Something")) // determines whether the given data is array 
console.log(Array.from("Something")) // creates array from given string 

console.log(Array.from({name:"romesh"})) // INTERESTING CASE creates empty array | we have to give key or value to determine the array to be created.

// array from variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // works as Constructor.


