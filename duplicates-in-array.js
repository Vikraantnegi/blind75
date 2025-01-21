// Given an array of integers numbers, determine whether the array contains any duplicate values.
// A duplicate is defined as any number that appears more than once in the array.

const findDuplicates = (numbers) => {
  if (numbers.length <= 1) return false;

  const map = {};
  for (let num of numbers) {
    if (map[num]) return true;
    else map[num] = 1;
  }
  return false;
};

console.log(findDuplicates([3, 2, 6, 5, 0, 3, 10, 3, 10, 5]));
