function capitalizeEach(sentence) {
  const capitalizedStr = sentence.split(" ").map((word) => {
    return "" + word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedStr.join(" ");
}

const result = capitalizeEach("The quick brown fox jumped over the lazy dog");
console.log(result);
