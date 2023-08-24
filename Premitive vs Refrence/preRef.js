// Refrence type data
let student1 = { name: "Jalil", partner: "Barsa" };
let student2 = { name: "Raj", partner: "Pori" };
function couple(s1, s2) {
  s1.name = "Ananta";
  s2.name = "Shariful";
}
couple(student1, student2);
// console.log(student1, student2);

// Premitive type data
let num1 = 10,
  num2 = 20;
function number(a, b) {
  a = 4;
  return a * b;
}
number(num1, num2);
console.log(num1);
