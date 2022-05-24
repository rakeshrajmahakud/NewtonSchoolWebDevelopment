// print the fibonacci series 
k = 10; // print 10 fibonacci numbers

let a =0,b =1;
for(let i = 0;i<=10;i++){
     let temp = a+b;
     console.log(temp);
     a=b;
     b= temp;
}