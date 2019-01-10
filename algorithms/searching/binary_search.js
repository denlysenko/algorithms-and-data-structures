// array should be sorted

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  let guess;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    guess = arr[middle];

    if (guess === val) {
      return middle;
    }

    if (guess < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
};

// O(log n)
