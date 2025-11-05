class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
       this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
       return this.items.shift()
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
      return  this.items[0]
    }
    print(){
        console.log(this.items.join(' => '))
    }
    isEmpty(){
        return this.items.length ===0
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.peek())
console.log(queue.dequeue())
queue.print()