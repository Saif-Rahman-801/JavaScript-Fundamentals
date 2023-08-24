const stopWatch = () => {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
};
// console.log(stopWatch()());
let watch1 = stopWatch();
console.log(watch1());
console.log(watch1());

let watch2 = stopWatch();
console.log(watch2());
console.log(watch2());
console.log(watch2());
