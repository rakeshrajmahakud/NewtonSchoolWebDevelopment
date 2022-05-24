let str = "my red cad has a red bag";
var newstr = str.replace("red","blue"); 
//note it will only replace the first matching word
console.log(newstr);

//method 2 using regex
let reg = new RegExp("red","gi");
var newRegStr = str.replace(reg,"blue");//here it will replace that ward in the string no matter how many and which case it will be written
console.log(newRegStr);