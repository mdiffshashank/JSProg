function moveZero(arr) {
  const temp = Array.from(arr).fill(0);
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] !== 0) {
      temp[i] = arr[j];
      i++;
    }
    j++;
  }

  return temp;
}

console.log(moveZero([0, 1, 2, 0, 3, 4, 0]));
/**Move all zerores to the end
 * 
 * step-1 : create same length array already filled with 0
 * step2: maintain two pointers one for array and one for temp
 */