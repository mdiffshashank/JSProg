/**
 *  Find the median of combination of two sorted arrays
 */

function findMedianSortedArrays(A, B) {
  // Calculate the total length of the combined arrays
  const requiredPos = [];
  const totalLength = A.length + B.length;

  // Determine the required positions for the median(s)
  if (totalLength % 2 === 0) {
    requiredPos.push(totalLength / 2);
    requiredPos.push(totalLength / 2 - 1);
  } else {
    requiredPos.push(Math.floor(totalLength / 2));
  }

  let l1 = 0, //itr for A
    l2 = 0, // itr for B
    index = 0, //output itr
    isL1Lesser = false;
  const output = [];

  // Merge arrays until required median positions are reached
  while (l1 < A.length && l2 < B.length) {
    if (A[l1] < B[l2]) {
      l1++;
      isL1Lesser = true;
    } else {
      l2++;
      isL1Lesser = false;
    }
    if (requiredPos.includes(index)) {
      output.push(isL1Lesser ? A[l1 - 1] : B[l2 - 1]);
    }

    if (requiredPos.length === 1 && output.length === 1) break;
    if (requiredPos.length === 2 && output.length === 2) break;

    index++;
  }

  // Handle the edge case where one array is fully traversed
  while (output.length < requiredPos.length) {
    if (l1 < A.length) {
      if (requiredPos.includes(index)) {
        output.push(A[l1]);
      }
      l1++;
    } else if (l2 < B.length) {
      if (requiredPos.includes(index)) {
        output.push(B[l2]);
      }
      l2++;
    }
    index++;
  }

  // Return the median (single value or average of two values)
  return output.reduce((acc, value) => acc + value) / output.length;
}

// Example usage:
// const A = [1, 3, 5];
// const B = [2, 4, 6];
// console.log(findMedianSortedArrays(A, B)); // Output: 3.5

// const C = [1, 2];
// const D = [3, 4];
// console.log(findMedianSortedArrays(C, D)); // Output: 2.5
