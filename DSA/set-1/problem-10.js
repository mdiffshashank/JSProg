/**
 * Product of array except self without using dvision operator
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * Neetcode solution : https://www.youtube.com/watch?v=bNvIQI2wAjk
 *
 * INPUT : [1, 2, 3, 4]
 * OUTPUT: [24,12,8,6]
 */

function productExceptSelf(arr) {
  console.log("Orignal Array", arr);
  const length = arr.length;
  let prefix = 1;
  let postfix = 1;

  const output = Array.from({ length: length }).fill(1);

  for (let i = 0; i < length; i++) {
    output[i] = prefix; // prefix 1 at start
    prefix *= arr[i]; // multiply current value to prefix for next iteration
  }

  for (let i = length - 1; i >= 0; i--) {
    output[i] *= postfix; //output[i] will already have prefix so we need to multiply prefix* postfix to get ans
    postfix *= arr[i]; // multiply curent value to prefix for next iteration
  }

  console.log("output Array", output);
}

productExceptSelf([1, 2, 3, 4]);
