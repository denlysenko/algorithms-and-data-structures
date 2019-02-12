class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return removedNode.data;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this.first.data;
  }
}
