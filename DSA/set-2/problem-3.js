/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/
 */

var removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([s[i], 1]);
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }

  let output = "";
  for (const [key, value] of stack) {
    output += key.repeat(value);
  }
  return output;
};
