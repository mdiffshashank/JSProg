
// 1. With built-in functions

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello"));

/* 
2. With a for loop

function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

*/

/* 
3. With recursion

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

*/

/**
 * 
 *4. Two pointer approach strings are immutable so it won't work.
  it work when we need to reverse an array
 */

function reverseString(str){
  let newStr = str;
  let start = 0; //pointer 1
  let end = str.length-1; //pointer 2
  let temp;
  while(start<end){
    temp = newStr[start];
    newStr[start] = newStr[end];
    newStr[end]=temp;
    start++
    end--
  }
  return newStr;
}
console.log(reverseString([1,2,3,4]));