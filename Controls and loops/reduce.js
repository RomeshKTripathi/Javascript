const nums = [1, 2, 3, 4, 5]

const add = (val1, val2)=>{ return val1+val2}

const sum = nums.reduce((sum, item)=>{
    return sum + item;
}, 0)

// other way
const initialValue = 0;
const total = nums.reduce(add, initialValue)


const shoppingCart = [
    {
        itemName: "Js Course",
        price : 2999
    },
    {
        itemName: "Java Course",
        price : 4999
    },
    {
        itemName: "Android Course",
        price : 9999
    },
    {
        itemName: "Python Course",
        price : 6999
    },
]

// we have to add all prices from above cart data.

const totalPrice = shoppingCart.reduce((acc, item)=> acc+item.price, 0)
// 0 is passed to initialize acc(accumalator) first time.

console.log(`Price to pay ${totalPrice}`)
