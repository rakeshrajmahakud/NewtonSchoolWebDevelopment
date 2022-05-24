function removeDuplicates(arr){
        // method 1(by using filter and index of):::
        // let unique = arr.filter((elm,indx)=>{
        //     return arr.indexOf(elm)===indx;
               // // if i want the duplicates then we use the foling line insted of the ipper one 
                // return arr.indexOf(elm) !== indx;
        // })
        // console.log(unique.join(" "));
        // return unique;   // it converts an array to a string 

        // ------------------------------------------
        // my method 2 (by using set)::::
        // let unique = [...new Set(arr)] ;
        //     console.log(unique.join(" "));
        //     return unique;
        // ----------------------------------------------
        // method 3
        // let unique = Array.from(new Set(arr));
        // console.log(unique.join(" "));
        // return unique;

        // ................................................ 
        // method 4 (by using for each and includes )::::
        // let unique = [];
        // arr.forEach(element => {
        //     if (!unique.includes(element)) unique.push(element);
        // });
        // console.log(unique.join(" "));
        // return unique;

        //method 5(by using reduce)::::::



    }
let arr = [1,1,2,3,4,5,5,5,6]
console.log(removeDuplicates(arr));