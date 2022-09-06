const fs = require("fs");
const path = require('path');
/*
fs.writeFileSync(`hello.txt`,`this is next number`);
console.log("display directory name ===>> ", __dirname);
console.log("display file name ===>> ", __filename);
*/


// Taking user input and creating a file :---
/*
const input = process.argv;   // it takes the input from the command line

if (input[2] == "add") {
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == "remove"){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid input");
}
*/

/*
console.log(__dirname+"/folders");       //it will provde the current folders path 
// console.log(path);            
fs.writeFileSync(`${__dirname}/folders/hello.txt`, "this is text new file")
*/

fs.readdir(__dirname+"/folders/",(err,files)=>{       //getting files, readdir reads the files
    console.log(files[0]);   // it wil return an array 
})

