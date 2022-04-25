// Pattern making (debugging)
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Given an integer n, your task is to print the pattern as shown in example:-
// For n=5, the pattern is:
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 2 1
// 1 2 1
// 1
// Input
// User Task:
// Since this will be a functional problem, you don't have to take input. You just have to complete the function pattern_making() that takes the integer n as parameter.

// Constraints:-
// 1 <= n <= 100
// Output
// Print the pattern as shown.
// Example
// Sample Input:-
// 5

// Sample output:-
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 2 1
// 1 2 1
// 1

// Sample Input:-
// 2

// Sample Output:-
// 1
// 1 2 1
// 1



// --------------------------------------------

public static void pattern_making(int n){
 for(int i=1;i<=n;i++) {
            for(int j=i;j<=n-1;j++) {
//                System.out.print(" ");
            }
            for(int j=1;j<=i;j++) {
                System.out.print(j+" ");
            }
            for(int j=i-1;j>=1;j--) {
                System.out.print(j+" ");
            }
            System.out.println();
        }

        for (int i = n-1; i >= 1; i--) {
            for (int j = 1; j <= i; j++)
                System.out.print(j+" ");
            for (int k = i - 1; k >= 1; k--)
                System.out.print(k+" ");
            System.out.println();
        }
}


