function sum_array(arr) {
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[i].length;j++){
            sum = sum + arr[i][j];
        }
    }
    console.log(sum);
}

//for testing
// let arr =[[1,2,3],[7,9,11],[1,2],[1,8,9,7,11]];
// sum_array(arr)
