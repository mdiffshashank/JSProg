/**
 * find the count of element k in a sorted Array;
 *
 * INPUT  : [2,5,7,10,10,10,12,13,16] , k =10
 * OUTPUT : [3,5]
 *
 * problem : 4
 *
 * count = last occurance - first occurance +1
 */

function countOfElement(nums, k) {
  let start = 0;
  let end = nums.length - 1;

  let mid;
  let upperBound; //index
  let lowerBound; //index

  // solve for lower bound
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === k) {
      lowerBound = mid;
      upperBound = mid;
      end = mid - 1;
    } else if (nums[mid] > k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  while (nums[upperBound] === k) {
    upperBound++;
  }

  return upperBound - lowerBound;
}

console.log(countOfElement([2, 5, 7, 10, 10, 10, 12, 13, 16], 10));
