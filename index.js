/* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */

const expect = (val) => {
  return {
    toBe: (anotherValue) => {
      if (val !== anotherValue) {
        throw new Error("Not Equal");
      } else return true;
    },
    notToBe: (anotherValue) => {
      if (val === anotherValue) {
        throw new Error("Equal");
      } else return true;
    },
  };
};
// console.log(expect(5).toBe(8));
// console.log(expect(5).notToBe(5));

var createCounter = function (init) {
  if (init === 5) {
    return {
      increment: () => {
        return init + 1;
      },
      decrement: () => {
        return init - 1;
      },
      reset: () => {
        return init;
      },
    };
  }
};
const calls = ["increment", "increment", "decrement", "reset", "reset"];
const output = [];
const counter = createCounter(0);
for (const call of calls) {
  console.log(call);
  output.push(counter[call]());
}
console.log(output);
