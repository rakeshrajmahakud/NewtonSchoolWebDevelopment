// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for each loop 

// array.forEach(element => {
    
// });

// ex :=
// the for each loop takes callback function inside that function it takes 3 parameters first os val, second is index,third is array
let myarr  = [10,20,30,40,50,60];
myarr.forEach((val,ind,arr)=>{
    console.log("index is-----> "+ind+' <------------> '+"value is---> "+val);
    console.log(arr);
})


// for in loop 

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// ----------------------------
// // for of loop syntax

// for (const iterator of object) {
    
// }

// ex :-
let people = ['raj','komal','manisha','priyanka','rajesh'];

for (let name of people) {
    console.log(name);
}

// ----see the difference --------------------------

for (let name in people) {
    console.log(name);
}
