const swap = require('../../utils/swap');

const partition = (arr, start, end) => {
  const pivot = Math.floor(Math.random() * arr.length);

  while (start <= end) {
    while (arr[start] < arr[pivot]) {
      start++;
    }

    while (arr[end] > arr[pivot]) {
      end--;
    }

    if (end >= start) {
      swap(arr, start++, end--);
    }
  }

  return start;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index, end);
  }

  return arr;
};

// O(n log n) - time complexity
// O(log n) - space complexity
