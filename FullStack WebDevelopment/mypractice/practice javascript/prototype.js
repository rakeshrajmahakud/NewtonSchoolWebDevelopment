// when we write something like this ,
// const Persion = {
//     name : "p1",
// }
// that menas we write like this :-
// const Persion = new Object({
//     name : "p1"
// })

// it is  actually an object literal providd by javascript,so we cannot add prototype mechanism here and it is the easiest way to create an object 
// if we ant to use ptototype mechanism then we need to create an object throgh function constructor 





// document.write("prototype class")
// let obj = {
//     name: "rakeshraj",
//     age : 26,
//     address : "bhadrak",
// }

// console.log(obj);

// function Obj(name) {
//     this.name = name;
// }

// object.prototype method only applied if you create an object through function constructor .
// the prototype method can add or modify the properties and methods an object  

// Obj.prototype.getName = function () {
//      return this.name;
// }

// Obj.prototype.setName = function(newname){
//      this.name = newname;
// }

// let obj2 = new Obj("mr raj");


// console.log(obj2);
// console.log(obj2.setName);


// also for a shake of knowledge  3areas where we use prototype :--
// 1. Object.prototype
// 2. Array.prototype
// 3. Function.prototype


// think about when use any methods in an array where they comes from ??
// because they are already defined in an array prototype 


// see the following example ,how we can inherit one object properties to another 
const person = {
    name :"sanatan",
    getName : function(){
        return this.name;
    },
    getRollNo : function(){
        return this.rollNo;
    }

}

const student = {
    rollNo : 1,
    __proto__ : person,
    mark : 600,
}

console.log(student);  
// if we log it then we can see in our console all of the properties are printed there but also in the prototype we can see the the inherited properties .
console.log(student.getName());  //sanatan 

// lets see another example : 
// here in person object there is no properties called roll no and if we namke a function and get roll number then it takes the roll number from student object 
// then how it will get that roll no ,because it create a pool between these object  
console.log(student.getRollNo());

// on lets make it a little bit complicated by incresing  1 level hirarchy

const primeryStudent  = {
    __proto__: student,
    mark : 300,
}

console.log(primeryStudent.getRollNo());  //1
// see here it will print 1 becase we create a chain between primerystudent onject and student object 
//  so if we call a method or try to access a property from the lower level object then it will search its own properties if finds then print that otherwise go for its upper one .and check if its
//  avalaible there if not available then go for one step upper ..at last check tp the main Object which is javascript by efault object 

// lastobject >>>  upper object >>>>  Object (javascript object)

// another example if we acces the mark propertie in  primeryStudent
// then it will print 300 if it was not available in this object then it will go gor its upper object which is student and print that value which is 600
// if you commit oot in primeryStudent and again log it then  you will se it will print 600 because it will inherited from its parent one
console.log(primeryStudent.mark); //300


// ::::::::::::::::::
// now the  question is what we can do using this prototype , well the answer is we can create our own library 


// in java script everything are objects

// check this :

let o1 = new Object();
let a1 = new Array();
let f1 = new Function();

console.log(o1);
console.log(a1);
console.log(f1);

// if we want to see there prototype then log them 
console.log(Object.prototype);
console.log(Array.prototype);
console.log(Function.prototype);

// we can add prototype in a function like this :---

Array.prototype.show = function(){
    console.log(this);
}

const cities = ["bhubaneswar","cuttack"];

cities.show()


// lets make a prototype method which convert array into object 
Array.prototype.convertToObject = function(){
    let obj = {}
    this.forEach(elem =>{
        obj[elem] = elem;
    })
    return obj;
}

console.log(cities.convertToObject());


// :::::::::::::::::::::::::::::::object prototype :::::::::::::::::::::::::::::::::
// So what to do if we want to add new properties at later stage to a function which will be shared across all the instances?
// The answer is Prototype.
// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
// The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.
// So, use prototype property of a function in the above example in order to have age properties across all the objects as shown below.

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;
Student.prototype.details = function(){      //here arrow function not works with "this" keyword
    console.log(this.name + " "+this.gender);
}
var studObj1 = new Student();
console.log(studObj1.age); // 15

var studObj2 = new Student();
console.log(studObj2.age); // 15
studObj1.details()

// ****Every object which is created using literal syntax or constructor syntax with the new keyword, 
// includes __proto__ property that points to prototype object of a function that created this object.

console.log(Student.prototype === studObj1.__proto__ );  //true

// As you can see in the above example, Function's prototype property can be accessed using <function-name>.prototype. However, an object (instance) does not expose prototype property, instead you can access it using __proto__.