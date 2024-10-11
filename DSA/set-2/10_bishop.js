/*
Number of moves required to move a bishop from starting position to ending position

On a 8 X 8 chessboard, if you are given a starting position. 
Find out the number of moves required for the bishop to move to a ending position. 
Return -1 if that position can't be reached.

Input: Bishop's starting position
Output: Return Number of moves. return -1 if the move is not possible.

if start and end are not the same color (one white, one black), then -1.
if start and end are on the same spot, then 0;
if start and end are on the same line ( ), then 1.
else return 2.
*/

function minMove(x1, y1, x2, y2) {
  // if both start and end is not same colored box
  if (isWhite(x1, y1) != isWhite(x2, y2)) return -1;
  // if both are same positions
  else if (x1 == x2 && y1 == y2) return 0;
  // if they are in same line
  else if (Math.abs(x1 - x2) == Math.abs(y1 - y2)) return 1;
  // require a middle step
  else return 2;
}

function isWhite(x, y) {
  return x % 2 == y % 2;
}

console.log(minMove(0, 0, 1, 2)); // Output should be -1 (0,0 is black and 1,2 is white)
console.log(minMove(2, 2, 2, 2)); // Output should be 0 (starting and ending on the same square)
console.log(minMove(2, 0, 0, 2)); // Output should be 1 (diagonal from 2,0 to 0,2)
console.log(minMove(0, 0, 1, 3)); // Output should be 2 (Examples could have positions that require a middle step)
