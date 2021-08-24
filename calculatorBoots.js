let ans = document.querySelector("#result");

function conCat(keys) {
  ans.value += keys; //concat the two numbers
  console.log(ans.value);
}

function result() {
  if (ans.value == "") {
    confirm("Enter Number First...!");
    ans.value = 0; //reseting values
  }
  try {
    ans.value = eval(ans.value); //arithmatic operations:
  } catch (err) {
    alert("Enter Valid Input");
    ans.value = 0;
  }
}
function del() {
  console.log("clear");
  ans.value = 0;
}

function backSpace() {
  console.log("backSpace");
  ans.value = ans.value.slice(0, -1);
}
