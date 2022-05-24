/* Sum of Product of Digits of a given number
Problem Statement
You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
Input
User Task:
Since this will be a functional problem, you don't have to take input. You just have to complete the function sumOfProductOfDigits() that takes the integers n1 and n2 as a parameter.

Constraints:
1 <= T <= 100
0 <= n1, n2 <= 10^6
Output
Return the sum of product of corresponding digits of n1 and n2.
Example
Sample Input:
2
9 0
35 6798

Sample Output:
0
67

Explanation:-
For test 2:-
(8*5) + (9*3) + (7*0) + (6*0) = 67 */


//solution
function sumofproduct(n1,n2) {
    let sum = 0;
    while(n1> 0 && n2>0){
        sum += (n1%10) * (n2%10);
        n1 = Math.floor(n1/10);
        n2 =Math.floor(n2/10);

    }
    console.log(sum);
}

sumofproduct(6,34);    // calling the function