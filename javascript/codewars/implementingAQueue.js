/* Implementing A Queue

In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

    The enqueue method takes in the item as a parameter, while the dequeue method does not.
    The size method simply returns the number of items in the queue.

Wait, what?

    To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
    To dequeue an item means means to remove the item at the front, or head, of the queue.
    In a queue, we remove the item the least recently added.

JavaScript Methodology

Queues can be implemented in JavaScript using arrays.

You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

As long as the tests pass, go for it!
*/

class Queue {
    constructor() {
        this.storage = [];
        this.itemCount = 0;
    }
    enqueue(item) {
        // add item to the queue
        this.itemCount++;
        this.storage.push(item);
    }
    dequeue() {
        // remove item from the front of the queue and return its value
        if (this.itemCount > 0) {
            this.itemCount--;
        }
        return this.storage.shift();
    }
    size() {
        // return number of items in queue so far
        return this.itemCount;
    }
}
  
  
  

  const myQueue = new Queue();
  console.log(myQueue.size())
  console.log(myQueue.enqueue('first'))
  console.log(myQueue.enqueue('second'))
  console.log(myQueue.enqueue('third'))
  console.log(myQueue.size())
  console.log(myQueue.dequeue())
  console.log(myQueue.size())
