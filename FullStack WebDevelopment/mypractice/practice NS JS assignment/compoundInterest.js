
let compoundInterest = (p,t,r)=>{
   return (p * Math.pow((1 + r / 100), t)).toFixed(2);

}
console.log(compoundInterest(100,2,1));
