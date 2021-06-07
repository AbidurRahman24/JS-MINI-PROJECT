// setected element
const submit =document.getElementById('submit')
const result = document.getElementById('result')
const success = document.getElementById('successfulMassage')

const converBinary = (e) =>{
  e.preventDefault();

  const numbers = Number(document.getElementById('number').value)
  if (numbers === '') {
    alert('Please enter a number')
  }
  else if(numbers < 0){
    success.style.display = 'block'
    success.innerText = 'please enter positive number'
  }
  else{
    result.style.visibility = 'visible'
    success.style.display = 'block'
  }

  let binary = numbers.toString(2)
  result.innerText = binary;
}


submit.addEventListener('click', converBinary)