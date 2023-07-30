// set a value to an existing index
let arr = [10, 20, 30, 40];
arr[2] = 100;
// console.log(arr);

// find a index of a value;

const index = arr.indexOf(30);
// console.log(index);

/* adding and removing array element in the last index */
arr.push(45, 46, 47);
arr.push([45, 46, 47]);
let obj = {
  name: "Array",
  id: Date.now(),
};
arr.push(obj);
arr.push(50);
console.log(arr);

arr.pop();
console.log(arr);

let objM = arr.pop();
console.log(objM);

// Adding a value in the begining of an Array
let newElement = 0;
arr.unshift(newElement);
console.log(arr);

// Removing the 1st element of an array
arr.shift();
let shifted = arr.shift();
console.log(arr);
console.log(shifted);
