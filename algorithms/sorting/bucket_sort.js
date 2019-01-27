const insertionSort = require('./insertion_sort');

const bucketSort = arr => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  const bucketSize = 0.2;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = [];
  let result = [];

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
  }

  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    result = result.concat(buckets[i]);
  }

  return result;
};
