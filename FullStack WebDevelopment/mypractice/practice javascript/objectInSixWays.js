// check out complete blog here 
// https://attacomsian.com/blog/javascript-create-object

// 1st way (OBJECT LITERAL)
// const fruits = {
//     mango: '🥭️',
//     apple: '🍎',
//     lemon: '🍋',
//     cherry: '🍒'
// };
// ------------------------------------

//2nd Way (Object constructor)
/*The second way to create an object in
JavaScript is by using the in-built Object()
constructor. You can use the new keyword to
initialize an instance of Object: */

// const fruits = new Object();

/*Now to add properties to the above object,
you have to use the dot (.) notation as shown below:*/

// fruits.mango = '🥭️';
// fruits.apple = '🍎';
// fruits.lemon = '🍋';
// fruits.cherry = '🍒';

// ---------------------------------------

//3rs way (Constructor function)
/* A constructor function is nothing but a simple
JavaScript function that, when called with a new
keyword, acts as a constructor and returns an object. */

// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const user = new User('John Doe', 45);

// ----------------------------------------

// 4th way(Object.create() method)
/*The Object.create() method allows us to create a new object,
using an existing object as the prototype of the newly created object.
This method is especially useful when you want to create a new object from an already existing object.
The Object.create() method takes up to two parameters.
The first mandatory parameter is the object that serves as a prototype for the newly created object.
The second parameter is an optional object which contains the properties to be added to the new object. */

// const Vehicle = {
//     maker: 'BMW',
//     color: 'Black'
// };

// const vehicle = Object.create(Vehicle);

// console.log(vehicle.maker); // Tesla
// console.log(vehicle.color); // Red
// ---   -- --- -- 
// You can also specify additional properties for the new
// object as a second parameter to Object.create() with attribute options like configurable,
// enumerable, writable and value as shown below:

// const vehicle = Object.create(Vehicle, {
//     type: {
//         value: 'Electric',
//         writable: true,
//         configurable: true,
//         enumerable: false
//     }
// });

// console.log(vehicle.maker); // Tesla
// console.log(vehicle.color); // Red
// console.log(vehicle.type); // Electric

// --------------------------------------

// 5th way(Object.assign())
/*The fifth way to create an object in JavaScript is by
using the Object.assign() method. This method takes one or
more source objects as input and copies all enumerable own properties to the target object.

You can pass in any number of objects to Object.assign()
as parameters. The first parameter is the target object.
The rest of the parameters are source objects containing properties that you want to apply to the target object. */

// const car = {
//     maker: 'Model X',
//     color: 'Black'
// };

// const maker = {
//     name: 'Tesla'
// };

// const vehicle = Object.assign({}, maker, car);

// console.log(vehicle);

// // { name: 'Tesla', maker: 'Model X', color: 'Black' }

// --------------------------------------
//6th way (es6 class)

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `Hi ${this.name} 👋`;
    }
}

const user = new User('Atta', 30);

console.log(user.sayHi()); // Hi Atta 👋
console.log(user.age); // 30