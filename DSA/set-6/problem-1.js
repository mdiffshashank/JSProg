function getAdjucent(words) {
  const result = [];

  for (let word of words) {
    let count = 0;
    let flag = true;

    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1] && flag) {
        count++;
        flag = false;
      } else {
        flag = true;
      }
    }

    result.push(count);
  }
  return result;
}

console.log(
  getAdjucent(["add", "broook", "break", "khgyykahartjjuklpi", "brooook"])
);
/**asked in agoda */
