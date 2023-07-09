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
let myPrompt = Number(prompt("Enter a Number:"));
// let myPrompt = parseInt(prompt("Enter a Number:"));
// console.log(typeof myPrompt);

while (myPrompt < 10) {
  alert("Please enter a larger number");
  myPrompt = Number(prompt("Enter a Number:"));
}
if (myPrompt >= 10) {
  alert("Congratulations");
}

// do while loop

let i4 = 100;
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
let numbers = [1, 2, 3, 4]
for(let number of numbers){
  console.log(number*2);
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
for (elem of newarr){}
console.timeEnd("for...of");
