const displayer = (some) => {
  console.log(some);
};

const calculator = (a, b, callback) => {
  const result = a + b;
  if (callback) callback(result);
};

calculator(5, 5, displayer);

console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);

setInterval(() => {
  console.log(2.1);
}, 2000);
console.log(3);
