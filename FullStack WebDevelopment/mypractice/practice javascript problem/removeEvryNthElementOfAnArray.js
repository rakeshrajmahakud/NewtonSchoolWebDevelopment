// const arr = ['T','h','a','i','s','b',' ','i','c','s','
// ','a','t','h','e','e',' ','t','s','o','r','n','g','t','
// ','t','n','h','a','s','t',' ','o','n','e','o','v','e','a','r','
// ','f','e','n','a','d','s','p',','];
// const removeNth = (arr, n) => {
//    for(let i = n-1; i < arr.length; i += n){
//       arr.splice(i, 1);
//    };
// };
// removeNth(arr, 2);
// console.log(arr);

// or
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let newArr = nums.filter((item,idx)=>((idx+1)% 4 !==0));
console.log(newArr);