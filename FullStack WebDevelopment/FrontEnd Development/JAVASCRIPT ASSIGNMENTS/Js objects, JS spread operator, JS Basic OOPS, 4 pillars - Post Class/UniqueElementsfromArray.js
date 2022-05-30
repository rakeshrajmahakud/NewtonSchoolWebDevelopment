// /Unique Elements from array
// Easy

// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Remove duplicates of an array and return an array of only
// unique elements
// Input
// An array containing numbers:-
// Output
// Space separated unique elements from the array
// Example
// Sample Input:-
// [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

// Sample Output:-
// 1 2 3 5 9 8

// Explanation:-
// Extra 1, 2, 5 were removed since they were occurring multiple times.



function removeDuplicates(arr){
    // my method one 
    
        let unique = arr.filter((elm,indx)=>{
            return arr.indexOf(elm)===indx;
        })
         console.log(unique.join(" "));
        return unique ;
    
    // ------------------------------------------------
        // my method 2 
    
        // let unique = [...new Set(arr)] ;
        //     console.log(unique.join(" "));
        //     return unique;
    
    //-------------------------------------------------
        // method 3
            // let unique = Array.from(new Set(arr));
            // console.log(unique.join(" "));
            // return unique;
    // -------------------------------------------------
        // // method 4
        // let unique = [];
        // arr.forEach(element => {
        //     if (!unique.includes(element)) unique.push(element);
        // });
        // console.log(unique.join(" "));
        // return unique;
    
    }