// Given an array of integers numbers, determine the subarray that has the highest sum and return that sum.
// A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order,
//such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

const maxSumSubArray = (numbers) => {
  if (numbers.length === 0) return 0;

  let max = numbers[0];
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    sum = Math.max(numbers[i], sum + numbers[i]);
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxSumSubArray([1, 2, 3, 4])); // 10
console.log(maxSumSubArray([-1, -2, -3, -4])); // -1
console.log(maxSumSubArray([1, -2, 3, -4, 5, -6, 7, -8, 9])); // 10
