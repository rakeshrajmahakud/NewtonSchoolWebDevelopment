let str = "abcdcbac"


function pallindoreChecker(str) {

    for (let i = 0; i < (str.length - 1) / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log("this is not apallindrome");
            return;
        }
    }
    console.log("this is pallindrome");
}
pallindoreChecker(str);

// 2nd method :- using while loop
let left = 0;
let right = str.length-1;

// while(left<=right){
//     if(str[left] !== str[right]){
//         console.log("this is not a pallindrome string");
//         return;
//     }else{
//         left++;
//         right--;
//     }
// }


