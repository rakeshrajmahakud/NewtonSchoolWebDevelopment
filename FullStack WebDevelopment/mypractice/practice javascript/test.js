// console.log("5"*3);

// var person = {
//     name : "abhinav",
//     age :1990,
//     calculate :function(){
//         console.log(2022-this.age)
//     }
// }
// person.calculate()



// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);

// })();    //2,4, 3,1


// const arr = [1,2,3,4,5,6,7]
// let y =  arr.forEach(x =>  x*x)
// let  x = arr.map(x => x*x)
// console.log(y);  //undefined
// console.log(x); // [1,4,9,16,25,36,49]

// console.log([]===[]);    //false
// console.log([] == []);    //false
// console.log(null === undefined);  // false
// console.log(null == undefined);   // true



// -------------------------------------------

function foo() {
    let x =(y = 0);
    // let x = 0;
    // let y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(),typeof x , typeof y);



// ------------------------------------------
// extract all values in JSON object 


// var obj = {a:{b:1},c:2,d:3,e:{m:{r:5}}};

// function printvalues(obj) {
//     for (let k in obj){
//         if (obj[k] instanceof Object) {
//             printvalues(obj[k]);
//         }else{
//             console.log(obj[k])
//         }
//     }
// }

// printvalues(obj);


