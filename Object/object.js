let person = "address";
let personTwo = "sayHello";
const singlePerson = {
  name: "Saifur Rahman Sakib",
  address: "Chattogram",
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
};
// console.log(singlePerson["name"]);
// console.log(singlePerson.name);
// singlePerson.sayHello();
// console.log(singlePerson[person]);
// console.log(singlePerson[personTwo]());

let obj = {
  name: "Saifur Rahman Sakib",
  skills: {
    frontend: ["HTML", "CSS", "JS", "REACT"],
    backend: ["NODE JS", "EXPRESS JS", "MONGO DB"],
  },
  address: {
    city: "Chittagong",
    country: "Bangladesh",
  },
  calc: (a, b) => {
    return a + b;
  },
};

let skill = obj.skills.backend[0];
console.log(skill);
console.log(obj.calc(2, 3));
console.log(obj.skills["backend"]);
console.log(obj["skills"].frontend);

obj.interest = ["JavaScript", "React", "Node JS", "Mongo DB"];
// console.log(obj);
console.log(obj.interest);

const objTwo = {
  name: "Saifur Rahman Sakib",
  skills: {
    frontend: ["HTML", "CSS", "JS", "REACT"],
    backend: ["NODE JS", "EXPRESS JS", "MONGO DB"],
  },
  address: {
    city: "Chittagong",
    country: "Bangladesh",
  },
  calc: (a, b) => {
    return a + b;
  },
};

console.log(obj == objTwo);
console.log({} == {});

let consoler = {
  loger: (a) => {
      return a;
  }
}

const ans = consoler.loger("Hi");

console.log(ans);