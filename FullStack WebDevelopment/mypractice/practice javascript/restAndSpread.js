//// You can call a function with an unspecified number of arguments, no matter how it can be defined.

// function multiply(x, y) {
//     return x * y;
// }
//   console.log(multiply(1, 2, 3, 4, 5));


//  You can include the rest of the parameters in the function definition using three dots, like this: …. It must be followed by the array name containing them.
// The literal meaning of the dots is “gather the remaining parameters into an array.” Now, let’s cover this example:

// function multiplyAll(...args) {
//     let result = 1;
//     for (let arg of args){
//       result *= arg;
//     }
//     return result;
//   }
//   console.log(multiplyAll(1)); // 1
//   console.log(multiplyAll(1, 2)); // 2
//   console.log(multiplyAll(1, 2, 3)); // 6

// -------------------------------------------
// You have the option of getting the first parameters as variables gathering only the remaining part.
// In the example below, the first two arguments get into variables, and the rest - into bookTitles array:

// function welcomeSite(siteName, bookName, ...bookTitles) {
//     console.log(' Welcome to ' + siteName + '’s ' + bookName + ' book' ); // Welcome to W3Docs’s JS book
//     // the rest go into bookTitles array
//     console.log(bookTitles[0]); // Arrays
//     console.log(bookTitles[1]); // Functions
//     console.log(bookTitles.length); // 2
//   }
//   welcomeSite("W3Docs", "JS", "Arrays", "Functions");

// Please, take into account that the rest parameters should be at the end. As they gather all the remaining arguments, there is no use in them, and they can cause an error:

// function f(arg1, ...rest, arg2) { // arg2 after ...rest!!!!
//   // error
// }

////pass any parameter because its a dynamic rest function
// function showSiteBooks() {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//    }
//   // shows: 2, Javascript, Git
//   showSiteBooks("Javascript", "Git");
//   // shows: 1, Html, ["raj",5,{hello:"kumar"}]
//   let arr = ["raj",5,{hello:"kumar"}];
//   showSiteBooks("Html",arr);


// // accessing those argumnets data by using loops 

// function showSiteBooks() {
//     // it's iterable
//    for(let arg of arguments){
//      console.log(arg);
//    }
//  }
//  showSiteBooks("Javascript", "Git");
//  showSiteBooks("Html");

// The curious thing about arguments is that although it is both array-like and iterable, it is not an array. The array methods can not work for it. So, arguments.map(...) can’t be called. Moreover, it always comprises the overall arguments. They can’t be captured partially.
// It would be best if you remembered that arrow functions don’t have "arguments". If you decide to access the object of arguments from an arrow function, you can get this:
// function argFunction() {
//     let showArgs = () => console.log(arguments[0]);
//     showArgs();
//   }
//   argFunction(1); // 1

// -------------------------------
// Spread Syntax
// The spread syntax allows an array or a string to expand in the places where zero or more arguments or elements are expected. In other words, if you have a string, an array, or an object, and you wish to use all the values, you can spread them into function calls, new objects, or new arrays with a short syntax. Although the spread syntax looks like rest parameters, also using three dots …, it does the opposite.
// Whenever you use ...arr in the function call, it expands an iterable object arr to the list of arguments.
// The case of Math.max looks as follows:

// let arr = [6, 8, 2];
// console.log(Math.max(...arr)); // 8 (spread makes array into a list of arguments)

// You can pass different iterables as well, this way:
// let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// console.log(Math.max(...arr1, ...arr2)); // 9

// // You can integrate the spread syntax with normal values, as follows:
// let arr1 = [2, -3, 5, 4];
// let arr2 = [9, 2, -7, 2]; 
// console.log(Math.max(3, ...arr1, 6, ...arr2, 18)); // 18

// // It is also desirable to use the spread syntax for merging arrays:
// let arr = [5, 4, 9];
// let arr2 = [6, 8, 12]; 
// let merged = [1, ...arr, 3, ...arr2];
// console.log(merged); // 1,5,4,9,3,6,8,12 (1, then arr, then 3, then arr2)


// // You can also use the spread syntax for turning the string into an array of characters.
// let str = "W3Docs";
// console.log([...str]); // W,3,D,o,c,s

// // The spread syntax uses iterators for gathering elements the same way as does for..of.
// // The Array.from can also be used for that task, as it converts an iterable into an array, like this:

// let str = "W3Docs"; 
// // Array.from converts an iterable into an array
// console.log(Array.from(str)); // W,3,D,o,c,s

// It gives the same result as [...str].
// But the subtle difference between the Array.from(obj) and [...obj] is that the first one operates on both iterables and array-likes, but the spread syntax can work only with iterables.
// As you can notice, the three dots … in the code is either rest parameters or the spread syntax.
// In this chapter, we represented an easy way of distinguishing between them:
// Whenever the … is at the end of function parameters, it’s the “rest parameters”, gathering the rest of the arguments’ list into an array.
// When … is in the function call, you deal with the spread syntax, which expands an array into a list.
// Together they allow navigating between an array and a list of parameters smoothly.