/* var createCounter = function (init) {
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
}; */
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product
console.log(price);