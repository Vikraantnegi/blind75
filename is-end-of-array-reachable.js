// Given an array of integers numbers where each element in the array represents the maximum number of positions that can be moved
//forward from that index; it is acceptable to move by fewer positions.
// Determine whether it is possible to reach the last index of the array by starting from the first index.
// Return true if it can be reached and false otherwise.

const arrayReachable = (numbers) => {
  if (numbers[0] <= 0) return false;

  let maxPosition = 0;

  for (let i in numbers) {
    console.log(i, maxPosition);
    if (Number(i) > maxPosition) return false;
    maxPosition = Math.max(maxPosition, Number(i) + numbers[i]);
  }

  return true;
};

console.log(arrayReachable([1, 0, 0, 0]));
