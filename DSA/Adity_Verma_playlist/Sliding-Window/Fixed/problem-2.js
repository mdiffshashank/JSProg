// const arr = [12, 25, 17, 29, 16, 10, 22, 17],
const arr = [1,2,3,4,5,6,1],
  windowSize = 3;

/**Find the largest sum of subarry of size 3 */

const slidingWindowApproach = function (arr, windowSize) {
  let start = 0; /** start of the window */
  let end = 0; /** End of the window */
  let sum = arr[end]; /** sum of the window */
  let max = 0; /** maximum sum  */
  const arrSize = arr.length;

  while (end < arrSize) {
    if (end - start + 1 === windowSize) {
      //do Calculation
      max = Math.max(sum, max);

      //slide the window
      sum = sum - arr[start];
      start++;
    }
    end++;
    sum = sum + arr[end];
  }
  return max;
};

const result = slidingWindowApproach(arr, windowSize);

console.log(result);
