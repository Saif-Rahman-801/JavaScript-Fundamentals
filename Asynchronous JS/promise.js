const statastic = true;

console.log("task1");

// promise definition
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statastic) {
      resolve("task2");
    } else {
      reject("failed");
    }
  }, 2000);
});
// promise call
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("task3");
