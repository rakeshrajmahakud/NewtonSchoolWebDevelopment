function whichDay(date) {
    // write code here
    // return the output , do not use console.log here
    let d = date.getDay();
    let arr = ["last","first","second","third","fourth","fifth","sixth"];
    return `It is the ${arr[1]} day of the week`

}

let dt = new Date("2022", "1", "2")
console.log(dt);
console.log(whichDay(dt));