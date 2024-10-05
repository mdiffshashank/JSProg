/* 567. Permutation in String
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Given two strings s1 and s2, return true if s2 contains a permutation
 * of s1, or false otherwise.In other words, return true if one of s1's
 * permutations is the substring of s2.
 */

const checkInclusion = (s1, s2) => {
  const arr1 = Array.from({ length: 26 }).fill(0);
  const arr2 = Array.from({ length: 26 }).fill(0);

  const s1Length = s1.length;
  const s2Length = s2.length;

  for (let char of s1) {
    arr1[getIndexOf(char)] += 1;
  }

  let left = 0,
    right = 0;

  while (right < s2Length) {
    arr2[getIndexOf(s2[right])] += 1; //increment

    if (right - left + 1 > s1Length) {
      arr2[getIndexOf(s2[left])] -= 1;
      left++;
    }

    if (right - left + 1 === s1Length) {
      if (arr1.join("-") === arr2.join("-")) {
        return true;
      }
    }

    right++;
  }
  return false;
};

function getIndexOf(char) {
  return char.charCodeAt(0) - "a".charCodeAt(0);
}
