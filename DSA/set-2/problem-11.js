/**
 * find the best average
 * Input:  
 *  [ 
 *      [ "Bobby", "87" ],
 *      [ "Charles", "100" ],
 *      [ "Eric", "64" ],
 *      [ "Charles", "22" ]
 *  ]
   Output: 87
   Explanation: Since Bobby's average is greater than Charles's, Eric's average.
 */

//aproach-1
function bestAvgGrades(grades = []) {
  const candidate_mark_map = new Map(); //extra space O(n)

  for (let i = 0; i < grades.length; i++) {
    const [candidate, marks] = grades[i];

    if (candidate_mark_map.has(candidate)) {
      //append the marks array
      candidate_mark_map.set(candidate, [
        ...candidate_mark_map.get(candidate),
        marks,
      ]);
    } else {
      //set candidate and marks
      candidate_mark_map.set(candidate, [marks]);
    }
  }
  //   console.log(candidate_mark_map);
  let bestAvg = -Infinity; //we need to find max so assign minimum value

  // get average and replace best average
  candidate_mark_map.forEach((marks) => {
    const sum = marks.reduce((sum, value) => sum + parseInt(value), 0);
    const avg = sum / marks.length;
    bestAvg = Math.max(avg, bestAvg);
  });
  return bestAvg;
}

const scores = [
  ["Bobby", "87"],
  ["Charles", "100"],
  ["Eric", "64"],
  ["Charles", "22"],
];

const result = bestAvgGrades(scores);
console.log(result);

/**
 * Tip : create a map <candidate,marks[]>, get avg for each candidate and findout best average.
 */
