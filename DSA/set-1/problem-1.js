/**
 * Given the below inputs, return the desired output 

"" -> "" 

'a' -> 'a1' 

'aa' -> 'a2' 

'aabbbaa' -> 'a2b3a2' 

'aaabbbaa' -> 'a3b3a2' 
 */
//https://leetcode.com/problems/string-compression/description/

function compressString(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  // Tip : start from 1 to end,compare with previous value if same ,increment count else update result
  // with prev char and frequency. reset counter to 1.

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  } //at the end of the loop we will have correct count value just update the result.

  // Add the last group of characters
  result += str[str.length - 1] + count;

  return result;
}

// Test cases
console.log(compressString("a")); // Output: 'a1'
console.log(compressString("aa")); // Output: 'a2'
console.log(compressString("aabbbaa")); // Output: 'a2b3a2'
console.log(compressString("aaabbbaa")); // Output: 'a3b3a2'
