let str = "my Name Is Rakeshraj mahakud";
const reg = /[aeiou]/gi;
let chars = str.match(reg); 
console.log(chars);  //returns an char array
console.log(chars.join(",")); //conver array to string 
console.log(chars.length);