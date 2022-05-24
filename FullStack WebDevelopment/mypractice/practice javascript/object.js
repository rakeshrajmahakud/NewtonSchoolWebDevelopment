var user  = {
    name : "rakeshraj",
    "my mob": 7504691872,
    calc :()=>{
        return "hello world";
    },
    "my arr" : [1,2,3,4,5,6,7],
}

//if we want to wite key in multiple word with space then we use doubke or single quotetion mark
// and we can access throuth the squre bracket 
console.log(user["my arr"][0]); //accessing the first index 
console.log(user["my mob"]);


console.log(typeof(!"5"));


//functional custom constructor ///

// in javascript ,a constructor is a special function that act as a mold to create new objects

// creating  a cusom functional cunstructor 
function Car(maker,model,year) {
    this.make = maker;
    this.model = model;
    this.year = year;
    this.SetMiles = function(miles){    //doubt on this part 
        this.miles = miles;
        return miles;
    }
}
//using  a constructor  with the "new" kewword

let car1 = new Car("maruti","alto700",2015);

console.log(car1.SetMiles(200));
console.log(car1);

// adding methods to the constfructor prototype 
Car.prototype.age = function(){
    return (new Date()).getFullYear() - this.year; 
}

//it will return the age 
console.log(car1.age());





