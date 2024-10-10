/**
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 */

function isValidPalindrom(str) {
  //cleanup
  let s = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .trim()
    .toLowerCase();

  let left = 0; //start
  let right = s.length - 1; //end

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isValidPalindrom("A man, a plan, a canal: Panama"));
console.log(isValidPalindrom("race a car"));
