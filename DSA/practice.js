const numberStack = [];
const stringStack = [];

for (let i = 0; i < s.length; i++) {
  const char = s[i];
  if (!isNaN(Number(char)) && typeof Number(char) === "number") {
    numberStack.push(char);
  } else if (char !== "]") {
    stringStack.push(char);
  } else if (char === "]") {
    let repeatTimes = 0;
    let outputStr = "";

    while (
      stringStack.length > 0 &&
      stringStack[stringStack.length - 1] !== "["
    ) {
      outputStr = stringStack.pop() + outputStr;
    }
    stringStack.pop(); // pop out "["
    if (numberStack.length > 0) {
      repeatTimes = numberStack.pop();
    }
    outputStr = outputStr.repeat(repeatTimes);
    stringStack.push(outputStr);
  }
}
return stringStack.pop();
