/***
 * https://leetcode.com/problems/palindrome-number/description/
 * check if number is palindrom , withput converting to string
 * Input: x = 121
 * Output: true
 */

function isPalindrom(num) {
  if (num === 0) return true;
  let orignal = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return orignal === reversed;
}

console.log(isPalindrom(121));
