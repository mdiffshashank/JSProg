/**
 * Given a string s, return true if the s can be palindrome after deleting at most one
 * character from it.
 * Input: s = "abca"
 * Output: true
 */

var validPalindrome = function (str) {
  let left = 0;
  let right = str.length - 1;

  let count1 = 0;
  let count2 = 0;

  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      right--; //shift end
      count1++;
    }
  }
  left = 0;
  right = str.length - 1;

  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      left++; //shift end
      count2++;
    }
  }

  if (count1 == 1 || count2 == 1) return true;
  if (count1 == 0 || count2 == 0) return true;
  return false;
};
