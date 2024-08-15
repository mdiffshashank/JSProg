// var containsDuplicate = function(nums) {
//     const countMap = new Map();
//       for(const num of nums){
//           if(countMap.has(num)){
//               const count = countMap.get(num);
//               countMap.set(num,count+1)
//           }else{
//               countMap.set(num,1);
//           }
//       }
//      return [...countMap.values()].some(v=>v>1)
//   }
/*https://leetcode.com/problems/contains-duplicate*/

//approach-2
var containsDuplicate = function (nums) {
  const hashSet = new Set();
  for (const num of nums) {
    if (hashSet.has(num)) {
      return true;
    }
    hashSet.add(num);
  }
  return false;
};

const result = containsDuplicate([1, 2, 3, 1]);
console.log(result);
