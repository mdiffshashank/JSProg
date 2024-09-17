function fibo(n) {
  if (n === 1 || n === 2) return 1;
  let output = [1, 1];
  for (let i = 2; i <= n; i++) {
    output[i] = output[i - 1] + output[i - 2];
  }

  return output[n - 1];
}

console.log(fibo(17));
