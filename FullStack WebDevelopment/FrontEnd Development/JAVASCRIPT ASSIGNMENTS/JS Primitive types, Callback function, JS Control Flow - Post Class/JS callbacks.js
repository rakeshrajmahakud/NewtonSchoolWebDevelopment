// JS callbacks
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Complete the function callThisFnBack
// Such that it takes a number as first arguement and a function (callback function) as an
// argument and returns the result of the callback function with its argument as the first argument
// to the callThisFnBack.
// Input
// Function will take two arguments, one which is a number and second which will be a function.
// Output
// Returns the result of the second argument which is a function that is ran with the first argument.
// Example
// Ex:-
// const result = callThisFnBack(5, (num)=>{
// return num+6
// })
// console. log(result) // prints 11 because 5+6



function callThisFnBack(a,add){
    return add(a);
}
function add(num){
   return num+num;
}