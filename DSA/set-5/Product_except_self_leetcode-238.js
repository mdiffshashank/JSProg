/*238. Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
 */


/**
 * 
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
 */
var productExceptSelf = function(nums) {
    //create prefix and postfix arrays

    const prefix = [];
    const postfix = [];
    const output = [];

    for(let i=0;i<nums.length;i++){
        prefix.push((prefix[i-1] || 1) * nums[i])
    }

    for(let i=nums.length-1;i>=0;i--){
        postfix[i]=((postfix[i+1] || 1) * nums[i] );
    }

    for(let i=0;i<nums.length;i++){
        output.push((prefix[i-1] || 1) * (postfix[i+1] || 1))
    }

    // console.log(prefix);
    // console.log(postfix);

    return output;
};

const result = productExceptSelf([1,2,3,4]);
console.log(result);