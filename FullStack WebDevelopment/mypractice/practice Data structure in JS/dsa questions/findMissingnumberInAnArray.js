let arr = [0,1,2,3,4,5,6,7,9];

function findMissingNumber(arr){
    let n = arr.length;
    let totalsum = (n*(n+1))/2
    for (let i = 0; i < n; i++) {
        totalsum -= arr[i];
    }
    console.log("missing number is ==>", totalsum);
}

findMissingNumber(arr)