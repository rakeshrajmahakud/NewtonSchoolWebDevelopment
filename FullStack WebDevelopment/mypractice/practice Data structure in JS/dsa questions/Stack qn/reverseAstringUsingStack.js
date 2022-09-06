let str  = "mynameisraj"

let stack = [];
let currSize  = stack.length;

function push(element) {
    stack[currSize++] = element;
}
function pop() {
    if (currSize == 0) {
        console.log("stack is already empty");
        return;
    }
    let x = stack[currSize-1];
    currSize -= 1;
   stack.length = currSize;
   return x;
}

for(let i = 0; i< str.length ; i++){
    push(str[i])
}

console.log(stack);
let res = ""

for(let j = 0 ; j< str.length; j++){
    res += pop();
}
console.log(res);