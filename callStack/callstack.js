const chicken = () => {
  return egg();
};
const egg = () => {
  return chicken();
};
//console.log(chicken() + "Who came first?"); -> Maximum call stack size exceeded