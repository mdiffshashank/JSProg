/**
 * Find the second smallest number in Array
 * [23,43,98,67,13,9]
 * output -> 13
 */

//Approch-1
// function secondSmallest(arr) {
//   const smallest = Math.min(...arr);
//   const secondSmallest = Math.min(...arr.filter((value) => value !== smallest));
//   return secondSmallest;
// }

//Approch-2
function secondSmallest(arr) {
  let smallest = +Infinity;
  let secSmallest = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      //swap
      [smallest, secSmallest] = [arr[i], smallest];
    } else if (arr[i] > smallest && arr[i] < secSmallest) {
      //swap
      secSmallest = arr[i];
    }
  }

  return secSmallest;
}

const result = secondSmallest([23, 43, 98, 67, 13, 9]);
console.log(result);
