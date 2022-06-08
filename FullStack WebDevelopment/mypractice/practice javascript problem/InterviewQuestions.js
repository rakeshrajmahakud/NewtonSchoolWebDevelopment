// Q1-

// for (var i = 0; i <=5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }


//Q2-

// for (let i = 0; i <=5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }

// Q3-

// console.log("5"*3);

// Q4-

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);

// })();    //2,4, 3,1

// Q5:-

// const arr = [1,2,3,4,5,6,7]
// let y =  arr.forEach(x =>  x*x)
// let  x = arr.map(x => x*x)
// console.log(y);  //undefined
// console.log(x); // [1,4,9,16,25,36,49]


// q6:

// console.log([]===[]);    //false
// console.log([] == []);    //false
// console.log(null === undefined);  // false
// console.log(null == undefined);   // true
// ------------------------------------------------
// Q7:-

// function foo() {
//     let x =(y = 0);
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(),typeof x , typeof y);
// ------------------------------------------
// Q7
// const arr = ["a","b","c","d"];
// delete arr[1];
// console.log(arr.length);  //4
// console.log(arr);   //[ 'a',empty, 'c', 'd' ]

// ----------------------------------------------

// if (true) {
//     let a = b = 12
//     console.log(b);
//     console.log(a);
// }

// console.log(b);
// console.log(a);    // uReferenceError: b is not defined

// OUTPUT
// 12
// 12
// 12
// uReferenceError: b is not defined

// ------------------------------------------------------------

// var a = 10;
// var fn = function () {
//     console.log(a);
//     var a = 20;
// }

// fn();    //undefined

// ---------------------------------------------------------------

// function fn() {
//     console.log(this);
// }

// fn();     //window object   (if we run it on browser and if we run it n node then the op is global object)
// new fn();  // {}  (the output will be empty object  because new keyword create an empty object forthis fn)

// --------------------------------------------------------

// var fn = 10;
// function fn() {
//     console.log(20);
// }

// console.log(fn);  //10

//--------------------------------------------

// console.log(a);
// let a = 20;
// console.log(a);

// output  :-- uncoight referenceerror a is not defined 

// -------------------------------------------------------
// let a;
// console.log(a);  //undeined
// a = 5;
// console.log(a);  //5

// -------------------------------------------------------------

// // maek a join funton like Array.join()////////////////////////////////

// function myjoin(separator, ...data){
//     let join = "";

//     data.forEach((e,i)=>{
//         if (i == data.length-1) {
//             join =join+e;
            
//         }else{
//             join = join+e+separator;
//         }
//     })

//     return join;
// }


// console.log(myjoin("+","hii","my","name","is","raj"));


// ---------------------------------------------------------
// Q . store first 3 data into 3 variable and remaining on an array 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let [a,b,c,...remaining] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(remaining);

// --------------------------------------------------s
//matchstick problem //
function matchbox(house) {
    if (house === 0) {
        return 0;
    }
    else{
        return ((house*6)-(house-1))
    }
}

console.log(matchbox(1));