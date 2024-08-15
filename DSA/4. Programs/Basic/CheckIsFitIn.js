const CheckIsFitIn = (newSlab) => {
  const slabs = [
    {
      lowerLimit: 10,
      upperLimit: 15
    },
    {
      lowerLimit: 7,
      upperLimit: 9
    },
    {
      lowerLimit: 3,
      upperLimit: 4
    },
    {
      lowerLimit: 20,
      upperLimit: 24
    },
    {
      lowerLimit: 28,
      upperLimit: 30
    }
  ];

  return slabs.every(
    (slab) =>
    { const a = ( slab.lowerLimit > newSlab.upperLimit) ||
     ( slab.upperLimit < newSlab.lowerLimit)
        return a;
    }
  );
};

console.log(CheckIsFitIn({ lowerLimit: 10, upperLimit: 15 })); //false
console.log(CheckIsFitIn({ lowerLimit: 16, upperLimit: 19 })); //true
console.log(CheckIsFitIn({ lowerLimit: 1, upperLimit: 2 })); //true
console.log(CheckIsFitIn({ lowerLimit: 23, upperLimit: 27 })); //false
console.log(CheckIsFitIn({ lowerLimit: 14, upperLimit: 18 })); //false
console.log(CheckIsFitIn({ lowerLimit: 25, upperLimit: 27 })); //true
