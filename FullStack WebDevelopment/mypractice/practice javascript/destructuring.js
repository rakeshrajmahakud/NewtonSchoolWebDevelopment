// ARRAY destructuring 
const mylang = ["java","python","c++","javascript"]

console.log(mylang);   //[ 'java', 'python', 'c++', 'javascript' ]

// if we want to store each value of that array to each new variable then we can write this --

let [top1,top2,top3,top4] = mylang;

console.log(top1);  //java
console.log(top4);  //javascript


// also we can ignore values with commas 
const myname = ["raj","maul","paul","idrani","tulu"];

let [name1,,,,tulu] = myname;

console.log(name1);   //raj

// also we can do it using rest parameters 

const mycity = ["pune","mumbai","chennai","bhubaneswar"]

const [pune,...remains] = mycity;

// there is a popular qn ,how to swap two variable without using third variable 
let a = 'foo'
let b = 'bar'
//here we swapped two
console.log("before swapping "+ a);
[a,b] = [b,a]

console.log("after swapping " + a);

let myuser = ["prasant",20,"delhi",["male","25000"]]

let [ename, eage,ecity,[gender,salary]] = myuser;

console.log(ename);


// -----------------------------------------------------------------------
////                         OBJECT DESTRUCTURING                   //////////
// FOR LIKE ARRAYS WE CAN ALSO DESTRUCTURE OBJECTS 
// ------------------------------------------------------------------------------

const obj = {
    myname : 'mahesh',
    age : 25,
    city : 'haryana'
}

// but here we need to write exact nake which is match to the object key 
// here we can add alice also by using colon 
let {myname:fullname,age,city} = obj;

console.log(age);   //25
console.log(fullname);  //mahesh

const obj1 = {
    username : 'ankit',
    userage : 30,
    useraddress : {
        first : 'kalighat',
        sec :"kolkata"
    }
}

let {username,userage,useraddress} = obj1; 

console.log(username); //ankit
console.log(useraddress.first);  //kalighat