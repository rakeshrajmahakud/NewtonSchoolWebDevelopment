function whichDay(date) {
    // write code here
    // return the output , do not use console.log here
    let d = date.getDay();
    let arr = ["last","first","second","third","fourth","fifth","sixth"];
    return `Today is the ${arr[d]} day of the week`

}