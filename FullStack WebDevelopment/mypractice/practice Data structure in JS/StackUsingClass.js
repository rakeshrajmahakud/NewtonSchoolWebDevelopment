class Stack {
    item = [];
    currSIze;    
    maxSize;
    constructor(size){
        this.maxSize = size;
        this.currSIze = this.item.length;
    }
    push(val){
        if (this.maxSize>=this.currSize) {
            console.log("stack is full");
            return;
        }
        this.item[this.currSIze++] = val;
    }
    pop(){
        if (this.currSIze>0) {
            this.currSIze--
            this.item.length = this.currSIze;
        }
        else{
            console.log("stack is empty");
        }
    }
    display(){
        console.log(this.item);
    }
}


let st = new Stack(5);
st.push(25)
st.push(26)
st.push(27)
st.push(28)
st.pop()
st.pop()
st.pop()
st.pop()
st.display()


