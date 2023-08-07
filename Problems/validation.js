function add(a, b) {
  if (typeof a === isNaN || typeof b === isNaN) {
    return "please convert it to a number";
  }
  return a + b;
}
console.log(add(2, "2"));

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
console.log(sum);
}