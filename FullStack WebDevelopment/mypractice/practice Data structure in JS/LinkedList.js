class List{
    constructor(){
        this.head = {
            value : null,
            next : null,
        }
        this.tail = this.head;
        this.size = 0;
    }
    adddata(data){
        let newNode = {
            value : data,
            next : null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size +=1;
    }

}

let ll = new List()
ll.adddata(100)
ll.adddata(200)
ll.adddata(300)
console.log(ll);