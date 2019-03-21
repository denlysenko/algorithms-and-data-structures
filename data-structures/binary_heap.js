const swap = require('../utils/swap');

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.heapifyUp();
  }

  extractMax() {
    if (this.values.length === 0) {
      return;
    }

    swap(this.values, 0, this.values.length - 1);
    const max = this.values.pop();
    this.heapifyDown();

    return max;
  }

  heapifyUp() {
    let index = this.values.length - 1;
    const elem = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (elem <= parent) {
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
    let largest = index;

    if (left < arr.length && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < arr.length && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== index) {
      swap(arr, index, largest);
      this.heapifyDown(largest);
    }
  }
}
