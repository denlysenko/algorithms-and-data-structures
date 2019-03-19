const swap = require('../utils/swap');

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.heapify();
  }

  heapify() {
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
}
