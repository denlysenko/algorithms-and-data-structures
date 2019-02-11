class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }

    return ++this.size;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return removedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.first.data;
  }
}
