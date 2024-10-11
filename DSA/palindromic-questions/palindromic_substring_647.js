/**
 * Given a string s, return the number of palindromic substrings in it.
 * Input: s = "aaa"
 * Output: 6
 * Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 * We can solve this problem using two methods:
 *  Expand Around Center
 *  Dynamic Programming (DP)
 */

var countSubstrings = function (s) {
  let count = 0;

  // Helper function to count palindromes centered at l and r
  const expandAroundCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++; // Increment the count for every valid palindrome
      left--; // Move left pointer outward
      right++; // Move right pointer outward
    }
  };

  // Iterate over each character and treat it as the center of a palindrome
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i); // Odd length palindromes (single character center)
    expandAroundCenter(s, i, i + 1); // Even length palindromes (two-character center)
  }

  return count;
};
