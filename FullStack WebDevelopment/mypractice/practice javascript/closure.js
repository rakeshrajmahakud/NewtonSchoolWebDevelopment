// let generateOrder = function(starting) {
//     count = 0;
//     return function countUp() {
//         count++;
//         return "Total orders = " + count;
//     }      
//   }

//   console.log(generateOrder());
 


// ---------------------------------------------------

// function countBy(initial){
//     var count = initial;
//     return function(number){
//         return count = count+number;
//     }

// }

// const count = countBy(4);
// count(2);
// console.log(count(-4));
// console.log(count(8));

// -----------------------------------------------

// let counter = (function() {
//     let count = 0
//     return function() {
        
//         return count++;
//     }
// }());
// console.log(counter()); // output: 0
// console.log(counter()); // output: 1
// console.log(counter()); // output: 2


// const add = (function () {
//     let counter = 0;
//     return function plus() {counter += 1; return counter}
//   })();
  
//   add(); //1
//   add();//2
//   add();//3
//   console.log(add()); //4

// const x = 5;
// let m = (()=> {
//     const x = 9;
//     console.log(x);
//     return ()=>{
//         console.log("hiiiii");
//     }
// })();
// m()


// -----------------------------------------















