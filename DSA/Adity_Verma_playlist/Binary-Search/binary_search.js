/***
 * INPUT : [5,8,9,12,15] //sorted array
 * Target = 15
 *
 * Program : 1;
 */

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([5, 8, 9, 12, 15], 15));
