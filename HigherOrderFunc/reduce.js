const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.reduce((preV, currV) => {
  return preV + currV;
}, 0);
console.log(result);
