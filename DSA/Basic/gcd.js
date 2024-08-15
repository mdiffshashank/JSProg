/**
 * find the GCD of two numbers , gcd(a,b) = gcd(a%b,b) where a>b
 */

function gcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a === 0) return b;
  if (b === 0) return a;
}

console.log(gcd(12, 16));
