function isPalindrom(str){
    let left = 0
    let right = str.length-1;

    while(left<=right){
        if (str[left] == str[right]){
            left++;
            right--;
            
        }else{
            return false;
        }
    }
    return true;
}

const result = isPalindrom("123456654321");

console.log(result);

/**
 * Take two pointers left =start and right = end of array, keep on incrementing start and 
 * reduce end and if both are same continue.  else return false
 */

//approach-2
// var isPalindrome = function(s) {
//     const a=  s.toLowerCase().split("").filter(Number); 
//     return a.join("") === a.reverse().join("")
// };

// const result = isPalindrome("race a car")