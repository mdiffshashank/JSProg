var twoSum = function(nums, target) {
    const hashMap = new Map();
    for(let i=0;i<nums.length;i++){
        if(hashMap.has(target - nums[i])){
            return [i,hashMap.get(target-nums[i])]
        }else{
            hashMap.set(nums[i],i)
        }
    }
};

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/