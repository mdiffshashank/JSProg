/**
 *  find the maximum sum of subarray of 3 in given array
 *  arr = [12,25,17,29,16,10,22,17] size =3
 */

const bruteForceApprocah = function (arr, size) {
  const length = arr.length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < i + size; j++) {
      sum = sum + arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

const arr = [12, 25, 17, 29, 16, 10, 22, 17],
  windowSize = 3;

const result = bruteForceApprocah(arr, size);

console.log(result);


