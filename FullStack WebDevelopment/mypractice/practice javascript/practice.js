// count occurance and charactr of highest occurance 

function  CountOccuramnce(str) {
    let map = {};
    str.split(' ').join("").split('').forEach(element => {
        if (map[element]) {
                map[element] += 1;
        }else{
            map[element] = 1;
        }
    });

    let count = 0;
    let char = str[0];
    for(let x in map){
        if (map[x]>count) {
            count = map[x];
            char = x;
        }
    }

    console.log(map);
    console.log(count);
    console.log(char);
}

CountOccuramnce('my name is rakeshraja');

