# Array in JS

> Declaration
```js
const myArr = [0, 1, 2, 3, true, false, "faculty", {name:"Saiyam", email:"saiyam@ratm.com"}]
```
    Js array can contain different values with different datatypes.

## Array methods

```javascript
Array.prototype.push(ELEMENT_TO_PUSH);
// pushes given element at the end of array

Array.prototype.pop();
// removes last element of the array

Array.prototype.shift();
// removes FIRST element of the array

Array.prototype.unshift(ELEMENT_TO_INSERT);
// inserts element at the START of array
// NOTE: to insert an element it shifts all the element to right O(n).

Array.prototype.includes(VALUE);
// Determines whether the given value present in array or not returns boolean result.

Array.prototype.indexOf(VALUE);
// return first index of search value if present.

Array.prototype.slice(START_INDEX, END_INDEX);
// returns a copy of portion of the array from START_INDEX to END_INDEX-1

Array.prototype.splice(START_INDEX, END_INDEX);
// REMOVES & RETURNS the actual portion from array.

Array.prototype.concat(Array.prototype);
// concats two arrays

const all_new_heros = [...marvel, ...dc];
// Concats multiple arrays in NEW ONE array and returns it.

const depthArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, 7, [7, 4, 5]]];
const array = depthArray.flat(DEPTH_OF_ARRAY);
// pass infinity if depth is unknown.

Array.prototype.isArray(DATA);
// Determines whether the given data is array or not

Array.prototype.from(DATA);
// creates array from given data

Array.prototype.from(Object.keys(Object.prototype)); 
// creates array from keys of an object

Array.prototype.from(Object.values(Object.prototype));
// creates array from values of an object 

Array.prototype.of(value1, value2, value3);


```