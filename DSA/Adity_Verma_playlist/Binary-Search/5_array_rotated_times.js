/**
 *  problem : 5
 * Find how many times array is rotated
 *
 * number of times array is rotated === index of minimum element
 *
 * INPUT : [11,12,15,18,2,5,6,8] //rotated a sorted array
 * TIP : find the index of minimum element that is ans;
 */

function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1; //last index

  while (start <= end) {
    //no rotation condition
    if (arr[start] <= arr[end]) {
      return 0; // Array is already sorted, no rotation
    }

    let mid = Math.floor((start + end) / 2);
    let next = (mid + 1) % arr.length;
    let prev = (mid - 1 + arr.length) % arr.length;

    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid; // prev and next both larger then mid is minimum
      //move to un sorted array direction
    } else if (arr[mid] < arr[end]) {
      end = mid - 1;
    } else if (arr[mid] > arr[start]) {
      start = mid + 1;
    }
  }

  return -1; // If the array is not rotated
}

// Example Usage:
let arr = [7, 0, 1, 2, 4, 5, 6];
console.log(findRotationCount(arr)); // Output: 4 (rotated 4 times)
