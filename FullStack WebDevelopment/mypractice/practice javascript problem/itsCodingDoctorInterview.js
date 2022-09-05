/*
// what is eval ?
const a = 10 
console.log(eval("a"));


// how to flat an array ?
const arr = [1,2,[3,4,5,[7,8,9]]]
const arr2 = [1,2,[3,4,5,[7,8,9]]]
console.log(arr.flat());   //it will only resolve one level for
// for a specific level we pass dependency
console.log(arr.flat(2)); //[1, 2, 3, 4, 5, 7, 8, 9]
*/

/*
// what is memoization in javascript ?
// in memoization we dont need to recalcuate if the same input  comes ,
const memoize = {};

const memoizeMultiplication = num => {
    if(num in memoize){
        console.log('memoized value ...');
        return memoize[num];
    }else{
        memoize[num] = num * 5 ;
        return memoize[num];
    }
}

console.log(memoizeMultiplication(5));
console.log(memoizeMultiplication(10));
console.log(memoizeMultiplication(10));
*/

/*
// remove duplicates from the string ?

let str = "my name is rakeshraj mahakud";
let str2 = "my name is is name raj raj";

let newstr = [...new Set(str.split(''))].join("")
let newstr2 = [...new Set(str2.split(' '))]
console.log(newstr);
console.log(newstr2);
*/

/*
map vs foreach ?
let arr1 = [1,2,3,4,6]
let arr2 = [1,2,3,4,6]
let res = arr1.forEach((el,idx,ar)=>{     //for each does not return anything insted modifing the original array unkike map returns a new array
    return ar[idx] = el * 2
})

let res2 = arr2.map((e,i,a)=>{
    return a[i] = e *2
})
let res3 = arr2.map((e,i,a)=>{
    return  e *2
})
console.log("for each result ==> ", res);   //undefined
console.log("prinying reslut2 ==> ",res2); //[ 2, 4, 6, 8, 12 ]
console.log("printing array2 ==> ",arr2); //[ 2, 4, 6, 8, 12 ]
console.log("printing result3==> ",res3); //[ 4, 8, 12, 16, 24 ]
*/

/*
// write polifil for foreach method ?
const myarr = ["mongo","express","react","node"];

Array.prototype.myforEach= function(callback) {
    for(let i = 0; i< this.length; i++){
        callback(this[i],i,this);
    }
} ;
//check myforeach
myarr.myforEach((e,i,a)=>{
    console.log(e,i,a);
})
*/

// how to reverse a string ? 

// let str = "my name is rakeshraj mahakud"
// let res = str.split("").reverse("").join("")
// console.log(res);

/*
// Q find occurance of an array ?
const arr= [1,2,3,4,5,6,5,6,7,3,4,2,3,4,5,4,3,3,"k"];

const count  = {};
let max = 0;
let occ = arr[0]
arr.forEach((e)=>{
    if (count[e]) {
        count[e]++;
    }
    else{
        count[e] = 1;
    }
})

for(let i in count){
    if(count[i]>max){
        max = count[i]
        occ = i
    }
    // console.log(count[i]>max);
}
console.log("max is occ is  ",max);
console.log("element is ",occ);
*/

/*
// find the maximum in an array ?
const arr = [1,2,1,3,4,3];
let max = arr.reduce((prev,curr)=> prev > curr ? prev : curr)
console.log(max);
*/

/*
// find unique values in an array ? 
let arr = [1,2,3,4,3,2,5,6,5,3];
let unique = [...new Set(arr)]
console.log(unique);
*/

// // Q make sentences from array ? 
// const arr = ["lets", "make","sentences"];
// console.log(arr.join(" "));


/*
// Q how to reverse an array ?

let arr = ["r","e","v","e","r","s","e"]
let arr2 = ["r","e","v","e","r","s","e"]
arr.reverse()
console.log(arr);
// method 2 :-
const rev = arr2.reduceRight((acc,elem)=>{
    acc.push(elem)
    return acc;
},[])
console.log(rev);
*/

/*
// Q Remove falsy values from an array ?

let arr = ["A","2",5,"hello","",0,false,null,undefined];
let newarr =arr.filter((e) => e);
// method2:-
let newarr2 =arr.filter(Boolean);
console.log(newarr);
console.log(newarr2);
*/

/*
// Q convert string to number  ?
const str = "25";
// mentod 1 :-
let num1 = str - 0  // (substract zero or any number from it)
console.log("this is num1 ==>",typeof num1 , num1);

//method 2 :-
let num2 = +str ;
console.log("this is num2 ==>",typeof num2 , num2);

// method3:-
let num3 = Number(str) ;
console.log("this is num3 ==>",typeof num3 , num3);

//method 4 :-
let num4 = parseInt(str);
console.log("this is num4 ==>",typeof num4, num4);
*/


/*
// Q put Object keys and values in an array ?

let obj = {
    name : "rakeshraj",
    age : 25,
    address : "ankapada",
    male : true,
    status : 1,
}

console.log(Object.keys(obj));  //[ 'name', 'age', 'address', 'male', 'status' ]
console.log(Object.values(obj)); // [ 'rakeshraj', 25, 'ankapada', true, 1 ]
*/


/*
// Q write a function to extract the last n elements from an array ?

function extractNelement(arr,n) {
    return arr.slice(arr.length-n)
}

console.log(extractNelement([1,2,3,4,5,6,7,8],3));
*/

/* // (my own qn )
// Q convert decimal t binary ? 
let str = [1,2,3,4,5,25]
let mystr = str.map(e => e.toString(2))
console.log(mystr);
*/

/*
// Q find the total negitive number of an array  ? 
const num = [1,3,5,6,7,8,-2,-4,4,-5];

console.log(num.filter(e => e< 0).length);
// method 2:-
let res = num.reduce((acc,curr)=>{
    console.log(acc);
    if (curr<0) {
        return acc+curr
    }
    
},0)
console.log(res);
*/


/*
// Q check all the elements in an array are same ?
const arr = [1,1,1,1,1,1,1];
// method1 :-
console.log(new Set(arr).size === 1);  // if all the ekemets are same then theset size must be one 

//method2 :-
console.log(arr.every(e => e));  //if all elemets are same then it returns true
*/

/*
// Q reame object keys ?
const obj  = {temp : 50, windspeed : 20};
let res = Object.entries(obj).map(([key,value])=>{
    return [`wa_${key}`,value]
})
console.log(res);
console.log(Object.fromEntries(res));
*/

/*
// Q remove all spaces from string ? 
const str = "  i am a dis co dan    ce  r "
// method1 :-
console.log(str.split(" ").join(""));

// method2:-
console.log(str.replace(/ /g,""));
console.log(str.replaceAll(/ /g,""));    //here g tag in mendatory otherwise it will through an error.

//method3:=
let newStr = ""
for(let i = 0 ;i < str.length;i++){
    if (str[i].trim()) {
        newStr += str[i];
    }
}

console.log(newStr);
*/

/*
// Q delete single or miltiple properties from an object ?

const movies = {
    name : "The guardian",
    director : "charles dabrie",
    stars : ["brucelee","jphn","aadam","kelie"],
    length : "2hr 20min",
    relised : "2005",
    IMDB :"5.9"
}

// method1 : (by using destructuring)
const {IMDB,length,...rest} = movies;
console.log(rest);
*/

/*
// Q double swap values ? 
let str = "0 9 9 0 2  59  188 5 99 86 885  0959   0"

function handleSwap(strv,v1,v2) {
    let temp = ""
    for(let i =0 ; i< str.length;i++){
        
        if (strv[i]===v1) {
            temp = temp+v2
        }
        else if(strv[i]===v2) {
            temp= temp+v1
        }
        else{
            temp = strv[i];
        }
    }

    return temp;
}

console.log(handleSwap(str,"0","9"));
*/
