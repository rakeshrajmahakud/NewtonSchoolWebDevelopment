// what is this keyword ?
// the this keyword is used inside the function .the this keyword is marely a reference to another object 

// what is the this keyword refers to depends on the scenario on the way the function is implemented 
//  here are 3 senerio 

// 1. (Scenario-1)this inside a function :::-
    // the this keyword points to the global object .
// ex :=
    var name = "Mr rakeshraj"  // this is a global variable with var name is name
    function myfunc() {
        console.log(this.name);   // this  poits to global variable name .
    }
    
    myfunc();   // mr rakeshraj      (for output plz use windows dev console ont the node js)

// 2. (Scenario-2)this inside a method ::-
// the this keyword points to the object the method is in .
// ex:=
    // const user = {
    //     name : "raj",
    //     yearofbirth: 1995,
    //     calcAge: function () {
    //         const currentYear = (new Date().getFullYear);
    //         return currentYear-this.yearofbirth;     //here "this " is belongs to user object .
    //     }
    // }

    // console.log(user.calcAge());

//3(Scenario-3)when function is run with call,n=bind or apply :::-
// when a function is called using the .call(param) or .bind(param)  or .appy(param) method,the first param become the object that the this keyword refer to 

const user = {
    name : "raj",
    yearofbirth: 1995,
    calcAge: function () {
        const currentYear = (new Date().getFullYear);
        return currentYear-this.yearofbirth;     //here "this " is belongs to user object .
    }
}

myfunc.call(user);