// Cycle In Array , return length of cycle
/*
Given an integer array of size n. Elements of the array is >= 0. 
Starting from arr[startInd], follow each element to the index it points to. 
Find a cycle and return its length. No cycle is found -> -1.

//TIP: take two pointer slow and fast if they meet cycle exist


*/

function lengthOfCycle(arr, startIndex) {
  let slow = arr[startIndex];
  let fast = arr[arr[startIndex]];
  let count = 1;

  while (slow != fast) {
    if (fast === undefined || fast >= arr.length) {
      console.log(-1);
      return -1;
    }
    slow = arr[slow];
    fast = arr[arr[fast]];
    count++;
  }
  console.log(count);
}

lengthOfCycle([1, 0], 0); // 2
lengthOfCycle([1, 2, 0], 0); // 3
lengthOfCycle([1, 2, 3, 1], 0); // 3
lengthOfCycle([2, 3, 4, 0, 1], 0); // Expected Output: 5
lengthOfCycle([1, 0, 3, 4, 2], 2); // Expected Output: 3

lengthOfCycle([0, 1, 2, 3, 4], 0); // Expected Output: 1
lengthOfCycle([5, 6, 7, 8, 9], 0); // Expected Output: -1

const largeArray = Array.from({ length: 100000 }, (_, index) => index + 1);
largeArray[99999] = 50000; // Creates a large cycle
lengthOfCycle(largeArray, 0); // Expected Output: 50000
