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
  // console.log(i);
  i++;
}

let i2 = 10;
while (i2 >= 0) {
  // console.log(i2);
  i2--;
}

// let myArray = ["one", "two", "three", "four", "five", "six"];
let i3 = 0;
while (i3 < myArray.length) {
  // console.log(myArray[i3]);
  i3++;
}

// for vs while
// let myPrompt = Number(prompt("Enter a Number:"));
// let myPrompt = parseInt(prompt("Enter a Number:"));
// console.log(typeof myPrompt);

/* while (myPrompt < 10) {
  alert("Please enter a larger number");
  myPrompt = Number(prompt("Enter a Number:"));
}
if (myPrompt >= 10) {
  alert("Congratulations");
} */

// do while loop
let Rakib = "class 9";
let i4 = 100;
console.log(Rakib + i4);
do {
  // console.log(i4);
  i4++;
} while (i4 <= 10); //100

// for each loop
myArray.forEach(function (elem, ind) {
  // console.log(`element:${elem}, Index:${ind}`);
});

// for of loop
for ([i, elem] of myArray.entries()) {
  // if (i === 2) break;
  if (i === 2) continue;
  // console.log(`Index:${i}, Element:${elem}`);
}
let numbers = [1, 2, 3, 4];
for (let number of numbers) {
  console.log(number * 2);
}

// for in loop

let myobj = {
  name: "Siaf",
  age: 20,
  city: "Chattogram",
};

for (property in myobj) {
  // console.log(`property:${property}, value:${myobj[property]}`);
}

// execution time
let num = 1000000;
let newarr = new Array(num);

console.time("for");
for (let i = 0; i < num; i++) {}
console.timeEnd("for");

console.time("while");
while (i < num) {
  i++;
}
console.timeEnd("while");

console.time("forEach");
newarr.forEach((elem) => "");
console.timeEnd("forEach");

console.time("for...of");
for (elem of newarr) {
}
console.timeEnd("for...of");

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

for (let i = 0; i <= 12; i += 2) {
  console.log(i);
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter += 1;
}
console.log(result);

const arr = ["bottle", "pen", "mouse", "Headphones"];

if (arr[1] === "pen") {
  arr.push("paper");
  console.log(arr);
} else {
  console.log("check the array");
}

let func = () => {
  console.log("hello");
};

console.log(typeof func);

for (let i = 0; i <= 20; i++) {
  if (i > 10) {
    continue;
  }
  console.log(i);
}

const arr2 = ["bottle", "pen", "mouse", "Headphones"];

for (let i = 0; i <= (arr2.length - 1); i++) {
  let item = arr2[i];
  if (item === "mouse") {
    // break;
    continue
  }
  console.log(arr2[i]);
}

let number3 = 0;
while (number3 <= 10) {
  console.log(number3);
  number3++
}




