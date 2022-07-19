let str = "ABABBCDCCC";
let obj  = {};


for(let i =0;i< str.length;i++){
    if (obj[str.charAt(i)]) {
        obj[str.charAt(i)] += 1;
    }else{
        obj[str.charAt(i)] = 1;
    }
}
let newstr = "";
new Set(str).forEach((e)=>{
    if (obj[e]) {
        newstr += e+obj[e];
    }
});
console.log(newstr);
// console.log(obj);
