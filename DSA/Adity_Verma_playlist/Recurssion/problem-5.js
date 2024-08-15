/**
 * Problem-5 : Sort an Array using recursion
 * hypothesis ->  sort(arr) -> []
 * induction ->
 * base condition -> smallest valid input [2]
 *
 */

function sortArray(arr) {
  if (arr.length === 1) return arr;
  const value = arr.pop();

  return sortArray(arr);
}

console.log(sortArray([25, 67, 56, 43, 61, 36, 19, 24, 31, 45, 66, 12]));
