/**
 *
 * find the intersection elements in two arrays.
 */
function intersectNoDuplicates(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  // Find intersection
  let intersection = [...set1].filter((num) => set2.has(num));

  return intersection;
}

// Example usage:
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 5];
console.log(intersectNoDuplicates(arr1, arr2)); // Output: [2, 3]
