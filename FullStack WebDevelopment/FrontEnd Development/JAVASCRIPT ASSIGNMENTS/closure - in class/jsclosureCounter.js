// JS Closure Counter
// Complete the function countBy
// Such that it takes a initial number which is the defualt value of out counter. And returns
// a function which also takes a number and returns the initialCount + number supplied to second function.

// Ex:-

// const count = countBy(4) // initial value of counter 4, returns a function

// console. log(count(2)) // prints 6 because 4 + 2

// console. log(count(-4)) // prints 2 because 6 - 4

// console. log(count(8)) // prints 10 because 2 + 8

// You have to return implement countBy function such that it can be run like that.


function countBy(initial){

    let count = initial;
    return function(number) {
        return count = count+number;
        }

}