function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide an array";
  } else {
    let badData = 0;
    for (item of arr) {
      if (typeof item !== "number") {
        return "please provide number value";
      } else {
        if (item < 0) {
          badData++;
        }
      }
    }
    return badData;
  }
}

let arr = [1, 2, 3, -3, -2, -1, -9];
console.log(findingBadData(arr));
