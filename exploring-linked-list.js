class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail = null
        this.length =0
    }
    // node append method
    append(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.tail =newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
       this.length++
       return this;
    }
    // node prepend method
    prepend(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
        }
        return this;
    }

    // node insert method
    insert(index,value){
         if(index < 0 || index > this.length){
            console.error('this index is out of bound')
         }
        if(index === 0){
            return this.prepend(value)
        }
        if( index === this.length){
            return this.append(value)
        }
        const leadingNode = this._traverseToIndex(index-1)
        const holdingNode = leadingNode.next
        const newNode = new Node(value)
        leadingNode.next= newNode
        newNode.next = holdingNode
        this.length++;
    }
    // private helper method
    _traverseToIndex(index){
        let count =0
        let currentNode = this.head
        while(count !== index){
            currentNode = currentNode.next
            count++;
        }
        return currentNode;
    }
    
    print(){
        const arr = [];
        let current = this.head
        while(current !== null){
            arr.push(current.value)
            current=current.next
        }
        console.log(arr.join(' => '),'=>','null')
    }
}
const list = new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)


list.append(10).append(20).append(30)
list.insert(2,50)
list.print()