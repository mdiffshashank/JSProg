

/**
 * 
 * Given an unsorted array of integers nums, 
 * return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time
 */

/**
 * Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence
is [1, 2, 3, 4]. Therefore its length is 4.
 */

/* 
 copy array as a set , look for previous number in set, if previous is not there look for next

*/
const longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max=1; 

    for(let num of nums ){
        if(!set.has(num-1)){
            //startng a new series
            max = Math.max(max, maxLength(num,set));
        }else{
            //existing series
            continue;
        }
    }
    return max;
};

const maxLength = (n,set,max=1)=>{
    const next = n+1;
    if(set.has(next)){
         return maxLength(next,set,max+1);
    }else{
        return max;
    }
}

const result = longestConsecutive([100,4,200,1,3,2])
console.log(result);