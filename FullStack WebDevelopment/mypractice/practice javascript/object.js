// var user  = {
//     name : "rakeshraj",
//     "my mob": 7504691872,
//     calc :()=>{
//         return "hello world";
//     },
//     "my arr" : [1,2,3,4,5,6,7],
// }

// //if we want to write key in multiple word with space then we use doubke or single quotetion mark
// // and we can access throuth the squre bracket 
// console.log(user["my arr"][0]); //accessing the first index 
// console.log(user["my mob"]);


// console.log(typeof(!"5"));


// //functional custom constructor ///

// // in javascript ,a constructor is a special function that act as a mold to create new objects

// // creating  a cusom functional cunstructor 
// function Car(maker,model,year) {
//     this.make = maker;
//     this.model = model;
//     this.year = year;
//     this.SetMiles = function(miles){    //doubt on this part 
//         this.miles = miles;
//         return miles;
//     }
// }
// //using  a constructor  with the "new" kewword

// let car1 = new Car("maruti","alto700",2015);

// console.log(car1.SetMiles(200));
// console.log(car1);

// // adding methods to the constfructor prototype 
// Car.prototype.age = function(){
//     return (new Date()).getFullYear() - this.year; 
// }

//it will return the age 
// console.log(car1.age());

/////////////////////////////////////////////////
// OBJECT METHODS 
// Object.key method 

// let myobj = {
//     name : "rakeshraj",
    
//     dob : 25,
//     address: "bhadrak"
// }


// console.log(Object.keys(myobj));   // [ 'name', 'dob', 'address' ]

// obj.value method 
// console.log(Object.values(myobj));  //[ 'rakeshraj', 25, 'bhadrak' ]




////////////////////////////////////////////////////////
/////////////traversing on objects/////////////////////
///////////////////////////////////////////////////////

// using traditional for loop
// let obj = {
//     mame :"rakesheaj",
//     dob :"1995",
//     area : 'bhadrak'
// }
// for (let i = 0;  i< Object.keys(obj).length; i++) {
//     const element = obj[Object.keys(obj)[i]];
//     console.log(element);
    
// }
// -----------------------------------
// let obj = {
//     mame :"rakesheaj",
//     dob :"1995",
//     area : 'bhadrak'
// }
// //by using for in loop
// for(let x in obj){
//     console.log("object keys ----->> "+ x);
//     console.log("object values ----->> "+obj[x]);
// }

// --------------------------------------
// delete  selected keys in an object 
let obj = {name : "rakeshraj",hobby : ["crucket","singing","cooking"],address :{at: 'ankapada'},developer : true};
let arr = ['name','hobby','developer'];

function deleteObject(obj,arr) {
   for(let i = 0; i< arr.length;i++){
        delete obj[arr[i]];
   }

}
deleteObject(obj,arr)
console.log(obj);