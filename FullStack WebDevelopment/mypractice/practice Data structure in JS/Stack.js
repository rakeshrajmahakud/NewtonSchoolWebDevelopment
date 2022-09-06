let stack = [];
let currSize = stack.length;
let max = 5;

function push(value) {
    if (currSize >= max) {
        console.log(`stack is full you cannot add ${value}`);
        return;
    }
    stack[currSize++] = value;
}
function pop() {
    if (currSize == 0) {
       console.log("stack is already empty"); 
       return;
    }
    currSize--;
    stack.length = currSize;
}

push(5)
push(10)
push(15)
push(15)
push(15)


console.log(stack);