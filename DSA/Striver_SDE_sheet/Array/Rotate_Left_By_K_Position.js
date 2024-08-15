function rotate(arr, k) {
  const temp = [...arr.slice(arr[k-1])];
  for (i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  return temp;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
//Output : [3,4,5,6,7,1,2]
