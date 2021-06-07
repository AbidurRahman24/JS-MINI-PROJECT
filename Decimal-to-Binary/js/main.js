// selection element

const submit = document.getElementById("submit");
const result = document.getElementById("result");

// decimal to Binary
function decimalToBinary(e) {
  e.preventDefault();

  const resultTest = document.getElementById("resultTest");

  const number = Number(document.getElementById("number").value);
  if (number === "") {
    alert('Please enter a')
  } else if (number < 0) {
    alert('Please enter a')
  } else {
    result.style.visibility = "visible";
  }

  let decimalToBinary = number.toString(2);
  result.innerHTML = decimalToBinary;
}
submit.addEventListener("click", decimalToBinary);
