    // MAP METHOD::::::::::::::;
// map method returns a new array where as foreach dont .
// we just iterate on array through foreach and we cannot return anything 
// also we can add as many as methods on map method but we cannot do it on foreach 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let mymap = arr.map((x)=>{
//     return x+3;
// }).reverse()

// let myforeach= arr.forEach((x)=>{
//     return x+3;
// })

// console.log(mymap);    //
// console.log(myforeach);  //umdefined

// ----------------------------------------
// const users = [
//     {name : "rakeshraj",age : 26,title: "mahakud"},
//     { name : "pravakar",age : 34,title:"khurana"}
// ]

// let mydata = users.map((x)=>{
//     return x.name+" "+x.title;
// })
// console.log(mydata);
// :::::::::::::::::::::::::::::::::::::::
// :::::::::::::Filter ::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::
// // find the odd number  on an Array
// let myarr = [1,3,5,6,7,8,9,10]

// let res1 = myarr.filter((x)=>{
//     return x % 2 ;
// })

// console.log(res1);   //[ 1, 3, 5, 7, 9 ]
// ----------------------------------------
// find even number 
// let res2 = myarr.filter((x)=>{
//     return x % 2 === 0;
// })

// console.log(res2);   //[ 6, 8, 10 ]
// -----------------------------------------

// let check = [0,1,2,11,4,5,6,7];

// let res3 = check.filter((x)=>{
//     return x > 4
// })
// console.log(res3);   [ 11, 5, 6, 7 ]

// ----------------------------------------------
// REDUCE METHOD :::::::::::::::::::::::::::::::::
// -----------------------------------------------

// find sum 
// let arr4 = [5,1,3,2,6]

// let output = arr4.reduce((acc,curr)=>{
//     acc = acc+curr;
//     return acc;
// },0)

// console.log(output);   //17
// -----------------------------------------------
// find maX element
// let arr5 = [5,1,3,2,6]

// let myres = arr5.reduce((max,curr)=>{
//     if (max<curr) {
//         max = curr
//     }
//     return max;
// },0)

// console.log(myres);  //6

// ----------------------------------

// const user = [
//     {name : "a",age :25},
//     {name : "b",age :30},
//     {name : "c",age :35},
//     {name : "d",age :40},
// ]

// let data2 = user.filter(x => x.age<32).map((x)=>x.name);
// console.log(data2);     //[ 'a', 'b' ]