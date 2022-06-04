// :::::::::::::::::::Spread Operator ::::::::::::::::::::

// the spread operator some how replace the apply method 
// lets see how we pass an array in a function 

function sum(a,b,c) {
    console.log(a+b+c);
}

// sum([1,2,3])    //1,2,3 undefined undefined
//  we can pass the array through apply method 

let arr = [1,2,3]

sum.apply(null,arr) //6 
// now it will work perfectly 

// but we can write it in es6 like this by using spread operator--->>>


sum(...arr) // 6
// this will give the same result so what it will do actually..
// it actually covert array to seperate element

console.log(...arr);  // 1 2 3 
// the . . . (3dot) we call it as spread operator 
//it replace the apply method and also concat method ..
// lets see another example 

let arr1 =  [1,2,3,4];
let arr2 = [5,6,7,8];

// previously we can concat these two array like this --->

// arr1 = arr1.concat(arr2)
// console.log(arr1);   //[1, 2, 3, 4, 5, 6, 7, 8]

// but after coming spread opertor we can write like this 
 arr1 = [...arr1,...arr2]

 console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8]

//  lets see a problem and how a spread operator can help us to overcome it easily

let myarr1 = [1,2,3]
let myarr2 = myarr1  //here we copy myarr1 to myarr2
myarr1.push(4,5);

console.log(myarr1); //[ 1, 2, 3, 4, 5 ]
console.log(myarr2); //[ 1, 2, 3, 4, 5 ]

// here we see both of the output is same but we dont want this.
//beause of refernce type if we cange the value of any array the updated value also shown in another array and this create a problem
// now spread operator come to rescue 

let x = [1,2,3];
let y = [4,5,...x,7,8];

console.log(x); //[1,2,3]
console.log(y);//[4,5,1,2,3,7,8]
 
// here you se now we get what we want . 
// so spread operator js creates a ney memory address for y array . 


//*****spread operator mainly used in array 
//**** wee can use spread operator in array as well as object


// ex3
// Math.max() can only expect numbers only and accept large numbers so 
// we use spread operator to pass a large array 

let numArr = [1,2,3,4,5,6,7,8,9];
console.log(Math.max(...numArr)); // 9

//////////// Spread operstor and objects //////////////////

let person = {name : "raj",age : 25};
let p1 = person;

console.log(person); // {name : "raj",age : 25}
console.log(p1);    // {name : "raj",age : 25}


// it create the same problem like we have seen in array case .
// so if we chhange porperties any of these objects then the another one also be changed 
//  so for that we can here use spread operator also 
let p2 = {...person}
p2.number = 111111111;
console.log(person); //{ name: 'raj', age: 25 }
console.log(p2); //  { name: 'raj', age: 25, number: 111111111 }

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// --------------------------------REST PARAMETERS----------------------------------
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Now lets talk about rest para meter ,rest parameter is normally used as function parameters.
 
// let max = function(...num){
//     console.log(num);
// }

// ex:-

let number = [1,2,3,4,5,6,7,8];
function sum(...num) {   //here ...num converts any parameters into an array
    let total = 0;
    for(let n of num){
        total += n;
    }
    return total;
}

console.log(sum(1,2,3,5)); //11

//**always add rest parameter at last of functons parameter area *//




