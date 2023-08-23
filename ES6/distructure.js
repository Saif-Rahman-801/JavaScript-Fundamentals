const actor = {
  name: "Tom Cruise",
  age: 60,
  industry: "hollywood",
};
const obj = Object.keys(actor)
console.log(obj);
const { name, age, industry } = actor;
console.log(age, industry);

const arr = [2, 3, 4];
const [first, second] = arr;
console.log(first, second);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ]
const nayikas2 = [...nayikas]

const obj2 = { foo: 1 };
obj2.bar = 2;
console.log(obj2);



