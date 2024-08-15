/**
 * Count prefixes of an string
 * https://leetcode.com/problems/count-prefixes-of-a-given-string/description/
 */

var countPrefixes = function (words, s) {
  let count = 0;
  for (const word of words) {
    if (s.indexOf(word) === 0) count++;
  }
  return count;
};

console.log(countPrefixes(["a", "ab", "ac", "bc"], "abc")); //2
