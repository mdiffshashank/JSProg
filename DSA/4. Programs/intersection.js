function intersection(arr1, arr2) {
  //make array sorted
  const map = new Map();

  for (let element of arr1) {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  }
}

//[2,4,4]
const result = intersection([1, 2, 3, 4, 4], [2, 2, 4, 4, 5, 5, 6, 2000]);
