// JS String - 3
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Implement the function doesItContain, which takes 2 strings as argument,
// return true or false whether the first string contains second string or not(Use JS In built functions)
// Input
// Function will take 2 args,
// 1) string in which to check
// 2) the string which is to be checked is it in 1st string
// Output
// Function will return boolean whether it contains given substring or not
// Example
// console. log(doesItContain("Hi World world", "world")) // prints true

// console. log(doesItContain("hi hi hi", "hello")) // prints false


function doesItContain(str1,str2) {
    // write code here
    // return the output , do not use console.log here
        return str1.includes(str2);
}