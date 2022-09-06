let arr1 = [1,2,3,4,5,6,7];
let arr2 = [8,9,10,11,12,13];
let res =[];

let a1 = 0;
let a2 = 0;
let r = 0;

while (a1 < arr1.length && a2 < arr2.length ) {
    if (arr1[a1] <= arr2[a2]) {
        res[r++] = arr1[a1++]
    }
    else if(arr1[a1] > arr2[a2]){
        res[r++] = arr2[a2++]
    }
}

while (a1< arr1.length) {
    res[r++] = arr1[a1++]
}
while (a2< arr2.length) {
    res[r++] = arr2[a2++]
}

console.log(res);