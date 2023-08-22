function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "provide a positive number value";
  } else {
    let results = Math.pow(number, 3);
    return results;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a string value";
  } else {
    if (string1.includes(string2)) {
      return true;
    }
    return false;
  }
}

function sortMaker(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length > 2 ||
    arr.length === 0 ||
    arr.length < 2
  ) {
    return "please provide a right array";
  } else {
    for (item of arr) {
      if (typeof item !== "number") return "please provide number elements";
    }
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    } else if (arr[0] > arr[1]) {
      return [arr[0], arr[1]];
    } else if (arr[1] > arr[0]) {
      return [arr[1], arr[0]];
    } else if (arr[0] === arr[1]) {
      return "equal";
    }
  }
}

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please provide an object";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    return street + "," + house + "," + society;
  }
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please include elements in the array";
  } else if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
    return "please provide array and number type value";
  } else {
    let sum = 0;
    for (i of changeArray) {
      sum = sum + i;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
