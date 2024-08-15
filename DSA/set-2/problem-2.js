/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 *
 */

function removalOfAdjucentDuplicate(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

console.log(removalOfAdjucentDuplicate("abbaca"));
