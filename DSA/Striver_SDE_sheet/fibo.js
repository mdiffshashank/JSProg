function fibo(n,memo={}){
    if(n===1 || n===2) return 1;
    if(n in memo) return memo[n];
    memo[n] = fibo(n-1,memo) + fibo(n-2,memo)
    return memo[n];
}

console.log(fibo(6));