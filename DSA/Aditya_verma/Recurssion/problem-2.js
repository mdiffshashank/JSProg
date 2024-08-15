/***
 * Problem-2 : Print number from n to 1
 * Approach : Hypothesis , Induction, Base condition
 *
 */

function print(n) {
  if (n < 1) return;
  if (n === 1) {
    console.log(n);
    return;
  }
  console.log(n); // just change one line in induction andresult will be changed
  print(n - 1);
}
print(18);
