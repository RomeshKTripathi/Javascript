
// Object.prototype.PI = 4;
// console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const chai = {
    name : 'Elaichi Chai',
    price: 250,
    isAvailable: true
}

Object.defineProperty(Math, 'PI', {
    writable:true,
    enumerable:true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable: false,
    configurable: true
});

chai.name = 'Adrak Chai'
console.log(chai)

// iterate object
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} = ${value}`);
    }
}