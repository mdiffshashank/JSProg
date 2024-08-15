/****
 *  Group Anagram problem
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 *
 *
 */

function getIndex(char) {
  return char.charCodeAt(0) - "a".charCodeAt(0); // remember charCodeAt
}

//aray passed as a argument
function groupAnagram(strs) {
  const map = new Map(); //{k,array<string>}
  const result = [];

  //iterate array of strings
  for (let str of strs) {
    //create an array of 26 length (a-z) and fill with zero
    const count = Array.from({ length: 26 }).fill(0); //[0,0,0,0,....26 times]

    //iterate string
    for (let c of str) {
      const index = getIndex(c); //get index of char
      count[index] += 1; //increase value by +1
    }
    const key = count.join("-"); //array to string

    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  map.forEach((v) => result.push(v));

  return result;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagram(strs);
console.log(result);
