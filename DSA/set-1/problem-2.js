/**
 * 
/* program to merge array of objects with same key and sum the score
const input = [
  { key: 'A', score: 10 },
  { key: 'B', score: 20 },
  { key: 'A', score: 30 },
  { key: 'C', score: 40 },
  { key: 'B', score: 50 },
];

 * A->40 , B ->70 , C -> 40  
 */

function scoreSum(arr) {
  const finalSum = arr.reduce((acc, grade) => {
    const { key, score } = grade;
    acc[key] = (acc[key] || 0) + score;
    return acc; //remmeber to return  accumulator
  }, {});
  return finalSum;
}

const input = [
  { key: "A", score: 10 },
  { key: "B", score: 20 },
  { key: "A", score: 30 },
  { key: "C", score: 40 },
  { key: "B", score: 50 },
];

console.log(scoreSum(input));
