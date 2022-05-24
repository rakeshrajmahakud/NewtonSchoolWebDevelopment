// find  the number of occurance in a string  

let str  = " hello rakeshraj";
let userval = "l";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == userval) {
        count++;
    }
}

console.log("the occurance is "+ count);