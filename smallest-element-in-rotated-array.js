//Given a sorted and rotated array numbers containing unique elements, find and return the minimum element in this array.
// Rotating an array [a[0], a[1], a[2], ..., a[n-1]] once results in [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Rotating it a second time results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]].
// Develop an algorithm that runs in O(log n) time complexity.

const findSmallestElementInRotatedArray = (numbers) => {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx <= rightIdx) {
    const mid = Math.floor((leftIdx + rightIdx) / 2);

    if (numbers[leftIdx] <= numbers[mid]) {
      if (numbers[leftIdx] > numbers[rightIdx]) {
        leftIdx = mid + 1;
      } else {
        return numbers[leftIdx];
      }
    } else {
      if (numbers[mid] > numbers[mid - 1]) {
        rightIdx = mid - 1;
      } else {
        return numbers[mid];
      }
    }
  }
};

console.log(findSmallestElementInRotatedArray([9, -9, -7, -4, 0, 2, 5, 6]));
