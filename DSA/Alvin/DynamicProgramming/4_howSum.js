/****
 *  write a function howSum(targetSum,numbers) that takes in a target sum and an 
 *  array of numbers as arguments.
 * 
 * the function should return an array containing any combination of elements 
 * that add up to exactly the targetSUM. If there is no combination that 
 * adds up to the targetSum then return null
 * 
 * if there are multiple combinations possible you may return any single one
 *
 ***/

function howSum(targetSum,numbers,memo={}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum ===0) return [];
    if(targetSum < 0 ) return null;

    for(let num of numbers){
        const remainingTarget = targetSum-num;
        const remainderResult = howSum(remainingTarget,numbers,memo) //result could be null or an array
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult,num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [2,3])); //[ 3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); //[ 4, 3 ] 
console.log(howSum(7, [2,4])); //null
console.log(howSum(8, [2, 3, 5])); //[ 2, 2, 2, 2 ]
console.log(howSum(300, [7, 14])); //false

/***
 * Brute Force :--------
 * m =target sum
 * n= numbers.length
 * time : O(n^m * m)
 * space: O(m)
 * Memoization : -------------
 * 
 * 
 */

