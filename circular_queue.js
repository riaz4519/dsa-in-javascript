class CircularQueue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.items = [];
  }

  // enqueue

  enqueue(element) {
    // need to check its full or not front -> next == rear then
    if (this.isFull()) {
      throw new Error("Maximum length exceeded");
    }
    // if empty
    else if (this.isEmpty()) {
      this.front = this.rear = 0;
      this.items[this.rear] = element;
    } else {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    this.items[this.front] = null;

    this.front = (this.front + 1) % this.size;
  }

  isEmpty() {
    if (this.front == -1 && this.rear == -1) {
      return true;
    }

    return false;
  }

  isFull() {
    if ((this.rear + 1) % this.size == this.front) {
      return true;
    }

    return false;
  }

  peek() {
    return this.items[this.front];
  }

  clear() {
    this.items = [];
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(5);
circularQueue.enqueue(2);
circularQueue.enqueue(2);
//circularQueue.enqueue(2);

//dequeue
circularQueue.dequeue();
circularQueue.dequeue();

circularQueue.enqueue(3);

console.log(circularQueue.peek());

console.log(circularQueue.items);
