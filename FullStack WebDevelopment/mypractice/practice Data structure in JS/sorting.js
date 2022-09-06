let arr = [1,5,7,9,6,2,4]

for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0; j<arr.length;j++){
        if (arr[i]<arr[j]) {
            //swap
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// console.log(arr);

let str = "rakeshraj"
let i = 0

function myfunc(str,i) {
    if (i> str.length-1) {
        return;
    }
    myfunc(str,i+1);
    console.log(str[i]);
}
myfunc(str,i)

