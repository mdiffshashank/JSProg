// How many unique paths are possible on m*n grid 
//if you can only travel down and right

/***
 * solve it by making the tree
 * where leef node is base condition for recursion.
 * if any node is 0 you can not travel in grid so unique path is zero
 * if grid is 1*1 there is only one grid cell so unique path is also one.
 * 
 *                   (     2,3     )
 *          down  /                  \ right 
 *            (1,3)                 (2,2)
 *   down    /   \r          down /     \ right
 *      (0,3)  (1,2)         (1,2)      (2,1)
 *              / \          /   \        /  \
 *         (0,2)  (1,1)  (0,1)  (1,1)  (1,1) (2,0)
 * 
 * 
 */          
//brute force O(2^m+n) time complexity
// brute force O(n+m) space complexity
 
function gridTravarsal(m,n,memo={}){
    const key = m+","+n;
    if(m===1 && n===1) return 1; //base case
    if(m===0 || n===0) return 0; //base case
    if(key in memo) return memo[key]; //check in memo
    memo[key] = gridTravarsal(m-1,n,memo) + gridTravarsal(m,n-1,memo);
    return memo[key];
}

console.log(gridTravarsal(1,1)); //1
console.log(gridTravarsal(2,3)); //3
console.log(gridTravarsal(3,2)); //3
console.log(gridTravarsal(3,3)); //6
console.log(gridTravarsal(18,18)); //2333606220


