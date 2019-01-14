const swap = require('../../utils/swap');

const bubbleSort = arr => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
};

// O(n^2)
