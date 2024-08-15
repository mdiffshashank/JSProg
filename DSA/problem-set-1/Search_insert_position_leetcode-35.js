/**35. Search Insert Position
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, return the index where 
 * it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */
// Input: nums = [1,3,5,6], target = 5
// Output: 2

var searchInsert = function (nums,target) {
    let low = 0;
    let high = nums.length -1 ;
    let mid;
    let ans = nums.length;//last position is always possible to insert

    while(low<=high){
        mid = Math.floor(low + (high-low)/2);
        if(nums[mid]>=target){
            ans = mid;
            high = mid -1;
        } else{
            low = mid +1;
        }  
    }
    return ans;
}