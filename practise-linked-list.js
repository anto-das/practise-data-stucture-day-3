class Node {
    constructor(value){
        this.value = value,
        this.next=null
    }
}

const head = new Node(10)
head.next=new Node (20)
head.next.next=new Node (30)
let current = head
while(current !== null){
    console.log(current)
    current = current.next
}
console.log(head)