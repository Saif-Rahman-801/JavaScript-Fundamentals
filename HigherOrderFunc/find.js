const arr = [3, 4, 5, 6, 7];
const result = arr.find((n) => n > 5)//returns only single value(doesn't return an array) that fulfills the condition; if multiple value fulfills it find method will only return the 1st one.
console.log(result);