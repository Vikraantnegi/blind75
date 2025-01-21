// Given an array of integers numbers, determine the subarray that has the highest product and return that product.
// A subarray is a contiguous segment of an array where all elements are taken from consecutive indices,
// preserving their order, such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

// Brute force O(n^2)
const maxProductSubArray = (numbers) => {
  if (numbers.length === 0) return 0;

  let maxProduct = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let res = 1;
    for (let j = i; j < numbers.length; j++) {
      res = res * numbers[j];
      maxProduct = Math.max(res, maxProduct);
    }
  }

  return maxProduct;
};

console.log(maxProductSubArray([4, -1, 3]));

// O(n)
const optimalMaxProductSubArray = (numbers) => {
  if (numbers.length === 0) return 0;

  let max = numbers[0];
  let min = numbers[0];

  let result = max;

  for (let i = 1; i < numbers.length; i++) {
    let tempMax = Math.max(numbers[i], max * numbers[i], min * numbers[i]);
    min = Math.min(numbers[i], max * numbers[i], min * numbers[i]);

    max = tempMax;

    result = Math.max(tempMax, result);
  }

  return result;
};

console.log(optimalMaxProductSubArray([1, 2, -3, 5, 1]));
