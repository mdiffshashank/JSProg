//dutch national flag problem

function sort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]]; //swap high and mid
      high--;
    } else if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]]; //swap mid and low
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    }
  }

  return arr;
}

const result = sort([2, 0, 2,0,0,2, 1, 1, 0,2]);
console.log(result);
