function longest(str) {
  return str.split(" ").reduce((longest, s) => {
    return s.length > longest.length ? s : longest;
  }, "");
}

console.log(longest("hello my name is shashank"));
