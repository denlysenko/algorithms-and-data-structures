const countingSort = (arr, k = Math.max.apply(null, arr)) => {
  const result = [];
  const count = new Array(k + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result[--count[arr[i]]] = arr[i];
  }

  return result;
};

// Time Complexity: O(n+k)
// Space: O(n+k)
