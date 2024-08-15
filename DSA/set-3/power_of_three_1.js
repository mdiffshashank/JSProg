/**
 * power of three
 * https://leetcode.com/problems/power-of-three/description/
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3^x.
 */

function isPowerOfThree(n) {
  if (n === 0) return false;
  else if (n < 3) return false;
  else if (n === 3) return true;
  else if (n % 3 !== 0) return false;
  else return isPowerOfThree(n / 3);
}

console.log(isPowerOfThree(23));
console.log(isPowerOfThree(243));
console.log(isPowerOfThree(36));
