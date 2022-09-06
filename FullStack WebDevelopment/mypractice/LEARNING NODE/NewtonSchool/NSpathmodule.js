let path = require('path')
// console.log(path);

//console.log(__dirname);    //  it returns the current directory path

//console.log(path.basename('../folders/hello.txt')); //  it returns the base name which is hello.txt 
//// in hello.txt  the hello part is name and the .txt part is extension ,this to gether called base name.

//console.log(path.extname('../folders/hello.txt'));    //it returns the extension which is .txt 

// console.log(path.parse('../folders/hello.txt'));  //it will return an object with complete details ++>
//// op:- {
        //     root: '',
        //     dir: '../folders',
        //     base: 'hello.txt',
        //     ext: '.txt',
        //     name: 'hello'
        // } 
// -----------------------------
// let x = {
//             root: '',
//             dir: '../folders',
//             base: 'hello.txt',
//             ext: '.txt',
//             name: 'hello'
//         } 
// console.log(path.format(x)) ; // op:- ../folders\hello.txt   // it format back to normal path the vice varsa of path.parse

// this method checks a path os absolute or relative
// console.log(path.isAbsolute('../folders/hello.txt'));  // its is a releative path so it returns false
// console.log(path.isAbsolute('C:/Users/RAKESHRAJ/Desktop/LEARNING NODE>'));  // true

//console.log(path.join('./hello','hii','/mypath','myname.txt')); //it will join all the parameters and return as a complete path, you can pass as many as parameter .


// the normalize method normalizes the given path , this is done by removing the relative paths in a url for example :-
// console.log(path.normalize('C:/Users/RAKESHRAJ/Desktop/../LEARNING NODE')); //\Users\RAKESHRAJ\LEARNING NODE 


// the relative method returns the relative path from one path to second path 

// console.log(path.relative('./myfiles/newfile/x.txt','./folders/hello.txt')); //op:-    ../../../folders/hello.txt

// -------------------------------
// path.relative('provide source path  here' ,'provide destination path here');

