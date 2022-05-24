// let number = 5;

//iterative method
// let fact = 1;
// if (number === 1) {
//     console.log("factorial of the number is 1");
// }else if(number<0){
//     console.log("invalid number");
// }else{
//     for (let  i= 1; i <= number; i++) {
//        fact = fact*i;
//     }
//     console.log("fact of number is "+ fact);
// }


function fact(n) {
    if (n ==0 ) {
        return 1 ;
    }
    return n*fact(n-1);
}


console.log(fact(5));
