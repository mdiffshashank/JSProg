var isValid = function (s) {
  const pairMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];

  for (l of s) {
    //push on stack on every open bracket
    if (l == "{" || l == "[" || l == "(") stack.push(l);
    else {
      if (stack[stack.length - 1] == pairMap[l]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};
isValid("()");

/**
 * 
 * Input: s = "()[]{}"
Output: true
 */
