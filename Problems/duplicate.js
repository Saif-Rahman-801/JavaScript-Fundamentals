const arr = [
  "abul",
  "kabul",
  "babul",
  "jabul",
  "ebul",
  "abul",
  "kabul",
  "babul",
  "jabul",
  "ebul",
];

function removeDuplicate(names) {
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    let Allnames = names[i];
    console.log(Allnames);
    if (newNames.includes(Allnames) === false) {
      newNames.push(Allnames);
    }
  }
  return newNames;
}

console.log(removeDuplicate(arr));;
