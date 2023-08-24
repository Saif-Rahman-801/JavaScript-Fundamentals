function sum(a, b, c) {
  console.log(arguments);
  console.log(arguments[6]);
  const args = [...arguments];
  console.log(args);
  const res = a + b + c;
  return res;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
// 
