// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected`)
})();

( (name)=>{
    // Un-named IIFE
    console.log(`${name} DB Connected to database`)
})('romesh');