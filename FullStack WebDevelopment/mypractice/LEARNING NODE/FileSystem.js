//coding monk youtube channel
const fs = require('fs');
let data = "you can put your data as a string formal"
// let newdata = {
//     name : " rakeshraj",
//     age : "mahakud",
//     number : 9685232341
// }
// fs.writeFile('demo.txt',data,(err)=> err ?console.log(err): console.log("file created.."));  // either you put string data 
// fs.writeFile('newdatafile.txt',JSON.stringify(newdata),(err)=> err ? console.log(err): console.log("file created"));  //or you can parse any data to json stringfy to make it string and then send.
// -----------------------------------------------
// fs.readFile('myfile.txt','utf-8',(err,data)=>{
//     if(err) {
//         throw err;
//     }
//     else {
//         console.log(data);
//     }
// });                    //note:- either you pass utf-8 as second parameter or use .toString on data to read file

// note:- Node just reads the file byte for byte, without assuming anything about its contents thats why it returns buffer code so we need to convert it to sting or any utf 8 format
// -----------------------------------------------------

// fs.appendFile('myfile.txt',"this is new data appended",(err)=> console.log(err));  // for adding new data to that file
// -------------------------------------------------------------
// fs.rename('myfile.txt',"myfilenew.txt",(err)=> console.log(err))
// -----------------------------------------------------------
// fs.unlink('deltefile.txt',(err)=>{
//     if (err) {
//         throw err;
//     }else{
//         console.log("file deleted");
//     }
// })      //for delete a file.

// --------------------------------------------------------

// fs.rmdir('myfolder',(err)=> console.log(err))  //it removes the folder

// ----------------------------------------------------------------
// fs.mkdir('myfolder',(err) => err? console.log(err) : "folder created") //it creates a folder

// console.log(fs);

// -------------------------------------------------------------
// reading directories  
// fs.readdir(__dirname,(err,files)=>{                  
//     files.forEach(function (file) {             //return all file name of that perticular directory
//             console.log(file);
//     });
// })
// -------------------------------------------------------

let x = fs.existsSync('data.js')
console.log(x);                // it checks a file or directory exits or not if exists then it will retun true.



// ----------------------------------------
// There is catch here, that if we try to create more folders, like one inside the another, it will fail. For that we need to pass a flag called recursive Example .

fs.mkdir('./some_folder/some_another_folder', {recursive: true},  (error)=> {
    console.log(error);
})



