class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    appendNode(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = this.tail = newNode
        } else {
            let temp = this.tail
            this.tail = newNode
            temp.next = this.tail 
        }
    }

    prependNode(data) {
        const newNode = new Node(data)
        
    }

    removeNode() {
        
    }

}

class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}