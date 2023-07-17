function sayHello() {
  console.log("Hello");
}
sayHello();

const sayHi = () => {
  console.log("hi");
};
sayHi();

function someNum(num1, num2) {
  console.log(num1 + num2);
}
someNum(50, 50);
someNum(30, 30);

function helloUser(user = "Jhon Doe") {
  // if(user === undefined){
  //   user = "Jhon Doe"
  // }
  console.log(`hello ${user}`);
}
helloUser();

const numbers = (num1, num2) => {
  return num1 + num2;
};
const result = numbers(10, 10);
console.log(result);

let work = function (a, b) {
  console.log(a + b);
};
work(2, 4);

const adder = (num1, num2) => num1 + num2;

let result1 = adder(10, 20);
let result2 = adder(11, 21);
console.log(result1, result2);
