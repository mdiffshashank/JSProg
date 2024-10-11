/**
 * 516. Longest Palindromic Subsequence
 * TIP: Dynamic Programming. The idea is to compare characters from both ends of the string and
 * work toward the middle.
 */

var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  // Every single character is a palindrome of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Build the DP table from shorter substrings to longer ones
  for (let len = 2; len <= n; len++) {
    // length of the substring
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1; // endpoint of the substring
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1]; // matching pair
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]); // skip either i or j
      }
    }
  }

  return dp[0][n - 1]; // Longest palindromic subsequence for the whole string
};
