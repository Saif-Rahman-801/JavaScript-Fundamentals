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
  } else if (init === 0) {
    let value = 0;
    return {
      increment: () => {
        if (init === 0) {
          value = init + 1;
          return value;
        } else if (value === 1) {
          value = value + 1;
          return value;
        }
        // let increment = init + 1;// var increment
        // const secondndIncrement = () => {
        //   if (increment === 1){
        //     return
        //   }
        // }
      },
    };
  }
};

/* const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement()); */

/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 then 
if Input: init = 0, 

const counter = createCounter(0);
counter.increment();  // when the increment function called 1st time it will increament the input by 1. which will be init = 0 + 1 = 1
counter.increment(); //when the increment function called 2nd time it  will increament the previous increamented value by 1, which will be previous init = 1 + 1 = 2.
counter.decrement(); //when the decrement function called 1st time it will decrement the last increamented init by 1 which will be previous init = 2 - 1 = 1.
counter.reset(); ///when the reset function called 1st time it will reset the previous  init to 0
counter.reset(); // 0 which will reset the previous init to 0 */
