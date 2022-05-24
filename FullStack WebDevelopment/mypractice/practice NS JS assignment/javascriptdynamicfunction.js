
/*JS Dynamic Function Input
Problem Statement
Modify the takeMultipleNumbersAndAdd such that it can take any number of arguments
and return its sum.

This is JS only question.
Input
Function should be able to take any number of args
Output
Sum of the numbers
Example
takeMultipleNumbersAndAdd(1, 2, 2) should return 5 because 1 + 2 + 2

takeMultipleNumbersAndAdd(-1, 2, -1, 5) should return 5     */



function unlimitedArgumentaccepted() {
    let sum = 0;
    for(let i =0;i<arguments.length;i++){
        sum = sum+i;
    }
    console.log(sum);
}

unlimitedArgumentaccepted(1,2,3,4);