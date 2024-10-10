/**
 *  Find All Anagrams in a String, return an array of all the start indices of p's anagrams in s
 *
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 *
 *
 */

function findAnagrams(s, p) {
  const pLength = p.length; //length of given string
  const sLength = s.length;

  const result = [];

  //create two arrays
  let arr1 = Array.from({ length: 26 }).fill(0);
  let arr2 = Array.from({ length: 26 }).fill(0);

  //frequency Map for p
  for (let char of p) {
    arr1[getIndexOf(char)]++;
  }

  let left = 0,
    right = 0;

  while (right < sLength) {
    arr2[getIndexOf(s[right])]++;

    if (right - left + 1 > pLength) {
      arr2[getIndexOf(s[left])]--;
      left++;
    }
    if (right - left + 1 === pLength) {
      let key1 = arr1.join("-");
      let key2 = arr2.join("-");
      if (key1 === key2) {
        result.push(left); // need start index only
      }
    }
    right++;
  }

  return result;
}

var getIndexOf = function (char) {
  return char.charCodeAt(0) - "a".charCodeAt(0);
};

console.log(findAnagrams("cbaebabacd", "abc"));
