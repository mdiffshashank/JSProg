/**
 * program -6
 * returns index of the target in rotated sorted array
 * [4, 5, 6, 7, 0, 1, 2], k = 0
 */

function searchInRotatedArray(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Check if mid is the target
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which part is sorted
    if (nums[start] <= nums[mid]) {
      // Left part is sorted
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1; // Target is in the left sorted part
      } else {
        start = mid + 1; // Target is in the right part
      }
    } else {
      // Right part is sorted
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1; // Target is in the right sorted part
      } else {
        end = mid - 1; // Target is in the left part
      }
    }
  }

  return -1; // Target not found
}

// Test Cases
let arr1 = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedArray(arr1, 0)); // Output: 4
console.log(searchInRotatedArray(arr1, 3)); // Output: -1

// Edge Cases
let arr2 = [1]; // Single element
console.log(searchInRotatedArray(arr2, 1)); // Output: 0
console.log(searchInRotatedArray(arr2, 2)); // Output: -1

let arr3 = [1, 3]; // Two elements, not rotated
console.log(searchInRotatedArray(arr3, 3)); // Output: 1
console.log(searchInRotatedArray(arr3, 1)); // Output: 0

let arr4 = [3, 1]; // Two elements, rotated
console.log(searchInRotatedArray(arr4, 3)); // Output: 0
console.log(searchInRotatedArray(arr4, 1)); // Output: 1

let arr5 = []; // Empty array
console.log(searchInRotatedArray(arr5, 1)); // Output: -1
