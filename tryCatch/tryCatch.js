
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("input").value;

  try {
    if (isNaN(parseInt(input))) {
        throw "please enter number value"
    }
    console.log(bBaria);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("All done");
  }
  console.log(1111);
});
