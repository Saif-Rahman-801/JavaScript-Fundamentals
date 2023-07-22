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

let jog = (a, b) => {
  return a + b;
};

let biyog = (c, d) => {
  return c - d;
};

let gun = (e, f) => {
  return e * f;
};

const calc = [jog, biyog, gun];

for (let f of calc) {
  let result = f(50, 10);
  console.log(result);
}

const calculator = {
  add: jog,
  subtract: biyog,
  multiply: gun,
};

let calculatorResult = calculator.add(5, 5);
console.log(calculatorResult);

// Higher Order function
const higherOrder = (func) => {
  func();
  func();
};

let hi = () => {
  console.log("Hi you are Welcome");
};

let bye = () => {
  console.log("Bye");
};

// higherOrder(hi);

const repeatNum = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};

repeatNum(hi, 2);

const randomPick = (funcOne, funcTwo) => {
  let randomNum = Math.random();
  console.log(randomNum);
  if (randomNum > 0.5) {
    funcOne();
  } else {
    funcTwo();
  }
};
randomPick(hi, bye);

function multiplyer(multiply) {
  return function (x) {
    return x * multiply;
  };
}

const double = multiplyer(2); //const double = function (x){return x * 2}
console.log(double(2));

const triple = multiplyer(3);
console.log(triple(4));

// callback function

function greetings() {
  console.log(`Hello welcome, I am running inside another function`);
}

function HigherOrder(callback) {
  callback();
}

HigherOrder(greetings);
