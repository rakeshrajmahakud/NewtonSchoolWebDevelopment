// JS Math - 4
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Implement the function sumMaxMin, which should take 5 numbers as input
// and return its result as sum of max and min element of those 5 numbers (Use JS In built functions)
// Input
// Function will take 5 arguments which will be numbers.
// Output
// Function will return a number which is the sum of min and max element of those 5 numbers
// Example
// console. log(sumMaxMin(100, 100, -200, 300, 0)) // prints 100 because 300+(-200) = 300-200

// console. log(sumMaxMin(1, 3, 2, 4, 5)) // prints 6 because 1+5

// console. log(sumMaxMin(-1000, -2000, -10, -120, -60)) // prints -2010 because -2000 min and -10 max sums to -2010



function sumMaxMin(num1,num2,num3,num4,num5){
    // write code here
    // return the output , do not use console.log here
    let x =Math.max(num1,num2,num3,num4,num5);
    let y =Math.min(num1,num2,num3,num4,num5);
    return (x+y);

}