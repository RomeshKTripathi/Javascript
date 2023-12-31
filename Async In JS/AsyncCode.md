# JavaScript

1. JavaScript is Synchronous
2. Single threaded language

## Execution Context
1. execute one line of code at time
```Javascript
    console.log(); // first executed
    console.log(); // second ex ed
```
### Blocking Code vs Non Blocking Code
![Javascript Working Diagram](./JS%20Engine.png)

#### Blocking Code (Async)
* Blocking code blocks the program for some task.
* Read file sync.
* To perform ATOMIC Operation.
#### Non Blocking Code (Sync)
* Dosen't block the code execution.
* Read file ASYNC.
* To parallaly execute tasks.

# Global & Functional execution context

> EVAL execution context (Optional to learn)

# Execution  
## Step 1:
    Global Execution | Environment-
    Global Environment assigned to 'this'

## Step 2 : 
        Memory Creation phase | Creation phase-
        i. memory assigned to variables but value is undefined
        ii. function defination
        Everything happens line by line

## Step 3 :
    Execution Phase-
        i. values assigned to variables 
        ii. when a functions return value is assigned to a variable then 
            a new executional context is created for that particular function
            memory creation  + execution phase happens for that functional context
            ---------------------------------------------------------
                i. memory assigned to memory but value is undefined
                ii. functional defination if any
                iii. values assigned to variables
                iv. value calculated and returned on demand.
            ---------------------------------------------------------
        iii. Everything else executed.
        Functional execution context is deleted after execution.

## setInterval() & clearInterval()

> setInterval()
    
    Repeatedly performs given task after given interval. and RETURNS its REFERENCE.
```js
const intervalReferance = setInterval(()=>{
    // Some task to perform repeatedly.
}, 1000, OPTIONAL_PARAMETER);

``` 
> clearInterval()

    To clear a interval we can use clearInterval() function which takes the reference of the setInterval which you want to clear

```js
clearInterval(intervalReferance);
```



## setTimeout() & clearTimeout()

> setTimeout()

    Executes after given time

```js
const timeoutReference = setTimeout(()=>{
// task to execute
}, 1000);
```

> clearTimeout()

    used to clear timeout function before its execution. it takes reference of setTimeout which you want to clear
```js
clearTimeout(timeoutReference);
```


