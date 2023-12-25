const coding = ['js', 'swift', 'python', 'java', 'cpp']

const upperNames = coding.map((item)=>{
    return item.toUpperCase();
})

// Chaining
const res = coding.filter((item)=>item.startsWith('s')).map((item)=> item.toUpperCase());

console.log(res); 