/**
 *https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Input: s = "abcabcbb"
 * Output: 3
 *
 */

function longest(s) {
  let left = 0,
    right = 0;
  let max = 0;

  const set = new Set();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      max = Math.max(max, right - left);
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return max;
}

console.log(longest("abcabcbb")); //abc , bca , cab
console.log(longest("pwwkew")); //kew
