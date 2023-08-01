const shoopingCart = {
  books: 3,
  sunglass: 4,
  keyboard: "logitech",
  mouse: 6,
  pen: 8,
};

const keys = Object.keys(shoopingCart);
const values = Object.values(shoopingCart);
console.log(keys, values);

for (i = 0; i < keys.length; i++) {
  const propertyName = keys[i];
  const propertyValue = shoopingCart[propertyName];
  //   console.log(propertyName, propertyValue);
}

for (let property in shoopingCart) {
  const value = shoopingCart[property];
  console.log(property, value);
}

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
//     return true;
//   } else{
//     return false
//   }
// }
// let love = lovefunc(2, 3);
// console.log(love);
