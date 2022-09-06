// sometimes we need to handle some errer related thing for eample we have here an oject 
// which dont have the firstname property available so it throws an error if we put lenggh prperty on it but we can tackle this issue 
// like if we havethe property available then he length will be calculate otherwise dont do enything 
// Symbol is "?"


let user = {
    names : {
        studentname : "rakeshraj",

    }
}

console.log(user.names.firstname); //undefined
console.log(user.names.firstname.length); //error becuse we put length property on undefind
console.log(user.names.firstname?.length); // it will not go forword if falsy value detects so the output is undefined