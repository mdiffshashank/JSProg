/**
 * 
Given a string s, return true if the s can be palindrome after deleting 
at most one character from it. 

Solution : https://www.youtube.com/watch?v=wTaJp8_bSLQ&ab_channel=PrakashShukla
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
      right--; //case1: shift end don't return false 
      count1++;
    }
  }

  //re-initialize pointers 
  left = 0;
  right = str.length - 1;

  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      left++; //case 2: shift start 
      count2++;
    }
  }

  if (count1 == 1 || count2 == 1) return true;
  if (count1 == 0 || count2 == 0) return true;
  return false;
};
