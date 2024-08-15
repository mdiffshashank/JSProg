// Given an integer array nums and an integer k,
// return the k most frequent elements. You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// var topKFrequent = function (nums, k) {
//   const map = new Map(); //create a frequency map num: frequency
//   for (let num of nums) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1);
//     } else {
//       map.set(num, 1); 
//     }
//   }

//   const sortedMap = [...map.entries()].sort(function (a, b) {
//     b[1] - a[1];
//   });//sorted by frequncy

//   console.log(sortedMap.values());

//   let i = 0;
//   const arr = [];
//   while (i < k) {
//     const el = sortedmap.values().pop();
//     arr.push(el);
//     i++;
//   }
//   return arr;
// };

//answer -2
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let element of nums) {
    map.set(element, (map.get(element) || 0) + 1); //set frequency
  }

  //we have hash map, now create heap min heap
  const heap = [];

  //   console.log(map);
  map.forEach((freq, key) => {
    heap.push(`${freq},${key}`);
    //min heap
    
      heap.sort(function (a, b) {
        return b.split(",")[0] - a.split(",")[0];
      });
    
    if (heap.length > k) {
      heap.pop();
    }
  });

  return heap.map((v) => +v.split(",")[1]);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
