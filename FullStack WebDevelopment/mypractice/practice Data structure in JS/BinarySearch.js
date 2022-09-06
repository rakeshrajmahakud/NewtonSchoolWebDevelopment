let arr = [1,2,3,4,5,6,7];
let k = 4;

let start = 0;
let end = arr.length-1;

// while (start<=end) {
//     mid = (start+end)/2;

//     if (arr[mid] == k) {
//         console.log(mid);
//         return;
//     }else if (arr[mid]<k) {
//         start = mid+1;
//     }
//     else if (arr[mid]>k) {
//         end = mid-1;
//     }
// }


// RECURSIVE APPROACH 

function binarySearch(ar,start,end,k) {
    let mid = (start+end)/2
    if (ar[mid]=== k) {
        return mid;
    }
    else if (k<arr[mid]){
        binarySearch(ar,start,mid-1,k);
    }
    else if(k>arr[mid]){
        binarySearch(ar,mid+1,end,k);
    }
}

console.log(binarySearch(arr,0,end,k))

