// Reverse all words
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Given a string, reverse each word in the sentence
// Input
// A string containing multiple words

// ex:- "Welcome to this Javascript Guide!"
// Output
// A string with all words reversed
// ex:- "emocleW ot siht tpircsavaJ !ediuG"
// Example
// Sample input:-
// "Welcome to this Javascript Guide!"

// Sample output:-
// "emocleW ot siht tpircsavaJ !ediuG"

// Explanation:-
// The first word is reversed from "Welcome" to "emocleW"
// and similarly all other wrods are reversed but the order of the words is same

function reverseWords(str){
    // write code here
    // use console.log to print output
    
        console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
    }

