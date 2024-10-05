function decodeString(s) {
  const numStack = [];
  const strStack = [];

  for (let i = 0; i < s.length; i++) {
    let num = Number(s[i]);

    if (!isNaN(num) && typeof num === "number") {
      numStack.push(num);
    } else if (s[i] !== "]") {
      strStack.push(s[i]);
    } else if (s[i] === "]") {
      let repeat_times = numStack.pop();
      let str = "";

      while (strStack[strStack.length - 1] !== "[") {
        str = strStack.pop() + str;
      }
      strStack.pop(); // pop "["
      strStack.push(str.repeat(repeat_times)); //push again
    }
  }
  return strStack.join("");
}

console.log(decodeString("3[a2[c]]")); // accaccacc
//console.log(decodeString("3[a]2[bc]")); // aaabcbc
