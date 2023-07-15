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
