/**
 * You are given an array of integers nums, there is a sliding window of size k 
 * which is moving from the very left of the array to the very right. 
 * You can only see the k numbers in the window. Each time the sliding window 
 * moves right by one position.Return the max sliding window.
Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 */

var maxSlidingWindow = function(nums, k) {
    let start = 0;
    let end = 0;
    
    let size = nums.length;
    const result = [];
    let max=nums[end];

    while(end < size){
        if(end-start+1===k){
            //window size matched
           result.push(Math.max(...nums.slice(start,end+1)));
            start ++;
        }
            end++;
            max = Math.max(max,nums[end]);
        
    }
    return result;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));