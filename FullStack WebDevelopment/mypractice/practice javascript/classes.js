// // ex:1///////
// const Product1 = class Product {
    //     constructor(itemName,price,discount,productCode){
        //         this.itemName = itemName;
        //         this.price = price;
        //         this.discount = discount;
        //         this.productCode = productCode;
        //     }
        
        //     get getDiscount(){    // at the time of calling dont use parenthesis
        //         return this.discount;
        //     };
        //    set setDiscount(value){    // at the time of calling dont use parenthesis
        //        this.discount = value;
        //   }
        
        //     discountValue(){
            //         return this.discount;
            //     }
            // }
            
            // let chair = new Product1('chair',400,15,'c10');
            
            // console.log(chair.getDiscount);   //15
            // console.log(chair.discountValue());  15
            

//   -------------------------------------------------------          
// class Product{
//     constructor(itemName){
//         this.itemName = itemName;
//     }
//     getItem(){
//         return this.itemName + " is a product";
//     }
// }

// class Furniture extends Product {
//     constructor(itemName){
//         super(itemName);
//     }
//     getItem(){
//         return this.itemName + " is a furniture"
//     }
// }

// let pencil = new Product("pencil");
// let chair1 = new Furniture("chair");


// ----------------------------------------------


// class Student{
//     constructor(name,roll,dob){
//         this.name = name;
//         this.roll = roll;
//         this.dob = dob;
//     }
// }

// let obj1 = new Student('raj',11,1995);



// --------------------------------------------------

// we can create an objet  by uding function constructor or class or other techniques 
// first we see how function constructor works 

// function Person(data){
//     this.name = 'john',
//     this.age = 23,
//     this.data = data,
//     this.details = () => {
//         console.log("my age is "+this.age +" my data ="+this.data);
//     }
//     function hello() {
//         console.log("is is a function");
//     }
// }

// let perobj = new Person("cool");
// console.log(perobj);
// perobj.details()
    
// ---------------------------------
// note :-
// javascript has also some  built in constructors -----
// here are those 
let a = new Object();
let b = new String();
let c = new Number();
let d = new Boolean();
// ----------------------------



// now its time to create an object by using class >>>>>>>>>>>>>>>>>.

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     data(){
//         console.log(this.name);
//     }
//     // setter (to set a value)
//     set setname(info){
//         this.name = info;
//     }

//     //getter (getting the data)
//     get perName(){
//         console.log(this.name);
//     }
// }

// let newper = new Person('raj')
// newper.data()  //raj
// console.log(newper.name);

// setting the value using sette method
// newper.setname = "rakesh"
// //after set a value
// newper.data();    //rakesh


// note :-
// ****a class should be defind before using it ,unlike function andother javascript declarations 
// ,the class is not hoisted  otherwise it will give you reference error .
// classes are always follow strict mode for example if we write a = 5 inside the class without declare var or let keyword then it will also give yoy reference error
//javascript is also a special type of function and the type of operator returns function for a class .


// ==============================================================
    //   INHERITANCE 
//=================================================================
//parent class 

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(" hello ! "+ this.name);
//     }
// }
//  //inheriting parent class 
//  class Student extends Person{


//  }
// // note:- if we write constructor in an extended class the we need to use super  keyword otherwise it gives an error
//  let student1 = new Student('jack')

//  console.log(student1);
//  student1.greet()

//  :note ::- super keyword used inside a child class deontes its parent class 

// --------------------------------------
// ex2:-
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(" hello ! "+ this.name);
//     }
// }
//  //inheriting parent class 
//  class Student extends Person{
//     constructor(name){
//         super(name)
//     }

//  }
// // note:- if we write constructor in an extended class the we need to use super  keyword otherwise it gives an error
//  let student1 = new Student('jack')

//  console.log(student1);
//  student1.greet()

//  note :-her super inside the student class refers to the persion class ,hemce when the constructorof student class is called it also calls the constructor of the persion class which assigns name property to it

// ---------------------------------------------------
        //  OVERRRIDING METHOD OR PROPERTY 
// ---------------------------------------------------

// if the child class has the same property or method name as the parent class the it will use the method and property of the child class this concept is call method overriding 
class Person{
    constructor(name){
        this.name = name;
        this.ocupation = "unemployed"
    }
    greet(){
        console.log(" hello ! "+ this.name+ " " + this.ocupation);
    }
}
 //inheriting parent class 
 class Student extends Person{
    constructor(name){
        super(name)
        this.ocupation = "student";  //overriding ocupation property
    }

    greet(){
        console.log(" hello ! "+ this.name+ " " + this.ocupation);
    }

 }
// note:- if we write constructor in an extended class the we need to use super  keyword otherwise it gives an error
 let student1 = new Student('jack')

 console.log(student1);
 student1.greet()

//  ------------------------------------------------------------
