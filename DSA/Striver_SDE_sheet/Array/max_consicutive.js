function maxCount(arr) {
  let count = 0;
  let max_Count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > max_Count) {
      max_Count = count;
    }
  }
  return max_Count;
}

console.log(maxCount([1, 1, 0, 1, 1, 1]));
/**Find out max consicutive 1's */