const swap = require('../utils/swap');

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  isEmpty() {
    return this.values.length === 0;
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.heapifyUp();
  }

  dequeue() {
    if (this.values.length === 0) {
      return;
    }

    swap(this.values, 0, this.values.length - 1);

    const min = this.values.pop();
    this.heapifyDown();

    return min;
  }

  heapifyUp() {
    let index = this.values.length - 1;
    const elem = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (elem.priority >= parent.priority) {
        break;
      }

      swap(this.values, index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown(index = 0) {
    const arr = this.values;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < arr.length && arr[left].priority < arr[smallest].priority) {
      smallest = left;
    }

    if (right < arr.length && arr[right].priority < arr[smallest].priority) {
      smallest = right;
    }

    if (smallest !== index) {
      swap(arr, index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

module.exports = PriorityQueue;
