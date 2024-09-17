function climbingStaircase(n) {
  //Given a staircase of n steps , count the number of distinct ways to climb to the top. you
  //can either climb 1 step or 2 step at a time.

  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]; //we can climb only from step n-1 or n-2
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
