/**
 *  flat the given array
 *  const arr = [[1,[2,3,3],[3],[4,6],[9]],[[2,3,4]]];
 *  OUTPUT: [1,2,3,3,3,4,6,9,2,3,4]
 */
//Approach 1
console.log([[1, [2, 3, 3], [3], [4, 6], [9]], [[2, 3, 4]]].flat(Infinity));

//Approch 2
function flatten(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      output.push(...flatten(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}

// const result = flatten([[1, [2, 3, 3], [3], [4, 6], [9]], [[2, 3, 4]]]);
// console.log(result);
