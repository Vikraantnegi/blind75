// Given a sorted and rotated array numbers containing unique elements and an integer target, return the index of target if it is in numbers,
// or -1 if it is not. Rotating an array [a[0], a[1], a[2], ..., a[n-1]] once results in [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Rotating it a second time results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]]. Develop an algorithm that runs in O(log n) time complexity.

const findInRotatedArray = (numbers, target) => {
    let leftIdx = 0;
    let rightIdx = numbers.length - 1;
  
    while (leftIdx <= rightIdx) {
      let mid = Math.floor((leftIdx + rightIdx) / 2);
  
      if (numbers[mid] === target) return mid;
      if (numbers[leftIdx] <= numbers[mid]) {
        if (numbers[leftIdx] <= target && target < numbers[mid]) {
          rightIdx = mid - 1;
        } else leftIdx = mid + 1;
      } else {
        if (numbers[mid] < target && target <= numbers[rightIdx]) {
          leftIdx = mid + 1;
        } else rightIdx = mid - 1;
      }
    }
    return -1;
  }
  

console.log(findInRotatedArray([-1, 0, 1, 3, 8, -10, -5], -5));
