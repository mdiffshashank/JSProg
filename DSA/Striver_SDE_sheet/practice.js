/**
* Given a string s, return the longest palindromic substring in s.
*/


//expand from center reverse approach

function longestPalindrom(str) {
  let result = ""; //answer 
  let resultLen = 0; //longest length

  for (let i = 0; i < str.length; i++) {
    //Case 1 : odd length 
    let left = i;
    let right = i;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      // if left and right char matches
      if (right - left + 1 > resultLen) {
        resultLen = right - left + 1;
        result = str.slice(left, right + 1); // right included
      }
      left--;
      right++;
    }

    //even case
    left = i;
    right = i + 1;

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      // if left and right char matches
      if (right - left + 1 > resultLen) {
        resultLen = right - left + 1;
        result = str.slice(left, right + 1); // right included
      }
      left--;
      right++;
    }
  }
  return result;
}
console.log(longestPalindrom("baab"));
//Neetcode
