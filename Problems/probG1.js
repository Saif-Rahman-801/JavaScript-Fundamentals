// validate the input
function isInteger(num1) {
  if (typeof num1 !== "number") {
    return "please provide number value";
  } else {
    /*   if (num1 === parseInt(num1)) {
      return true;
    } */
    if (num1 % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isInteger(2.5));
console.log(isInteger(2));
console.log(isInteger("hello"));
