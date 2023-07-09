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
  // console.log(myArray[i]);
}

// While loop

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let i2 = 10;
while (i2 >= 0) {
  console.log(i);
  i2--;
}

// let myArray = ["one", "two", "three", "four", "five", "six"];
let i3 = 0;
while (i3 < myArray.length) {
  console.log(myArray[i3]);
  i3++;
}
