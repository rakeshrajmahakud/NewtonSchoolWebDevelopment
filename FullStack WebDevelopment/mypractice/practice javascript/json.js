// json support 6 type of datatypes 
// it ignores functions 
/*
1. string
2. number
3. object
4. arrary
5. null
6. boolean
*/

// to convert Object to json string 
// JSON.stringify(object name here)

// to convert json to original format 
// js.parse(json file here)


// extract all the values in json object  //////
// var obj = {a:{b:1},c:2,d:3,e:{m:{r:5}}};

// function printvalues(obj) {
//     for (let k in obj){
//         if (obj[k] instanceof Object) {
//             printvalues(obj[k]);
//         }else{
//             console.log(obj[k])
//         }
//     }
// }

// printvalues(obj);