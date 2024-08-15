/**
 * @param {string} str
 * @return {string}
 */
function longestPalindrome(str) {
  let result = "";
  let resultLen = 0;

  for (let i = 0; i < str.length; i++) {
    //odd length

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