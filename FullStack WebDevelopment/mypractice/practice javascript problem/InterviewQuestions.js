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
// note - here if we do not define y then javascript automatically attach it ti window object
// so if you log it like console.log(window.y) then you will get the output
// check out this article to understand better
// https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/#3-eagle-eye-test
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
// function matchbox(house) {
//     if (house === 0) {
//         return 0;
//     }
//     else{
//         return ((house*6)-(house-1))
//     }
// }

// console.log(matchbox(1));

// -------------------------------------------------
// how to over settimeout prining pattern in this qn without using let keyword

// for(var i =1; i<6;i++){
//     setTimeout((i)=>{
//         console.log(i);
//     },1000,i)
// }

// just pass the i in that settimeout function and our problem is solved
// -----------------------------------------------------------------------
// function diff(a,b) {
//     return a-b

// }

// console.log(diff('5',2));
// ----------------------------------------------------------------------------
// var x = 2;
// var fun = function() {
//     console.log(x);
//     var x = 3;
// }
// fun()    //undefined
// ---------------------------------------------------------------

// console.log(0.1+0.2==0.3);  //false

//thsi is false because With decimal fractions, this floating-point number system causes some rounding errors in JavaScript.
// ----------------------------------------

// function sum(a,b) {
//     return a+b
// }
// let x = sum('1',2);
// console.log(x);   //12
// ----------------------------------------

// let a = 0;
// let b = false;

// console.log(a == b);  //true
// console.log(a === b);  //false   this is because a is a number type and b is boolean type
// console.log(typeof a);
// console.log(typeof b);
// ------------------------------------
// (function () {
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
// })();   // 2 4 3 1

// -----------------------------------
// function fnc1() {
//     setTimeout(()=>{
//         console.log(x);
//         console.log(y);
//     },3000);
//     var x = 2;
//     var y = 12;
// }
// fnc1()
// ------------------------------------
// var x = 10;
// if (true) {
//     var x = 5;
//     console.log(x);  //5
// }
// console.log(x);  //5

// ----------------------------------

// for(var i = 0 ; i <= 5 ; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// }

//------------------------------------\
// let x = [1,2,3,3,4,5,9,3]
// let y = new Set(x)
// console.log([...y]);
// --------------------------------------
// currying //////////////////////////////////

// function add(...x) {

//     return function (...y) {
//         return function(){
//             let sum= 0 ;
//             x.map((a)=>{
//                 sum = sum+a;
//             })
//             y.map((b)=>{
//                 sum = sum+b;
//             })
//             console.log(sum);
//         }
//     }
// }
// add(2,3)(3,4,5)();

// ----------------------------------------
// count  even length length elements in an array
// let myarr = [12,345,2,6,7896];

// let count = 0;
// myarr.forEach((e)=>{
//     count = ((e%2) == 0) ? count+1 : count;
// })
// console.log(count);

// approach 2:-

// let res  = myarr.join(" ").split(" ");
// console.log(res);
// count = 0;
// for (let  i= 0;  i< res.length; i++) {
//     if ((res[i].length) %2 ==  0) {
//         count++;
//     }
// }
// console.log(count);
// --------------------------------------------

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]); //undefined
// console.log(clothes); //[]
// console.log(clothes.length);  // 0

// --------------------------------------------------
// const clothes = ['jacket', 't-shirt'];
// delete clothes[0]
// console.log(clothes.length);  //2
// -----------------------------------------------------

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }
// console.log(numbers0; // [5]

// ---------------------------------------------------------------
// function foo(para) {
//     return
//     [para]
// }

// console.log(foo(5));  //undefiened
// ----------------------------------------------------------
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }
// ----------------------------------
// 0.1 + 0.2 === 0.3 // => ???  0.30000000000000004

// note :- visit this site for more info https://0.30000000000000004.com/
// -------------------------------------

// console.log(3+2+"7");   //57

// console.log(~3);  //4
// console.log(~4);  //5

// -----------------------------------------------
// var y = 1;
// if (function f() {}) {

// y += typeof f;
// }
// console.log(y)   //1undefined
// ==============================================

// (function() {
// var a = b = 5;
// })();
// console.log(b);   //5

// =======================================
// var arr = [1,2,3,4,5]
// var obj = {"numbers" : arr};
// console.log(arr === obj.numbers);  //true
// arr.push(6);
// console.log(obj);   // [ 1, 2, 3, 4, 5, 6 ]
// arr.length = 0;
// var newarr = [0,0,0,0,0];
// arr.push(...newarr);
// console.log(arr);  // true

// ============================================
// Q GENERATE AN ALPHABET ARRAY ?

// const alphabet = [...Array(26)].map((v,i)=>v=String.fromCharCode(i+65));
// console.log(alphabet);

// ----------------------------------------------------\
// var myfunc = {
//     showArgs(){
//         console.log(arguments);
//         console.log(arguments.length);
//     }
// }

// myfunc.showArgs(11,22,33,44)   //[Arguments] { '0': 11, '1': 22, '2': 33, '3': 44 }
//                                //4

// -----------------------------------------------------
// function passbyValue(a1) {
//     a1= 5;
// }

// let a = 15;
// passbyValue(a);
// console.log(a);     //15

// function passbyRef(newarr) {
//     newarr[1] = 0;
// }

// let arr = [1,2,3,4,5];
// passbyRef(arr);
// console.log(arr);  //[1,0,3,4,5]
// ------------------------------------------------
// console.log(p);   // undefined
// p=10
// console.log(p);  //10
// var p =10;

// ------------------------------
// x()  // hello1
// var x = function() {
//     console.log("hello");
// }
// x()   //hello
// function x() {
//     console.log("hello1");
// }
// x()   //hello
// ----------------------------------------
/*Slice and Splice
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

titleCase("I'm a little tea pot") should return a string.
Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
*/
//by using regex :--
// function titleCase(str) {
//     return str
//       .toLowerCase()
//       .replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

/*
-------------------------------------------

console.log(3 && -2);
console.log(3>5 && -2>2);
console.log(3>1 && -2<2);

console.log("hello" && "world");  

console.log("" && 'foo');
console.log('foo'&& "");
console.log(0 && 0);
let a = 0
a &&= 2
console.log(a);
-------------------------------------------------
*/

// Convert object to 2d array ?

// let obj = {a : 1, b : 2}
// let newarr = Object.keys(obj).map(e => [e,obj[e]]);
// console.log(newarr);     //[ [ 'a', 1 ], [ 'b', 2 ] ]

// ----------------------------------------------------
/*
// fix the array length to 3 ?
let arr = [1,2,3,4,5,6,7,8,9];

let nearr = arr.filter((_,i) => i<3)
console.log(nearr);

arr.length = 3; // thisis best approaach
console.log(arr);
*/
// -----------------------------------------------
/*
// Q sum of all array values ? 
let arr = [1,2,3,4,5,6,7,8,9];
x = arr.reduce((x,y)=> x+y)
console.log(x);
*/

// ====================================object interview qnestion===============================
// let user = {
//     name : "rakshraj",
//     age :15,
// }
// const name = "rahul";
// //// const {name} = user;  //here you cannot do it , so to resolve this issue we qwrite following sybtax.
// const {name:firstname} = user;  //here we destructure the name
// console.log(firstname); // rakeshraj
// console.log(name);  // rahul
// --------------------------------------
// console.log({a :1} == {a:1});  //false  beczuse there are two iffrent object
// console.log({a :1} === {a:1}); //false
// --------------------------------------
// const value = {number: 10};

// const multiply = (x = {...value}) => {
//     console.log(x.number *= 2);
// }
// multiply() //20
// multiply()  //20   // not 40 because each run this function creates new execution context for itself

// multiply(value) //20
// multiply(value)  //40
// ----------------------------------------
// let x = 10;
// function myfunc(x) {    //here this x is looking for what data coming from its parameters .
//     console.log(x);
// }
// // myfunc()//undefind
// ---------------------
// function myfinc(person) {
//     person.age = 65;
//     person = {
//         name : "rakeshraj",
//         age: 20,
//     }
//     return person;
// }

// const personobj = {
//     name : "rakesh",
//     age :25,
// }

// const personobj1 = myfinc(personobj);
// console.log(personobj);   // { name: 'rakesh', age: 65 }
// console.log(personobj1);  //{ name: 'rakeshraj', age: 20 }

// ---------------------------------------------
// var obj = {
//     a: { b: 1 },
//     c: 2,
//     d: 3,
//     e: { m: { r: 5 } },
//     a: [
//       10,
//       11,
//       12,
//       "hello",
//       { don: "sinu", data: { city: ["kashmir", "kanyakumari"] } },
//     ],
//   };

//   function printvalues(obj) {
//     for (let k in obj) {
//       if (obj[k] instanceof Object) {
//         printvalues(obj[k]);
//       } else {
//         console.log(obj[k]);

//       }
//     }
//   }

//   printvalues(obj);

// ----------------------------------------
// variable shadowing 

function test() {
    var a = 10;
    let b = 15;
    if (true) {
        let a = 'hii';
        let b = 15;      // here we can define a let varibale with sae name but if we change it to var then it throws an error becuse it is illigal shadowing
       
        console.log(b);
    }
}
// test()

// -------------------------------------
// infinite currying 
// function sum(a) {
//     return function (b) {
//         if (b) {
//             return sum(a+b);
//         }
//         return a;
//     }
// }

// console.log(sum(5)(5)());

// --------------------------------------
// handeling the error by using nullcollish 
// let user = {
//     names : {
//         studentname : "rakeshraj",

//     }
// }

// console.log(user.names.hello?.madam);
// ----------------------------------------------------------

// delete  selected keys in an object 
// let obj = {name : "rakeshraj",hobby : ["crucket","singing","cooking"],address :{at: 'ankapada'},developer : true};
// let arr = ['name','hobby','developer'];

// function deleteObject(obj,arr) {
//    for(let i = 0; i< arr.length;i++){
//         delete obj[arr[i]];
//    }

// }
// deleteObject(obj,arr)
// console.log(obj);
// -------------------------------------------


