function swap(a, b) {
  [b, a] = [a, b];
  return [a, b];
}

console.log(swap(3, 4));
