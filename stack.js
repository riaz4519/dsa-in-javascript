class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

let stack = new Stack();

// Adding stack
stack.add(10);
stack.add(20);
stack.add(30);
stack.add(40);
stack.add(60);
stack.add(70);
stack.add(80);

console.log(stack.items);

stack.remove();

console.log(stack.items);
