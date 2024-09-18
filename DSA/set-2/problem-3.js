/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/
 *
 * You are given a string s and an integer k, a k duplicate removal consists
 * of choosing k adjacent and equal letters from s and removing them, causing
 * the left and the right side of the deleted substring to concatenate together.
 * We repeatedly make k duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made.
 * It is guaranteed that the answer is unique.
 * 
 * Input: s = "deeedbbcccbdaa", k = 3
   Output: "aa"

 */

// TIP : insert [element,count] into stack

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

console.log(removeDuplicates("deeedbbcccbdaa", 3));
