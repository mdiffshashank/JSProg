/**
 * find largest substring where number of unique charactor is K
 *https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

 * INPUT : abaccab ,k=2
 * OUTPUT : 4 
 */

function longestOfk(str, k) {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();

  while (right < str.length) {
    // Add the current character to the map
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    // Check if the number of unique characters exceeds k
    while (map.size > k) {
      const count = map.get(str[left]);
      if (count > 1) {
        map.set(str[left], count - 1);
      } else {
        map.delete(str[left]);
      }
      left++;
    }

    // Update max if the current window is valid
    if (map.size === k) {
      max = Math.max(max, right - left + 1);
    }

    right++;
  }

  return max;
}

// console.log(longestOfk("abaccab", 2));
console.log(longestOfk("aabacebebebe", 2)); //7
