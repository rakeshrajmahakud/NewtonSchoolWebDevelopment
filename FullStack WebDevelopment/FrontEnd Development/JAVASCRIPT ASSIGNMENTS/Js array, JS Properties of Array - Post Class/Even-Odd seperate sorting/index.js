function sortEvenOdd(arr, arrSize){
    let even = [];
    let odd = [];
    for (let i = 0; i < arrSize; i++) {
        if (arr[i]%2 == 0) {
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    // even.sort(); we can use this also for sort ascending order
    even.sort((a,b)=>{return a-b});
    odd.sort((a,b)=>{return b-a});
    return odd.concat(even);
    
}

// self checking 
// let arr = [1,8,3,6,9,7,5]
// console.log(sortEvenOdd(arr,7));