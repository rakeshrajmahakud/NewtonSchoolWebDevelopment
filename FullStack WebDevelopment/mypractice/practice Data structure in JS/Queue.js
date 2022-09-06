let Queue = [];
let currSize = Queue.length;
let maxSize = 5;

function enque(val) {
    if (currSize>=maxSize) {
        console.log("que is already full");
    }
    else {
        Queue[currSize++] = val;
    }
}

function deque() {
    if (! isEmpty()) {
        for(let i = 0 ; i< Queue.length ; i++){
            Queue[i] = Queue[i+1];
        }
        currSize--;
        Queue.length = currSize;
    }
    else{
        console.log("the que is already empty");
    }
}


function front(){
    if (! isEmpty()) {
        console.log(Queue[0]);
    }else{
        console.log("queue is already empty");
    }
}

function rear() {
    if (! isEmpty()) {
        console.log(Queue[currSize-1]);
    }
    else{
        console.log("queue is already empty");
    }
}

function isEmpty() {
    if (currSize<=0) {
        return true;
    }else{
        return false;
    }
}

enque(10)
enque(20)
enque(30)

deque()
deque()
deque()

front()
console.log(Queue);