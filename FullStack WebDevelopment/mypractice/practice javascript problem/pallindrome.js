let str = "dad";
let reverse = str.split("").reverse().join("");
console.log(reverse);

// check pallindrome
if(str === reverse) console.log("pallindrome")
else console.log("not pallindrome");
