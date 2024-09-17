/**
 * Selection sort
 * Select the minimum and sort
 */

function selectionSort(nums) {
  const arr = Array.from(nums);
  let k = 0; //till sorted
  let temp;
  while (k !== arr.length - 1) {
    let min = arr[k];
    let minIndex = 0;

    //find min
    for (let i = k + 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    //swap
    temp = arr[k];
    arr[k] = min;
    arr[minIndex] = temp;
    k++;
    //reset
    minIndex = k;
    min = arr[k];

    console.log(arr);
  }

  return arr;
}

const result = selectionSort([-6, 20, 8, -2, 4]);
console.log(result);
