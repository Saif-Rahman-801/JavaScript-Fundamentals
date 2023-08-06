const namer = "Saif Rahman";
const dummy = "Nothing";
// console.log(namer.length);

if (namer.toLowerCase() === dummy.toLowerCase()) {
  console.log("true");
}

const doesExist = namer.includes("Rahman");
// console.log(doesExist);
let song = "Tumi bondhu Kala Pakhi, ami jeno ki?";
const splited = song.split(" ");
// const splited = song.split("");
// const splited = song.split(",");

// console.log(song, splited);

const sliced = song.slice(1, 7);
// console.log(sliced);

/* let num = 30;
let num1 = 20;

const gap = Math.abs(num1 - num);
console.log(gap);

if (gap <= 5) {
  console.log("You guys can date");
} else {
  console.log("you guys stay apart");
} */

const number = 3.1416;
const roundedU = Math.ceil(number);
const roundedD = Math.floor(number);
// console.log(roundedU);
// console.log(roundedD);

for (let i = 0; i < 10; i++) {
  let random = Math.round(Math.random() * 6);
  // console.log(random);
}

const newArr = [12, 13, 14, 15, 16];

const partial = newArr.splice(2, 3);
const partialPush = newArr.splice(2, 3, 17, 18, 19);
console.log(partial);
console.log(newArr);