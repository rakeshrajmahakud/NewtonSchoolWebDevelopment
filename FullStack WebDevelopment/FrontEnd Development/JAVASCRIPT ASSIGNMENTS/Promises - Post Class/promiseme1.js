// JS Promise me - 1
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Complete the function promiseMe
// Such that it takes a number as first arguement(time) and a string as second argument(data).
// It returns a promise which resolves after time milliseconds and data is returned.

// Note:- You only have to implement the function, in the example it
// shows your implemented question will be ran.
// Input
// Function should take number as first argument and data to be returned as second.
// Output
// Resolves to the data given as input
// Example
// promiseMe(200, 'hi'). then(data=>{
// console. log(data) // prints hi
// })





function promiseMe(num,data) {
    // return the output using return keyword
    // do not console.log it
    return new Promise((resolve)=>{
        setTimeout(resolve(data),num);

    })

}