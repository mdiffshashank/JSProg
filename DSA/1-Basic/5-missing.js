//Find the missing number

/**
 * Given a unsorted array of numbers 1 to 100 excluding one number, find the missing number.
 * The sum of a linear series of n numbers is equal to n*(n+1)/2.
 */

 function missingNumber(arr){
    var n = arr.length+1, 
    sum = 0,
    expectedSum = n* (n+1)/2;
    
    sum = arr.reduce((total, num) => total + num);
    return expectedSum - sum;
  }
  
  const num = missingNumber([5, 2, 6, 1, 3]);
  console.log(num);