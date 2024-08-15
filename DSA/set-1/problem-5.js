/**
 * Write generator function to get prime numbers one after other
 * from n to 1 and write test case to validate.
 */

function* getPrimeNumbers(n) {
  for (let i = n; i >= 2; i--) {
    if (isPrime(i)) {
      yield i;
    }
  }
}

function isPrime(num) {
  let flag = true;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

const generator = getPrimeNumbers(100);
// console.log(generator.next());

for (let num of generator) {
  console.log(num);
}
