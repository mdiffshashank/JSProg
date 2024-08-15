(async function () {
  const f1 = async () => {
    return 2;
  };

  const f2 = async () => {
    return f1();
  };

  const result = await f2();

  console.log(result);
})();
