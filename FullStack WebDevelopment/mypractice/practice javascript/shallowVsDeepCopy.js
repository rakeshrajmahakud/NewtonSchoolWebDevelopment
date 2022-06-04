// Before we entering into shallow and deep copy we first know how copy works in javascript 
// in javascript there are two types of data avaliable 
// 1. premetive types 
// 2. non premetive types(reference type)

// in premetive type if we copy a valiable to another then it will copy its value 
// but in refernce type it will store its memory address ,so if we change source variable data then the destination variable data also be changed 
// so it creates a problem we need to ovrcome from this thats why shallow copy and deep copy comes into picture 
// lets see what are they 

// In shallow copy we if we copy then it create a separate memory adress for copied data 
// we can get this by two methods:-

// 1. Object.assign(targetObject,sourceObject)
// 2. object destructuring(spread operator)

// ex1:1

var person = {name :"mr rakeshraj", age : 25};
var p1 = person;
p1.name = "x"; //here we cange the p1 objects properties 
console.log(person);  //{ name: 'x', age: 25 }
console.log(p1);     //{ name: 'x', age: 25 }

// here we se both the results are same ,now we use object.assign method 

var p2 = {}
Object.assign(p2,person);
console.log(p2);  //{ name: 'x', age: 25 }

p2.name = "raj";
console.log(p2); //{ name: 'raj', age: 25 }

// see it will change the name only on p2 object 

// :::::method 2 (object destructuring)
let newuser = {...person};
console.log(newuser);
// this also do same work like array.assign do
// :::::::::::::::Deep copy ::::::
// now here shallow copy work on one leveel i mean if there is no nesting then it will work perfectly but if there is second level or nesting bojects or arrays are available then shallow copy does not work 
// so here deep copy comes to rescue , see the below example

let obj = {
    name : "peter",
    address : {     // nested object
        city : "mumbai",
        state : "up"
    },
    getdata : function(){
        return "all data is here"
    }
}

// to copy nested type of object then we convert it to string by using JSON.stringify then again convert that string to object  by using json.parse

let user = JSON.parse(JSON.stringify(obj));
 console.log(user);
// now if we cange the user data on nesed phase it works perfectly 

user.address.city = "gurgram";

console.log(obj);   //{ name: 'peter', address: { city: 'mumbai', state: 'up' } }
console.log(user);  //{ name: 'peter', address: { city: 'gurgram', state: 'up' } }

// so it will not affect the original object and also nested copy works perfectly . 
// but still we have some problem .how it convert a inner nethod or date object 
// json.stringify cannot work perfectly so it remove those function or methods 
// and unfortunetly  there is no straight forword solution available but we can use external libreary called **LOADDASH** or ittrate each property and copy ,its actually lengthy proecss 
