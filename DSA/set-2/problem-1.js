/**
 * Count prefixes of an string on words array
 * https://leetcode.com/problems/count-prefixes-of-a-given-string/description/
 *
 * Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
 * Output: 3
 *
 * Explanation:
 * The strings in words which are a prefix of s = "abc" are:
 * "a", "ab", and "abc".
 * Thus the number of strings in words which are a prefix of s is 3.
 */

var countPrefixes = function (words, s) {
  let count = 0;
  for (const word of words) {
    if (s.indexOf(word) === 0) count++;
  }
  return count;
};

console.log(countPrefixes(["a", "ab", "ac", "bc"], "abc")); //2
