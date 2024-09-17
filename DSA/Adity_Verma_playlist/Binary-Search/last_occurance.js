/**
 * INPUT  : [2,5,7,10,10,10,12,13,16] //sorted
 * find last occurance of 10
 * OUTPUT : 5
 *
 * problem-3
 */

function lastOccurance(arr, target) {
  let result = -1;
  const lastIndex = arr.length - 1;
  let mid;
  let start = 0;
  let end = lastIndex;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      result = mid; // could be last occurance
      start = mid + 1; //<---------------- move to right to find last occurance
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return result;
}

console.log(lastOccurance([2, 5, 7, 10, 10, 10, 12, 13, 16], 10));
