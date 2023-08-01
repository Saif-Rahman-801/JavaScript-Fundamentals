const displayer = (some) => {
  // console.log(some);
};

const calculator = (a, b, callback) => {
  const result = a + b;
  if (callback) callback(result);
};

calculator(5, 5, displayer);

// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);

// setInterval(() => {
//   console.log(2.1);
// }, 2000);
// console.log(3);

const payment = true;
const enroll = (callback) => {
  console.log("Enrollment processing");
  setTimeout(() => {
    if (payment) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 2000);
};

const mark = 70;
const progress = (callback) => {
  console.log("Course in progress");
  setTimeout(() => {
    if (mark >= 80) {
      callback();
    } else {
      console.log("you don't have sufficient number");
    }
  }, 3000);
};

const getCertificate = () => {
  console.log("Certificate processing!");
  setTimeout(() => {
    console.log("Congrats! you are certified");
  }, 4000);
};

enroll(() => progress(getCertificate));

