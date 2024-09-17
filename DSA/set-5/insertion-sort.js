/***
 * select an element and compare it with left if left is smaller , swap
 */

function insertionSort(arr) {
  let k = 0; //selected elementAt
  while (k !== arr.length) {
    for (let i = k; i >= 0; i--) {
      if (arr[i] < arr[i - 1]) {
        //swap
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      } else {
        break;
      }
    }
    k++;
  }
  return arr;
}

console.log(insertionSort([9, 8, 14, 12, 6, 15, 13]));
