const swap = require('../../utils/swap');

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j] > arr[j + 1]) {
      swap(arr, j + 1, j--);
    }
  }

  return arr;
};

// O(n^2)
module.exports = insertionSort;
