/**
 * Problem 5 variable sliing window
 * Find the longest subarray having sum =k
 * INPUT : [10, 5, 2, 7, 1, 9],k=15
 * OUTPUT: [5,2,7,1]
 * map can be used in variable type sliding window questions
 */

function longestSubArray(arr, k) {
  let left = 0,
    right = 0;

  // incase output array required uncomment below line
  //let maxLeft = 0;
  //let maxRight = 0;
  let maxLength = -Infinity;
  let sum = 0;
  while (right < arr.length) {
    sum += arr[right];
    if (sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        // maxLeft = left;
        // maxRight = right;
      }
    }
    right++;
  }
  return maxLength;
  //return arr.slice(maxLeft, maxRight + 1);
}

const result = longestSubArray([10, 5, 2, 7, 1, 9], 15);
console.log(result);
