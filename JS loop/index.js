// for loop
for (let i = 0; i <= 10; i -= -1) {
  if (i === 5) break;
  //   console.log(i);
}
for (let i = 9; i > 0; i--) {
  if (i === 2) continue;
  //   console.log(i);
}

let myArray = ["one", "two", "three", "four", "five", "six"];
let length = myArray.length;
for (let i = length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}
