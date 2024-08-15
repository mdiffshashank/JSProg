/**
 * https://leetcode.com/problems/pascals-triangle/description/
 */

function pascalTriangle(numRows) {
  const pascal = [];

  for (let i = 0; i < numRows; i++) {
    //insert start [1] in pascal row
    const pascalRow = [1];
    pascal.push(pascalRow);

    //calculate for middle
    for (let j = 1; j < i; j++) {
      pascal[i][j] =
        parseInt(pascal[i - 1][j - 1]) + parseInt(pascal[i - 1][j]);
    }

    //add [1] for last index
    pascalRow[i] = 1;
  }

  return pascal;
}

console.log(pascalTriangle(5));
