const permutations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];

  const rest = elements.slice(1);

  const permsWithoutFirst = permutations(rest); //hoping it will return array of permutations

  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    //perm is an array
    for (let i = 0; i < perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPermutations.push(permWithFirst);
    }
  });
  
  return allPermutations;
};

const result = permutations(["a"]);
console.log(result);
// console.log(permutations(["a", "b", "c"]));
