/* async function hello() {
  return "Hello";
} */

/* const sayHello = async () => {
  return "hello";
};

console.log(sayHello()); */

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

  const promise = Promise.resolve("Congrats! you are certified");

  return promise;
};

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function course() {
 try{
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
 } catch(err){
    console.log(err);
 }
}
course();
