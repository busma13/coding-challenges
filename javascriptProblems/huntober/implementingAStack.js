class Stack {
    constructor() {
        this.storage = {}
        this.top = 0
    }

    push(item) {
        this.top++
        this.storage[this.top] = item
    }

    pop() {
        if (this.top > 0) {
            const item = this.storage[this.top]
            delete this.storage[this.top--]
            return item
        }
    }

    peek() {
        return this.storage[this.top]
    }
}

const myStack = new Stack()
myStack.push('first')
myStack.push('second')
myStack.push('third')
console.log('Stack: ', myStack)
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.pop())
console.log('Stack: ', myStack)
