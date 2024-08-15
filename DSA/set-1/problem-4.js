/**
 * Return start and end index of longest uniform substring
 * Ip: "aabbbbbbaccccccc"
 * Op: [9,15]
 *
 * TIP : create pointer for maxStart, maxEnd, MaxLength, currentStart
 */

function longestUniformSubstring(s) {
  if (s.length === 0) return [-1, -1];

  let maxStart = 0; //start index of max Length
  let maxEnd = 0; //end index of max length
  let maxLength = 1; // remember to initialize maxLength =1

  let currentStart = 0;

  //TIP : start with 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[currentStart]) {
      currentStart = i; //check new
    }

    if (i - currentStart + 1 > maxLength) {
      // remmember the length is (i - currentStart + 1)
      maxLength = i - currentStart + 1; //swap
      maxStart = currentStart; // swap
      maxEnd = i; //swap
    }
  }

  return [maxStart, maxEnd];
}

// Example usage
const input = "aabbbbbbaccccccc";
console.log(longestUniformSubstring(input)); // Output: [9, 15]
