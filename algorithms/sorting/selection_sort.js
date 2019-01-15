const swap = require('../../utils/swap');

const selectionSort = arr => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, i, min);
    }
  }

  return arr;
};

// O(n^2)
