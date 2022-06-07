let arr = [1,2,3,4,5,3,5,2,3]

let x = 3;     //remove 3 from this array

let res = arr.filter((y)=>{
    return y !== x
})

console.log(res);
