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
    const arr = fileName.split(".");// ['index', 'js'......]
    const lastEl = arr.pop();
    return lastEl.toLowerCase() === "js";
  }
}

// console.log(isJavaScriptFile("index.js"));
console.log(isJavaScriptFile2("index.js.i"));
