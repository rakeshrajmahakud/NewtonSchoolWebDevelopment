function fibonacci(n) {
    if (n < 1) {
        return;
    }
    else{
        let a = 0,b =1;
        for(let i =0 ; i <= n ; i++){
            console.log(a);
            let temp = b ;
            b = a+b;
            a = temp;

        }
    }
}

fibonacci(1);

let name1 = "Tony"; 
let name2 = "Tony";
if(name1 === name2) { console.log("They are the same string"); } 
else {console.log("They are different strings"); }

