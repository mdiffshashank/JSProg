/**
 * https://www.geeksforgeeks.org/search-almost-sorted-array/
 * INPUT : [10, 3, 40, 20, 50, 80, 70],40
 * OUTPUT: 2
 * program-9
 */

function searchInNearlySortedArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Check if mid, mid-1, or mid-2 is the target
    if (arr[mid] === target) {
      return mid;
    } else if (mid > start && arr[mid - 1] === target) {
      return mid - 1;
    } else if (mid < end && arr[mid + 1] === target) {
      return mid + 1;
    }

    // Adjust the search range
    if (arr[mid] > target) {
      end = mid - 2;
    } else {
      start = mid + 2;
    }
  }

  return -1; // Target not found
}

// Test Cases
let arr1 = [10, 3, 40, 20, 50, 80, 70];
console.log(searchInNearlySortedArray(arr1, 40)); // Output: 2
console.log(searchInNearlySortedArray(arr1, 10)); // Output: 0
console.log(searchInNearlySortedArray(arr1, 70)); // Output: 6
console.log(searchInNearlySortedArray(arr1, 100)); // Output: -1

// Edge Cases
let arr2 = [1]; // Single element
console.log(searchInNearlySortedArray(arr2, 1)); // Output: 0
console.log(searchInNearlySortedArray(arr2, 2)); // Output: -1

let arr3 = [3, 2]; // Two elements, nearly sorted
console.log(searchInNearlySortedArray(arr3, 2)); // Output: 1
console.log(searchInNearlySortedArray(arr3, 3)); // Output: 0

let arr4 = []; // Empty array
console.log(searchInNearlySortedArray(arr4, 1)); // Output: -1
