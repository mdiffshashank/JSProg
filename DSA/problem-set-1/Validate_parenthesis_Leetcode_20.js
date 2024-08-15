var isValid = function (s) {
  const pairMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  let top = stack.length - 1;
  
  for (l of s) {
    //push on stack on every open bracket
    if (l == "{" || l == "[" || l == "(") stack.push(l);
    else {
      if (stack[top] == pairMap[l]) {
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
