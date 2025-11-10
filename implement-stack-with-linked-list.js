class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    stackIn(value){
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode
        this.length++;
    }
    stackOut(){
        if(this.isEmpty()){
            return undefined
        }
        const nodeToRemove = this.head
        this.head = nodeToRemove.next
        this.length--;
        return nodeToRemove.value
    }
    peek(){
        return this.head ? this.head.value : null;
    }
    isEmpty(){
        return this.length ===0
    }
    print(){
       let currentNode = this.head; 
  const values = [];

  while (currentNode) {
    values.push(currentNode.value);
    currentNode = currentNode.next; 
  }

  console.log(values);
    }
}

const stack = new Stack()
stack.stackIn(10)
stack.stackIn(20)
stack.stackIn(30)
stack.print()





/*
1.check empty if(this.isEmpty()) => this.head = newNode and this.tail = newNode
2.jodi length thake tahole  => this.head = newNode 
*/ 