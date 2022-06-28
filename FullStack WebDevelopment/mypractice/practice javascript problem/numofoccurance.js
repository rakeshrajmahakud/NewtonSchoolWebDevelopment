// find  the number of occurance in a string  

// let str  = " hello rakeshraj";
// let userval = "l";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == userval) {
//         count++;
//     }
// }

// console.log("the occurance is "+ count);

// -----------------------------------------

// count all of the occuranes in a string 

function getStringValue(str) {
    const map = {};
    str.split('').forEach(element => {
        if (map[element]) {
            map[element] += 1;
        }
        else{
            map[element] = 1;
        }
        
    });
    console.log(map); //here we find all ocurances of all character 
    
    
    // find the max occurance of character 
    // let max = 1;
    // char = str[0];
    
    // for(let k in map){
    //     if(map[k]>max)
    //     max = map[k];
    //     char = k;
    //     console.log(map[k]);
    // }
    // console.log(`max char is ${char} and the occurance is ${max}`);
}

getStringValue('my name is mr rakeshraj mahakud');



