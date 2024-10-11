/***
 *  Write a function canSum(tragetSum,numbers) that takes in a targetSum and an array
 * of numbers as agruments. the function should return a boolean indicating whether or not
 * it is possible to generate the target sum using numbers from the array.
 *
 * - you may use an element of the array as many time as you needed.
 * - you may assume that all input numbers are non negative.
 */

/*****
 * canSum(7,[5,3,4,7])
 *                            (   7   )
 *                      -5  /   | -3  \-4 \ -7
 *                       (2)   (4)   (3)  (0)
 *                         -3/   \-4  \-3
 *                         1     0    0
 *
 * NOTE: by seeing the tree we got to know that when target sum become zero at
 * that time we need to return true
 *
 */

function canSum(targetSum, numbers,memo={}) {
  if(targetSum in memo) return memo[targetSum]; //memo fetching logic
  if (targetSum === 0) return true; //base case
  if (targetSum < 0) return false; //base case
  
  for (let num of numbers) {
    const remainingTarget = targetSum - num;
    if (canSum(remainingTarget, numbers,memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(canSum(7, [2,3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2,4])); //false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false

/*****
 *  m = targetSum
 *  n = length of array
 *  brute force O(n^m) time & O(m) space
 *  after memoize : O(m*n) time & O(m) space
 * 
 */
