class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this.tail.value;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        if(this.head === this.tail){
            this.tail = null
        }
        const nodeToRemove = this.head.value;
        this.head = this.head.next
        this.length--;
        return nodeToRemove.value
    }

    isEmpty(){
       return this.length ===0
    }
    size(){
        return this.length;
    }
    print(){
        const arr = [];
        let current = this.head
        while(current){
            arr.push(current.value)
            current = current.next
        }
        console.log(arr.join(' => '))
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
console.log(queue.size())