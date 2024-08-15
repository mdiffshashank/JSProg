/**
 * Problem-3
 * Count occurances of  anagram
 *
 * INPUT : aabaacbbaaabaa , baaa
 * OUTPPUT: 6
 * [aaba,abaa,baaa,aaab,aaba,abaa] ->6
 */

function countOccurance(str, k) {
  let count = 0;
  let left = 0,
    right = 0;

  const requiredWindow = k.length;
  const map1 = {};

  for (let i = 0; i < k.length; i++) {
    map1[k[i]] = (map1[k] || 1) + 1;
  }
  //   console.log(map1);

  const map2 = {};

  while (right < str.length) {
    map2[str[right]] = (map2[str[right]] || 1) + 1;
    if (right - left + 1 === requiredWindow) {
      console.log(
        `left-> ${left}, right-> ${right}`,
        str.slice(left, right + 1)
      );

      map2[str[left]] = map2[str[left]] - 1;
      left++;
    }
    right++;
  }

  return count;
}

console.log(countOccurance("aabaabaa", "abaa"));
