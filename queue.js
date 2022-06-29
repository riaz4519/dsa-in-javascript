class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to queue
  enqueue(element) {
    return this.items.push(element);
  }

  // Remove element from queue

  dequeue(element) {
    return this.items.shift();
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // the size of the queue
  size() {
    return this.items.length;
  }

  // empty the queue
  clear() {
    this.items = [];
  }
}

let queue = new Queue();

// Add item to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

//  show the queue
console.log(queue.items);

//  remove item from queue
queue.dequeue();

console.log(queue.items);
// check the queue is empty
console.log(queue.size());

// last element in the queue
console.log(queue.peek());
