const statastic = true;

// console.log("task1");

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
    // console.log(value);
  })
  .catch((err) => {
    // console.log(err);
  });

// console.log("task3");

// callback vs promise

const payment = true;
const mark = 80;

const enroll = () => {
  console.log("Enrollment processing");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve();
      } else {
        reject("Enrollment failed");
      }
    }, 2000);
  });
  return promise;
};

const progress = () => {
  console.log("Course in progress");
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (mark >= 80) {
        res();
      } else {
        rej("You don't have sufficient number");
      }
    }, 3000);
  });
  return promise;
};

const getCertificate = () => {
  console.log("Certificate processing!");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congrats! you are certified");
    }, 4000);
  });
  return promise;
};

enroll()
  .then(progress)
  .then(getCertificate)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
