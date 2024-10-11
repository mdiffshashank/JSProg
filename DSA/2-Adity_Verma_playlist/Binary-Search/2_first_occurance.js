/**
 * INPUT  : [2,5,7,10,10,10,12,13,16] //sorted
 * find first occurance of 10
 * OUTPUT : 3
 *
 * problem-2
 */

function firstOccurance(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  let result = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      result = mid; // could be first occurance
      end = mid - 1; //<------------- all previous occurance will be on the left side
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return result;
}

console.log(firstOccurance([2, 5, 7, 10, 10, 10, 12, 13, 16], 10));
