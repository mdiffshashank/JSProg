/**
 *  Find the first unique character in given string, If it does not exist, return -1.
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * TIP: Create a map with frequncy and loop again the string return char where frequncy is one
 */

function firstUniqChar(s) {
  let charCount = {};

  // Count the occurrences of each character and store it in map.
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

// Example usage:
const s = "leetcode";
console.log(firstUniqChar(s)); // Output: 0

const s2 = "loveleetcode";
console.log(firstUniqChar(s2)); // Output: 2
