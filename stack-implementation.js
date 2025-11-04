class Stack{
    constructor(){
        this.items = []
    }
    push(value){
       this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
       return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
      return  this.items[this.items.length -1]
    }
    print(){
        console.log(this.items.slice().reverse().join(' => '))
    }
    isEmpty(){
        return this.items.length ===0
    }
}

const stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.pop())
stack.push(10)
stack.push(20)
stack.push(30)
// console.log(stack.pop())
console.log(stack.peek())
stack.print()