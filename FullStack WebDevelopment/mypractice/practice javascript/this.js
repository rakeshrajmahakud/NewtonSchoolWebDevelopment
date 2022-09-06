// what is this keyword ?
// the this keyword is used inside the function .the this keyword is marely a reference to another object 

// what is the this keyword refers to depends on the scenario on the way the function is implemented 
//  here are 3 senerio 

// 1. (Scenario-1)this inside a function :::-
    // the this keyword points to the global object .
// ex :=
    // var name = "Mr rakeshraj"  // this is a global variable with var name is name
    // function myfunc() {
    //     console.log(this.name);   // this  poits to global variable name .
    // }
    
    // myfunc();   // mr rakeshraj      (for output plz use windows dev console ont the node js)

// 2. (Scenario-2)this inside a method ::-
// the this keyword points to the object the method is in .
// ex:=
    // const user = {
    //     name : "raj",
    //     yearofbirth: 1995,
    //     calcAge: function () {
    //         const currentYear = (new Date().getFullYear);
    //         return currentYear-this.yearofbirth;     //here "this " is belongs to user object .
    //     }
    // }

    // console.log(user.calcAge());

//3(Scenario-3)when function is run with call, bind or apply :::-
// when a function is called using the .call(param) or .bind(param)  or .appy(param) method,the first param become the object that the this keyword refer to 

// const user = {
//     name : "raj",
//     yearofbirth: 1995,
//     calcAge: function () {
//         const currentYear = (new Date().getFullYear);
//         return currentYear-this.yearofbirth;     //here "this " is belongs to user object .
//     }
// }

// myfunc.call(user);

// ----------------------------------
// const name = 'rakesh';
// const user = {
//     name : "raj",
//      myfunc () {
//         console.log(this);
//     }
// }
// user.myfunc()    // here this refers to the user object 
// let newuser = user.myfunc;
// newuser()   here this refers to window object .
// ------------------------------------------

// const user1 = {
//     name : "raj",
//     myfunc : () => {
//        let name = "kala"
//         console.log(this);
//     }
// }

// user1.myfunc()   // {}          here this point to that block 

// ----------------------------------------
// function login() {
//     console.log(this);
// }

// login()     //this points to window object 
// new login()    // this points to login object 
// -------------------------------------------------


// var printMethod = {
//     hello: "world",
//     func: function() {
//         var self = this;
//         console.log("First Output : this.hello = " + this.hello); //world
//         console.log("Second output: self.hello = " + self.hello); //world

//         (function() {
//             console.log("Third Output: this.hello = " + this.hello);  //undefined
//             console.log("Fourth output: self.hello = " + self.hello); //world
//         }());
    
//     }
    
// };

// printMethod.func();
// --------------------------------


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