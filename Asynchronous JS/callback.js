const displayer = (some) => {
  console.log(some);
};

const calculator = (a, b, callback) => {
  const result = a + b;
  if (callback) callback(result);
};

calculator(5, 5, displayer);


