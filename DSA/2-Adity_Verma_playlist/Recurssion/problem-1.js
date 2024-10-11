/***
 * Problem-1 : Print number from 1 to n
 * Approach : Hypothesis , Induction, Base condition
 *
 */

function print(n) {
  if (n < 1) return;
  if (n === 1) {
    console.log(n);
    return;
  }
  // console.log(n); //print in reverese order
  print(n - 1);
  console.log(n);
}
print(18);
