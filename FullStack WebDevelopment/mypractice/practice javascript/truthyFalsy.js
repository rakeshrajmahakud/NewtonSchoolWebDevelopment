
// truthy//
console.log(true);  // true

if ("text") {           //true
    console.log("text printed");
}

if (72) {  //true
    console.log(72);   //72
}

if (-72) {  //true
    console.log(-72);   //-72
}
if ({}) {    //true
    console.log({});   //print {}
}

if ([]) {    //true
    console.log([]);    //output []
}


// falsy //
if ("") {
    console.log("text printed");  // print statement will not execute, because thus statement return false
}

if (false) {  //false
    console.log("false"); // this statement will not executed
}

if (0) { //false
    console.log(0);
}

if (NaN) { //false
    console.log(NaN);
}
if (null) { //false
    console.log(null);
}

if (undefined) {    //false
    console.log("undefined");
}


