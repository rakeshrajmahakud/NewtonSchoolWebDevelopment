// closure (populat js interview qn -->)
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// //solution

// const arr1 = [10, 12, 15, 21];
// for (let i = 0; i < arr1.length; i++) {
//   // using the ES6 let syntax, it creates a new binding
//   // every single time the function is called
//   // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }
// //-------------------------------------------------


// What will the following code output?
 
//// qn :-
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }
// // //ans:-
// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) { 
//       return function() { console.log(i_local); } 
//     }(i), 1000 + i);
//   }

////   --------------------------------------

////settimeout function
// function printHello() {
//     console.log( "Hello, World!");

//   }

  // setTimeout(printHello, 2000);

  // ////setinterval
  // function printHello2() {
  //   console.log( "Hello, World!");
  // }

  // Now call above function after 2 seconds
  // setInterval(printHello2, 2000);


  //////////////////////////////////////////////
  // here we are just immediate invoking the javascript function 
  // uses the second "()" for call the returned function
(function(){
  console.log("hello world");
  return function(){
    console.log("hii");
  }
})()();

//we can do same thing by using fat arrow function

(()=>{
  console.log("i am from arrow function");
})();

(async()=>{
  console.log("i am from async function");
})();