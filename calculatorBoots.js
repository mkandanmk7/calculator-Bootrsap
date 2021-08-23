let ans = document.querySelector("#result");

function conCat(keys) {
  ans.value += keys;
  console.log(ans.value);
}

function evaluate() {
  try {
    ans.value = eval(ans.value);
  } catch (error) {
    alert("Enter Valid Input");
  }
}
function clear() {
  ans.value = "";
}

function backSpace() {
  ans.value = ans.value.slice(0, -1);
}
