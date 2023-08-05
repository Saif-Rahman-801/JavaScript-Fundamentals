const inchToFeet = (inch) => {
  return (inFeet = inch / 12);
};
// console.log(inchToFeet(24));

const arr = [12, 13, 14, 15, 16];

const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
    // console.log(element, sum);
  }
  return sum;
};

const oddNumberArr = (array) => {
  let arr2 = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 !== 0) {
      console.log(element);
      arr2.push(element);
    }
  }
  return arr2;
};
console.log(oddNumberArr(arr));
// console.log(sumOfArray(arr));
