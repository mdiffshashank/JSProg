/**
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/
 *
 * There are n friends that are playing a game. The friends are sitting in a circle
 * and are numbered from 1 to n in clockwise order. More formally, moving clockwise
 * from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving
 * clockwise from the nth friend brings you to the 1st friend.
 */

// TIP: splice on perticular index find the index
function findTheWinner(n, k) {
  //create an array
  let friends = [];
  for (let i = 1; i <= n; i++) {
    friends.push(i);
  }

  let index = 0;

  while (friends.length > 1) {
    index = (index + k - 1) % friends.length; //self count thats why doing -1

    friends.splice(index, 1);
  }

  return friends[0];
}

/**
 * The formula (index + k - 1) % friends.length is used to determine the next index to
 * remove from the list. Here's why:
 * Index Adjustment: Since k is the step count and indexing in arrays starts
 * from 0, we subtract 1 to adjust for 0-based indexing.
 * Circular Nature: The modulo operation (%) ensures that the index wraps around when it
 * reaches the end of the array, simulating the circular nature of the game.
 */

// Example usage:
const n = 5; // Number of friends
const k = 2; // Step count
console.log(findTheWinner(n, k)); // Output: 3

//Approach 2
/**
 * function findTheWinner(n, k) {
    let winner = 0; // Initial position is 0 (1st person in 0-based index)
    for (let i = 1; i <= n; i++) {
        winner = (winner + k) % i;
    }
    return winner + 1; // Convert back to 1-based index
}

// Example usage:
const n = 5; // Number of friends
const k = 2; // Step count
console.log(findTheWinner(n, k)); // Output: 3
 */
