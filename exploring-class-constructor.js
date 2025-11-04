
class Counter {
    constructor(count){
        this.count = count
    }
    add(amount){
        this.count = this.count+amount
    }
    print(){
        console.log(this.count)
    }
}

const counter1 = new Counter(2)
counter1.add(4)

counter1.print()
