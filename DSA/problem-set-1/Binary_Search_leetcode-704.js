/**
 * Binary search : Constraint : sorted array
 * 
 * Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

// take two pointers left and right , left = start, right =end, find out mid
 */

// 1. iterative

function Search (nums,target){
    //create two pointers low and high (high-low) is your search zone
    let low =0; //first index
    let high = nums.length-1; //last index

    let mid;
    while(low<=high){
        mid=Math.floor((low+high)/2); //calculate mid
        if(nums[mid]===target) return mid;
        else if(nums[mid]<target) {
            low = mid +1;
        }else{
            high = mid-1
        }
    }
    return -1;
}

// 2 . recurssive 
// function search(nums, target, low = 0, high = nums.length - 1) {
//   let mid = Math.floor((low + high) / 2);
//   if (nums[mid] === target) return mid;
//   else if (nums[mid] > target) return search(nums, target, low, mid - 1);
//   else if (nums[mid] < target) return search(nums, target, mid + 1, high);
//   if (low > high) return -1;
// }

// const result = search([-1, 0, 3, 5, 9, 12], 9);
// console.log(result);
