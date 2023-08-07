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

/* console.log(isInteger(2.5));
console.log(isInteger(2));
console.log(isInteger("hello")); */

function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "please provide string value";
  } else {
    /* if (fileName.endsWith(".js")) {
      return true;
    } else {
      return false;
    } */
    return fileName.endsWith(".js");
  }
}

function isJavaScriptFile2(fileName) {
  if (typeof fileName !== "string") {
    return "please provide string value";
  } else {
    const arr = fileName.split("."); // ['index', 'js'......]
    const lastEl = arr.pop();
    return lastEl.toLowerCase() === "js";
  }
}

// console.log(isJavaScriptFile("index.js"));
// console.log(isJavaScriptFile2("index.js.i"));

function mindGame(pNum) {
  /* if (typeof pNum !== ("number" || pNum <= 0)) {
    return "please provide positive number value";
  } else {
    const calculationOne = (pNum * 3 + 10) / 2 - 5;
    return calculationOne;
  } */
  if (typeof pNum !== "number") {
    return "please provide a number";
  } else if (pNum <= 0) {
    return "please provide a positive number";
  } else {
    const calculationOne = (pNum * 3 + 10) / 2 - 5;
    return calculationOne;
  }
}
console.log(mindGame(5));
