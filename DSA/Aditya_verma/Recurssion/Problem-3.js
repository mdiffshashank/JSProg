/**
 * Problem-3 : Calculate factorial of number n;
 */

function factorial(n) {
  if (n < 1) return;
  if (n === 1) return 1;
  return factorial(n - 1) * n;
}

console.log(factorial(4));
