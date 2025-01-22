// Given an array of integers numbers and a number k, find the k most frequent numbers in the array.
// Here, k represents the number of elements that should be returned, which are the ones that appear the most frequently.
// The order of the result does not matter.

const mostCommonElements = (numbers, k) => {
  const map = new Map();

  for (let num of numbers) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sortedArr = Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .map((num) => num[0]);

  return sortedArr.slice(0, k);
};

console.log(mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2));
console.log(mostCommonElements([7, 7, 7, 8, 8, 9, 9, 9], 3));
console.log(mostCommonElements([10, 10, 10, 10, 10], 1));

// Time Complexity: O(n log n)
// Space Complexity: O(n)

// Approach 2: using Buckets

const mostFrequentElements = (numbers, k) => {
  const map = new Map();
  const result = [];

  for (let num of numbers) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const buckets = Array(numbers.length + 1).fill(null).map(() => []);

  for (const [num, frequency] of map) {
    buckets[frequency].push(num);
  }

  for (let i = buckets.length - 1; i >= 0 && k > 0; i--) {
    if (buckets[i].length > 0) {
      for (const num of buckets[i]) {
        result.push(num);
        k--;

        if (k == 0) break;
      }
    }
  }

  return result;
};

console.log(mostFrequentElements([4, 4, 4, 6, 6, 5, 5, 5], 2));
console.log(mostFrequentElements([7, 7, 7, 8, 8, 9, 9, 9], 3));
console.log(mostFrequentElements([10, 10, 10, 10, 10], 1));
