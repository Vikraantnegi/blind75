// Given an array numbers of size n storing n different integers which fall within the range [0, n],
// implement a function to identify the missing element in the array.
// All numbers except one are present in the array. Find the missing number.

const findMissingNumber = (numbers = []) => {
  if (numbers.length === 0) return 0;

  //  Approach 1: Sort the array, iterate over, wherever i !== numbers[i] return i
  // Approach 2: Use a map to store all the values, iterate over the array, wherever i is not present in map return i

  if (numbers.length === 0) return 0;
  const map = new Map();

  for (const num of numbers) {
    map.set(num, 1);
  }

  for (let i = 0; i <= numbers.length; i++) {
    if (!map.has(i)) return i;
  }

  // Approach 3: Use the sum of the numbers and subtract from the total sum of the numbers from 0 to n

  const totalSum = (numbers.length * (numbers.length + 1)) / 2;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return totalSum - sum;
};

console.log(findMissingNumber([3, 0, 1]));
