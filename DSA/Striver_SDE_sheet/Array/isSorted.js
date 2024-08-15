function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        return false;
    } 
  }
  return true;
}

const result = isSorted([1,4,3,2,5])
console.log(result);

/***
 * Check if array is sorted or not  if arr[i] > arr[i+1] it is not sorted
 */