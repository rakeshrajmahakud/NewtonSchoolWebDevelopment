const fruits = ["Banana", "Orange", "Apple", "Mango"];


// fruits.toString();//it will convert the array into strings
// fruits.sort(); //sort the array in ascending order
// fruits.reverse(); // reverse the array
// fruits.push("items"); //it will puzh the item in last and return the array length
// fruits.pop() it will pop from last  and return that poped value
//fruits.slice(1,3) returns selected array elements as a new array:
//fruits.slice(-3, -1); 
// fruits.unshift("item1")  //adds new items to the beginning of an array
//// fruits.unshift("item1","add more items");
// fruits.lastIndexOf("Apple"); it will  return last index no of the value
// fruits.join();  // returns an array as a string:
//fruits.join(" and "); // o/p: Banana and Orange and Apple and Mango 
//Array.isArray(fruits);  // it will return true if it is an array otherwise false
//fruits.indexOf("Apple"); //returns the position of a specified value in an array:
//fruits.includes("Mango");  // it checks the lement is present in array or not
//fruits.includes("Banana", 3); //also check on that position this element is present or not
//delete arr[indexno]; to delete the indexed posion value //but the length is not change .


////The splice() method adds and/or removes array elesments.
////The splice() method overwrites the original array.
// fruits.splice(2, 0, "Lemon", "Kiwi");   //// At position 2, add 2 elements: 
// fruits.splice(2, 2); //// At position 2, remove 2 items from 2: 

// compareFunction	Optional.
// A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a-b}
// When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// ex:=  let arr = [1,7,5,3,9,7];
// arr.sort((a,b)=>a-b);
// it will arrange the array in descending order 

// Example:
// The sort function will sort 40 as a value lower than 100.
// When comparing 40 and 100, sort() calls the function(40,100).
// The function calculates 40-100, and returns -60 (a negative value).




//array prototype :::::::::::::::::::::::::::;
// make a methid and use that method on any array
// Array.prototype.myUcase = function() {
//     for (let i = 0; i < this.length; i++) {
//       this[i] = this[i].toUpperCase();
//     }
//   };
//   fruits.myUcase();

//array map ::::::::::::::::::::::::::::::::::::::::::
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
//syntax:  array.map(function(currentValue, index, arr), thisValue) 

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);  // it will ittrate each element and put squreroot and return the value 
// console.log(newArr);    

// // ex2:
// const number = [65, 44, 12, 4];
// const newArr2 = number.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr2);


// array filter :::::::::::::::::::::::::::::::
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
//syntax: array.filter(function(currentValue, index, arr), thisValue)

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }


// forEach()::::::::::::::::::::::::::::;;;;
let char  = ["a","b","a","c","b"];
char.forEach((element,index)=>{
    console.log(`${element} - ${index} - ${char.indexOf(element)}`);
})


// Resuce method:::::::::::::::::::::::::::::



// split  method:::::::::::::::::::::::::::
// The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.

// find method :::::::::::::::::::::::::::::::::::::::
// ex 
let quilified = [15,17,19,23,17]
console.log(quilified.find(age => age>18));


// match method ::::::::::::::::::::::::::::::
// for regex matching 

var re = /\w+\s/g;
var str = 'fee fi fo fun';
const [fee,fi,fo] = str.match(re);
