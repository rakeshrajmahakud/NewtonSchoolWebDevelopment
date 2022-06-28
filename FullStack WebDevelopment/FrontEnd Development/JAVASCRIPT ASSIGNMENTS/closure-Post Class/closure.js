/*Closure Multiplication
Easy

Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Complete the "mul" function which will properly return answer by performing multiplication when invoked as below syntax.
Ex:- mul(2)(3)(4) - > 24
Input
Your function will be run by giving 3 numbers in this format
mul(1)(5)(2)
Output
Number resulting multiplication of 3 input numbers
Example
Sample input:-
1 5 2
Sample output:-
10
Explanation:-
1*5*2 = 10  */

function mul (x){
    // write your code  here
        return (y)=>{
            return(z)=>{
                console.log(x*y*z);
            }
        }
    }