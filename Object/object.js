let person = "address";
let personTwo = "sayHello";
const singlePerson = {
  name: "Saifur Rahman Sakib",
  address: "Chattogram",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};

console.log(singlePerson.name);
singlePerson.sayHello();
console.log(singlePerson[person]);
console.log(singlePerson[personTwo]());
