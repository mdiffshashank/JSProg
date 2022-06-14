// program to get nth node of the fibonacchi series
// basic recursion program

// function fibo(n) {
//   if (n === 1 || n===2) return 1;
//   return fibo(n-1)+fibo(n-2);
// }

// this will not work due to exponential time complexity console.log(fibo(50));

// when memoization used , use memo as memoization object

// try to think of recursive function in terms of tree

function fibo(n,memo={}){
    if(n===1 || n===2) return 1;
    if(n in memo) return memo[n]; //check if it is present in memo object
    memo[n] = fibo(n-1,memo) + fibo(n-2,memo); //set the momization object value
    return memo[n];
}
console.log(fibo(50));
