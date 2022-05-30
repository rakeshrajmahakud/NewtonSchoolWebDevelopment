function printpattern(rows) {
    for (let  i= 1; i<= rows; i++) {
        let a = "";
        for(let j = 1;j<=i;j++){
            a = a+"*"+" "
        }
        console.log(a);
    }
}
printpattern(5)