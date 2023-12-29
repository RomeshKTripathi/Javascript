if(true){
    console.log(`Inside if statement`)
}
// Comparicion operaters
// <, >, <= , >= , ==, != , ===, !==
// console.log(2 != '2')

// SHORTHAND NOTATION | Implicit Scope
if(true) console.log("one"), console.log('two'); // this practice is not recomanded | implicit scope

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

// truthy | falsy values.
// falsy values : 0, -0, undefined, null, empty_string, 0n, false, NaN
// truthy values: all values except falsy values exp {}, [], function(){} are truthy values too.

// const userEmail = "Romesh.ai"
// if(userEmail){
//     console.log('Got User email')
// }else{
//     console.log(`Dont have user email`)
// }



// Nullish Coalescing Operator (??): null | undefined

let val
val = 5 ?? 10
console.log(val)
val = null ?? 15
console.log(val)
val = undefined ?? 20
console.log(val)

// turnary operator | (condition ? first case : second case)


