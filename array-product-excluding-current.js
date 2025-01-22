// Given an array of integers numbers, return a new array result where each element result[i]
// represents the product of all the elements in numbers except for numbers[i]

const arrayProductExcludingCurrent = (numbers) => {
  const result = Array(numbers.length).fill(1);
  const preProd = Array(numbers.length).fill(1);
  const suffixProd = Array(numbers.length).fill(1);

  for (let i = 1; i < numbers.length; i++) {
    preProd[i] = preProd[i - 1] * numbers[i - 1];
  }

  for (let i = numbers.length - 2; i >= 0; i--) {
    suffixProd[i] = suffixProd[i + 1] * numbers[i + 1];
  }

  for (let i in numbers) {
    result[i] = preProd[i] * suffixProd[i];
  }

  return result;
};

console.log(arrayProductExcludingCurrent([1,2,3]));
console.log(arrayProductExcludingCurrent([2,0,3]));
console.log(arrayProductExcludingCurrent([0,0,-1,1]));

