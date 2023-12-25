 // for loop in js
 for(let i = 1; i <= 10; i++){
    // console.log(i);
 }


 const Array = ['one', 'two', 'three', 'four', 'five'];
 for(const count of Array){
    console.log(count);
 }

 Array.forEach(element => {
    console.log(`This is ${element}`);
 });


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for(const [key, value] of map){  // for in loop can't be used for map
   console.log(key + '=>' + value)
}

const myObject = {
   'game1':'NFS',
   'game2':'Spiderman'
}

for(const key in myObject){
   console.log(myObject[key])
}
for(const val in Array){
   console.log(Array[val]);
}





 