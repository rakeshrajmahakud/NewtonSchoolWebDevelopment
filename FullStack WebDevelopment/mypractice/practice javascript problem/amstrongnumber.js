let number  = 153;
let temp = number;
let numofdigit = number.toString().length;
let sum = 0;
while (temp>0) {
    let digit = temp%10;
    sum += (digit**numofdigit);
    temp = parseInt(temp/10);
}
if (number == sum) {
    console.log("amstr0ng number");
}else{
    console.log("not an amstrong number");
}