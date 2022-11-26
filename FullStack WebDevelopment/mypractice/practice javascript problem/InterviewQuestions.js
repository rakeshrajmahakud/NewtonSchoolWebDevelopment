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

// ----------------------------------------------------
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
// let x = 5;
// function test() {
//     var a = 10;
//     let b = 15;
//     if (true) {
//         let a = 'hii';
//        // var b = 15;      // here we can define a let varibale with same name but if we change it to var then it throws an error becuse it is illigal shadowing
//        var x = 9;
//         console.log(x);
//     }
// }
// test()
// -------------------promise-------------------
// const arr = [];
// try{
//     arr.push('try');
//     throw new error();
// }catch(e){
//     arr.push('catch');
// }finally{
//     arr.push('finally');
// }
// console.log(arr);
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
// Qn:
// var x = [1,2,3,4,5];
// for (var i=0;i<x.length;i++){
//     (function() {
//     setTimeout(function(){
//     console.log(x[i]);
//     }, 1000);
//     })(); 
// }
//op :-
// undefined
// undefined
// undefined
// undefined
// undefined

// solution :-
// var x = [1,2,3,4,5];
// for (var i=0;i<x.length;i++){
//     (function() {
//     setTimeout(function(i){
//     console.log(x[i]);
//     }, 1000,i);
//     })(); 
// }


// ------------------------THIS AND FUNCTION-------------------------------

// function Video(title) {   // this is a function constructor
//     this.title= title;
//     console.log(this);
// }

// const v = new Video("a")
// console.log(v);     //'this' points to Video objecct not window because of 'new' keyword because it creates a new objectand the 'this' pnts to that object

// ----------------------------
// let myfunc = () => {
//     console.log(this)
// }

// myfunc()   // in browser -> window object  in node empty object 

// ---------------------------------

// function myfinc() {
//     console.log(this);
// }

// myfinc()  //in browser: window object, in node: - global object  
// -----------------------------------------------------
// function myfinc() {
//     console.log(this);
// }

// new myfinc()  // it returns myfunc object 
// -------------------------------------

// let myfunc = () => {
//     console.log(this);
// }

// let x = new myfunc()  // here we get n error because its a function expression so we cannot use new keyword here

// -------------------------------------
// const user = {
//     name : 'rakeshraj',
//     sum : () => {
//         console.log(this);
//     }
// }

// user.sum() //   in case of arrow function in case of browser here this points to window object and incase of node this oint to empty object
// -------------------------------------
// const user = {
//     name : 'rakeshraj',
//     sum : () => {
//         ( ()=>{
//             console.log(this);
//         })()
//         console.log(this);
//     }
// }
// user.sum()  // in case of browser both the inner and the outer function points to window object
// but in case of node both menthods points to empty object  
// --------------------------------------------
// const user = {
//     name : 'rakeshraj',
//     sum : function(){
//         ( ()=>{
//             console.log(this);
//         })()
//         console.log(this);
//     }
// }
// user.sum()  // here in these two functions are points to user oject in case of browser as well as node.

// -------------------------------------------
// const user = {
//     name : 'rakeshraj',
//     sum : function(){
//         ( function(){
//             console.log(this);
//         })()
//         console.log(this);
//     }
// }
// user.sum() // here in both window and browser case the first function points to user object and 
// -----------------------------------

// const a ={};
// const b = {key : "b"};
// const c = {key : "c"};
// a[b] = 123;
// a[c] = 423;

// console.log(a);  // { '[object Object]': 423 }
// -----------------------------------------
// Q:-
// let settings = {
//     username : "rakesh",
//     level : 24,
//     health : 90,
// }

// const data = JSON.stringify(settings,['level','health'])
// console.log(data);  //{"level":24,"health":90}

// ----------------------------------------------------------------------
// print all key value pair of an object tree ?   vv imp 
// let obj ={
//     name : 'rakeshraj',
//     date : 1995,
//     address : {
//         at : 'ankapada',
//         po:'biriadia',
//         pin :753003,
//         locality : {
//             dist : 'bhadrak',
//             mob : 996555555,
//         },
//         myarr : [1,2,3,4,5,6,7],
//     }
// }


// function isObject(obj){        //function to check object or not 
//     if (obj === null) {
//         return false;
//     }else if(typeof obj === 'object'){
//         return true;
//     }
// }

// function getData(obj) {       // extracting key value pair
//     for (const val in obj) {
//         if (isObject(obj[val])) {
//             getData(obj[val])
//         }else{
//             console.log(val,obj[val]);
//         }
//     }
// }

// getData(obj);



// ---------------------------------------------------------
// how a closure can optimize time  :---(example)

// function find(index) {
//     let  a = [];
//     for(let i =0 ; i< 1000000; i++){
//         a[i] = i+i;
//     }
//     console.log(a[index]);
// }

// console.time("12")    
// find(12);
// console.timeEnd("12")

// optimized code uisng closure below

// function find() {
//     let  a = [];
//     for(let i =0 ; i< 1000000; i++){
//         a[i] = i+i;
//     }
//     return function (index) {
//         console.log(a[index]);
//     }
// }

// //optimized 
// const closure = find(12);
// console.time("12")
// closure(12);
// console.timeEnd("12")

// --------------------------------
// how to slove this issue  of settimeout and for loop ?
// sln :1 -
// for(var i = 0 ; i< 3 ;i++){
//     function innner(i) {    // here we use closure 
//         setTimeout(function log(){
//             console.log(i);
//         },i*1000);
//     }
//     innner(i);
// }

// soln2:-(by passing 3rd parameter as argument on settimeout and argument in log fun)
// for(var i = 0 ; i< 3 ;i++){     
//     setTimeout(function log(i){
//         console.log(i);
//     },i*1000,i);
// }

// soln:3 :-  (by using let keyword)
// for(let i = 0 ; i< 3 ;i++){     
//     setTimeout(function log(){
//         console.log(i);
//     },i*1000);
// }

// -----------------------------------------

// let a = 4;
// let sum = 0;
// for(let i = 0;i< 5;i++){
//     sum = sum + a*(3&i)
//     console.log(sum);
// }
// o/p- 4 12 24 24
// ------------------------------------
// let arr = [1,2,3,[4,5,[7,8,9,[11,12,23]]]];
// // approach 1 by using array.flat method
// console.log(arr.flat(3)); 

// method 2 
function flatArray(arr) {
    for(let i = 0; i < arr.length;i++){
        if (Array.isArray(arr[i])) {
            flatArray(arr[i]);
        }
        else{
            console.log(arr[i]);
        }
    }
   
}
// flatArray(arr);
//method-3:-
function flatArrayUsingForIn(arr) {
    for(let i in arr){
      if (Array.isArray(arr[i])) {
        flatArrayUsingForIn(arr[i])
      }else{
        console.log(arr[i]);
      }
    }
}
// flatArrayUsingForIn(arr)

// ---------------------------------------------
// covert a string to uppercase without using inbuilt method ? 

// let str = "my name is RAJ"

// function convertToUpperCase(str) {
//     let temp = ""
//     for(let i = 0; i< str.length;i++){
//         if (str.charCodeAt(i)>= 97 && str.charCodeAt(i)<=122) {
//             temp = temp + (String.fromCharCode(str.charCodeAt(i)-32));
//         }
//         else{
//             temp = temp + str[i];
//         }
//     }
//     return temp;
// }
// console.log(convertToUpperCase(str));

// =========adding surname into name==========================================================
// let arr = [{name:"raj"},{nmae:45}]

// let res = arr.map((e)=>{
//     let x= {...e}
//     return x.name+"mahakud"
// })
// console.log(arr);
// console.log(res);

// =============================very very imp qns ==================
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;
team[3] = "Lux";
players.size = 4;

// console.log(players);  //op  [ 'Wes', 'Sarah', 'Ryan', 'Lux', size: 4 ]

// for (let player in players) {
//     console.log(player);
// }

// op 
// 0
// 1
// 2
// 3
// size

// ===================very vey important javascript interview =================
// 1. Sort the inventors by number of years they lived
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
  ];  

// let res = inventors.sort((a,b)=> (a.passed-a.year)-(b.passed-b.year))
//  console.table(res);

//by uisng manumal function
// function sortUserYear(arr) {
//   for(let i =0;i <arr.length;i++){
//     for(let j = i; j<arr.length; j++){
//       let first = arr[i].passed - arr[i].year
//       let second = arr[j].passed - arr[j].year
//       if (first>second) {
//         //swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//       }
//     }
//   }
// }
// sortUserYear(inventors)
// console.log(inventors);

 //sorting the abobe array by using first name.
    // let res1 = inventors.sort((a,b)=>{
    //     a = a.first
    //     b = b.first
    //     if(a>b) return 1
    //     else if(a<b) return -1
    //     else return 0
    // })
//    console.log(res1);


// ================================================
    // 2. Sort based on last name
  const people = [
    "Bernhard, andra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank"
  ];

  let  peopleresult = people.map((e)=>{
    return e.split(", ")
  }).sort((a,b)=> {
    a = a[1].toLowerCase()
    b = b[1].toLowerCase()
    if(a > b) return 1
    else if (a < b) return -1
    else return 0
  }).map((e)=>{
    return e.join(' ')
  })
  
//   console.log(peopleresult);


// =======================================================
// sort based on last name if lastname are same then sort by firstname

const names = ["Shread Flanders", "Allan Flanders", "Eric Clapton"];

const orderedNames = [...names].sort((name1,name2)=>{
    name1 = name1.split(" ")
    name2 = name2.split(" ")

    let nameForSort1 = `${name1[1]} ${name1[0]}`
    let nameForSort2 = `${name2[1]} ${name2[0]}`

    if(nameForSort1>nameForSort2) return 1;
    else if(nameForSort1<nameForSort2) return -1;
    else return 0;

    // method2
    // return nameForSort1.localeCompare(nameForSort2);
})

// console.log(orderedNames);  op:-// [ 'Eric Clapton', 'Allan Flanders', 'Shread Flanders' ]


// ------------------------------------------
// let arr= ["1:2","2:3","1:7","4:2","2:2"];
// // if first value of string is greater then second then  add 3 to total or if less then add 1 to total if equal then add zero

// let total = arr.reduce((acc,e) => {
//     let [x,y]  =e.split(":")
//     if (+x > +y) {
//         acc +=3
//     }
//     else if(+x < +y){
//         acc += 1
//     }

//     return acc;
// },0)
// console.log(total);
// ------------------------------------
// let str = "rakeshraj mahakud"
// let res = ""
// for(let i = 0 ; i < str.length;i++){
   
//     if (i%2 === 0) {
//             res +=  str[i].toUpperCase();
//     }
//     else{
//         res += str[i].toLowerCase()
//     }
// }
// console.log(res);

// // sort an array by length
// let strofarr = ["raj","rakeshraj","komal","hrikesh","dhaneswarkumar"]
// strofarr.sort((a,b)=>{
//     return a.length - b.length
// })

// console.log(strofarr);

// ====================================================
//printing all the nested values of an array
// const userData = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", passedyear:{year: 1, passed: 2}},
//   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
//   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 }
// ];  


function getvalueFromUserData(data) {
    for(let i in data){
      if (typeof data[i] === "object") {
         getvalueFromUserData(data[i]);
      }else{
        console.log(i,data[i]);
      }
    }
}

// getvalueFromUserData(userData)

// ==========================================================
//reverse a string  without chaning its word position
let str = "i am javascript"   // expetected op:- i ma tpircsavaj
let arr = str.split("").reverse().join("").split(" ").reverse().join(" ")
// console.log(arr);

// manual function :--

function reverseString(str) {
  let len = str.length , reverseStr ='', result = '' ,resArr = [];

  for(let i = len-1 ; i >= 0  ; i--){
    reverseStr += str[i];
  }
  for(let j = 0 ; j < len ; j++){
    if (reverseStr[j] == " ") {
        resArr.push(result)
        result = "";
    }else{
      result += reverseStr[j];
      if(j+1 == len){
        resArr.push(result);
        result="";
      }
    }
  }

  for(k = resArr.length-1 ; k >= 0 ; k--){
    result += resArr[k]+" ";
  }
  console.log(result);
}
// reverseString(str)


// ===============================

let stm1 = Symbol("one")
let stm2 = Symbol("one")
let stm3 = Symbol.for("one")
let stm4 = Symbol.for("two")
// console.log(stm1===stm2);  //false
// console.log(stm3===stm4);  //false

// =============================

let obj = {
  "key1": "data1",
  "key2": "data2",
  "key3": "data3"
}

function reverseKeyValue(obj) {
  let tempObj = {}
  for(let k in obj){
    tempObj[obj[k]] = k;
    // console.log(k);
  }

  console.log(tempObj);
}

// reverseKeyValue(obj)

// ====================================================
// qn :-// wap to filter the array first letter with the vowel and map to uppercase//
let arrofvowel = ["a good day", "egg is good for health","move the machine","u are a genious"]

function findVowel(str) {
  return str.filter((e)=> {
    return (e[0].toLowerCase() == "a") 
    || (e[0].toLowerCase() == "e") 
    || (e[0].toLowerCase() == "i")
    || (e[0].toLowerCase() == "o")
    || (e[0].toLowerCase() == "u")

  }).map(e => e[0].toUpperCase()+e.slice(1))
}

// console.log(findVowel(arrofvowel))

// =================================================
// qn :-// wap to filter the array of objects  first letter with the vowel and map to uppercase//
let arrpfobjVowel = [
  {
    name : "rakeshraj"
  },
  {
    name : "abdullah"
  },
  {
    name : "umesh"
  },
  {
    name : "imran khan"
  },
  {
    name : "kartik"
  }
]

let res = [...arrpfobjVowel].filter((e)=>{
  return (e.name.toLowerCase()[0] == "a") 
  || (e.name.toLowerCase()[0] == "e") 
  || (e.name.toLowerCase()[0] == "i")
  || (e.name.toLowerCase()[0] == "o")
  || (e.name.toLowerCase()[0] == "u")
}).map(e => e.name[0].toUpperCase()+e.name.slice(1));

// console.log(res);


let repeatarr = [1,3,2,4,4,3,1,2,2,1,4,9,9];

function extractdata(arr) {
  let obj = {}
  let totalsum = 0;
  for(let i = 0 ; i < arr.length ; i++){
    if (obj[arr[i]]) {
      obj[arr[i]] +=1;
    }else{
      obj[arr[i]] = 1;
    }
  }
  for(let k in obj){
    let temp = new Array(obj[k])
    let showarr = temp.fill(+k);
    let sum = +k * obj[k]
    totalsum +=sum
    console.log(showarr,"=",sum);
  }
  console.log("totalsum = ",totalsum);

}

// extractdata(repeatarr)

// -------------------------------------------
//wjat is the op ?
// let x = 3+2+"7"+3+"7"+2
// console.log(x);
// --------------------------------------------



//remove leading zero form an ip address 
let ip = "0009200.000016800.000001000.0001/24"

let res2 = ip.split('.').map((octet)=> parseInt(octet)).join('.')
// console.log(res2);

// manual 2
function removeZero(ip){
  let str2 = ""
  for(let i = 0; i <ip.length ; i++){
    // console.log(ip[i]);
    if (ip[i] == "/") {
      break
    }else{
      str2 = str2+ip[i];
    }
  }
  console.log(str2.split(".").map(Number).join("."));
}


//manual 1 
let nums= ip.split('.');
let finalip = parseInt(nums[0])
for(let i = 1 ; i< nums.length;i++){
  finalip += "."+parseInt(nums[i]);
}
// console.log(finalip);





// manual code for deep copy

// const createdeepCopy = (input) =>{
//   if(typeof input !== 'object'){
//       return input;
//   }
//   let copy = Array.isArray(input) ? [] : {};
//   for(key in input){
//       const value = input[key];
//       copy[key] = createdeepCopy(value);
//   }

//   return copy;
// }

// let data = {
//   name :"raj",
//   address: {
//       city: "bhubaneswar"
//   }
// }


// console.log(createdeepCopy(data));



// pass Arguments without parameter
function myfunc(){
  let sum = 0;
  for(let element in arguments){
      sum +=arguments[element];
  };
  return  sum;
}
//note :- "arguments" it is a pre defined keyword
// :-this does not work with arraw fuction
// console.log(myfunc(1,2,3));

// --------------------------
//example of closure

function counter(i = 0) {
  return function inner(){
    return i++;
  }
}

const count = counter()
console.log(count()); //0
console.log(count()); //1

// -------------------------- 

function hello(data){
  console.log(" hello world "+data+this.name);
}
hello("r ")
let obj1 = {
  name: "kishir"
}

let ans = hello.bind(obj1,"maya")

ans()


// ===================================================


// Q :- remove token property from object 
// const obj = {
//   hello: "world",
//   token: "343sdmfkgfd",
//   studentData: {
//       name:"Ashim",
//       lastName: "Kaushal",
//       token: "xyzIdontknow"
//   },
//   someMoreData:{
//     profession:"Software Engineer",
//     otherDetails:{
//       age:24,
//       token:"495894gfgfgf"
//     },
//     token: {
//       domain: "Backend",
//       location: "Singapore"
//     }
//   }  
// };

// ans:-
// function removeToken(obj){
//   for(key in obj){
//       if (typeof obj[key] == "object") {
//           if(key == "token"){
//               delete obj["token"];
//           }
//           removeToken(obj[key])
//       }
//       else{
//           if (key == "token") {
//               delete obj["token"];
//           }
//       }
//   }
// }

// removeToken(obj)
// console.log(obj);

// =============================cyruscloud Interview question=====================================
// // sort name in assending order and again sort this array ages in decending orders
// let student = [
//     {
//         "name" : "rakeshraj",
//         "age" : 25,
//     },
//     {
//         "name" : "amresh",
//         "age" : 29,
//     },
//     {
//         "name" : "sukesh",
//         "age" : 12,
//     },
// ]

// student.sort((a,b)=>{
//     if(a.name>b.name) return 1;
//     else if (a.name<b.name) return -1;
//     else return 0;
// })

// student.sort((a,b)=> a.age-b.age);
// console.log(student);


// Q:- addon qn :- if the student age is greater then 18 
// then add a property callsatus to it and return a new array

// let modifiedStudent = student.map((e)=>{
//     if(e.age>=18){
//         return {...e,status : "adult"};
//     }else{
//         return e;
//     }
// })
// console.log(modifiedStudent);

// ======================================================
// let  getdata = async ()=>{
//     try{
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let result = await  res.json();
//         result.sort((a,b)=>{
//             if(a.name>b.name) return 1;
//             else if(a.name<b.name) return -1;
//             else return 0;
//         })
//         console.log(result);
//     }
//     catch(e){
//         console.log(e);
//     }
// } 
// getdata()

// ========================================================================
// let data = [
//   {
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,
//     "batters": {
//       "batter": [
//         {
//           "id": "1001",
//           "type": "Regular"
//         },
//         {
//           "id": "1002",
//           "type": "Chocolate"
//         },
//         {
//           "id": "1003",
//           "type": "Blueberry"
//         },
//         {
//           "id": "1004",
//           "type": "Devil's Food"
//         }
//       ]
//     },
//     "topping": [
//       {
//         "id": "5001",
//         "type": "None"
//       },
//       {
//         "id": "5002",
//         "type": "Glazed"
//       },
//       {
//         "id": "5005",
//         "type": "Sugar"
//       },
//       {
//         "id": "5007",
//         "type": "Powdered Sugar"
//       },
//       {
//         "id": "5006",
//         "type": "Chocolate with Sprinkles"
//       },
//       {
//         "id": "5003",
//         "type": "Chocolate"
//       },
//       {
//         "id": "5004",
//         "type": "Maple"
//       }
//     ]
//   },
//   {
//     "id": "0002",
//     "type": "donut",
//     "name": "Raised",
//     "ppu": 0.55,
//     "batters": {
//       "batter": [
//         {
//           "id": "1001",
//           "type": "Regular"
//         }
//       ]
//     },
//     "topping": [
//       {
//         "id": "5001",
//         "type": "None"
//       },
//       {
//         "id": "5002",
//         "type": "Glazed"
//       },
//       {
//         "id": "5005",
//         "type": "Sugar"
//       },
//       {
//         "id": "5003",
//         "type": "Chocolate"
//       },
//       {
//         "id": "5004",
//         "type": "Maple"
//       }
//     ]
//   },
//   {
//     "id": "0003",
//     "type": "donut",
//     "name": "Old Fashioned",
//     "ppu": 0.55,
//     "batters": {
//       "batter": [
//         {
//           "id": "1001",
//           "type": "Regular"
//         },
//         {
//           "id": "1002",
//           "type": "Chocolate"
//         }
//       ]
//     },
//     "topping": [
//       {
//         "id": "5001",
//         "type": "None"
//       },
//       {
//         "id": "5002",
//         "type": "Glazed"
//       },
//       {
//         "id": "5003",
//         "type": "Chocolate"
//       },
//       {
//         "id": "5004",
//         "type": "Maple"
//       }
//     ]
//   }
// ]

//   for(let i = 0 ; i< data.length; i++){
//     data[i].batters.batter.sort((a,b)=>{
//         if(a.id>b.id) return -1;
//         else if (a.id<b.id) return 1;
//         else return 0;
//     });
//   }

//   console.log(data);
// ===============================================================================
