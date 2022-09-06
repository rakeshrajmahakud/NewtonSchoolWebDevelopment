// CHECK TWO STRING ARE ANAGRAM OR NOT USING HASHMAP 

let str1 = "hello";
let str2 = "ellho";


// ans 
function chaeckAnagram(str1,str2) {
    let obj = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for(let i =0 ; i< str1.length; i++){
        if (obj[str1[i]]) {
            obj[str1[i]]++
        }else{
            obj[str1[i]] = 1;
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if (obj[str2[j]] ) {
            obj[str2[j]]--;
        }else{
            return false;
        }
    }
    return true;   
}

console.log(chaeckAnagram(str1,str2));