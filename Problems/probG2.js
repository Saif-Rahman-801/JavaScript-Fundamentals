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
// console.log(findingBadData(arr));

function gemsToDiamond(x, y, z) {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    return "please provide a number value";
  } else if (x < 0 || y < 0 || z < 0) {
    return "please provide a positive number value";
  } else {
    const gemsOneValue = 21;
    const gemsTwoValue = 32;
    const gemsThreeValue = 43;
    const friendOnetotalGem = gemsOneValue * x;
    const friendTwototalGem = gemsTwoValue * y;
    const friendThreetotalGem = gemsThreeValue * z;
    let total = friendOnetotalGem + friendTwototalGem + friendThreetotalGem;
    let twoTimes = 1000 * 2;
    if (total > twoTimes) {
      return total - twoTimes;
    } else {
      return total;
    }
  }
}
// console.log(gemsToDiamond(100, 5, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(1, 1, 1));

function printDetails(obj) {
  if (typeof obj !== "object") {
    return "please provide a object";
  } else {
    const name = obj.name || "nai";
    const age = obj.age || "nai";
    const mail = obj.mail || "nai";
    return "amar nam " + name + " amar boyosh " + age + " amar mail " + mail;
  }
}
const obj = {
  name: "Saif Rahman",
  age: 20,
};
console.log(printDetails(obj));
