const str = "anakonda"

let map ={};

for(let i = 0;i<str.length;i++){
    if (map[str[i]]) {
        map[str[i]]++;
    }else{
        map[str[i]] = 1;
    }
}

for(let i =0 ;i< str.length;i++){
    if (map[str[i]]==1) {
        console.log(i);
        break;
    }
}