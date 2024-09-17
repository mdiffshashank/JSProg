/**
 * either one can take one stair or two stairs at a time
 */
function climbingStairs(n) {
  if (n === 0 || n === 1) return 1;
  let output = [1, 1];
  for (let i = 2; i <= n; i++) {
    output[i] = output[i - 1] + output[i - 2];
  }
  return output[n];
}

console.log(climbingStairs(3));
