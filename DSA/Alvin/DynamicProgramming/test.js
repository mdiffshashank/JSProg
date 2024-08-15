function howSum(targetSum, nums, memo) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  for (let num of nums) {
    const remainingTargetSum = targetSum - num;
    const remainderResult = howSum(remainingTargetSum, nums, memo);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

howSum(7, [5, 4, 3, 7]);
