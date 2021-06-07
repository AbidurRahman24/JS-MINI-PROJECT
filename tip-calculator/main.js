  
document.querySelector('#tip-form').onchange = function () {
	// Selecting Elements
	const bill = Number(document.querySelector('#totalBill').value);
	const serviceCharge = Number(document.querySelector('#serviceCharge').value);
	const tip = document.querySelector('#tipInput').value;
	const tipOutput = document.querySelector('#tipOutput');
	const tipAmount = document.querySelector('#tipAmount');
	const totalBillWithTip = document.querySelector('#totalBillWithTip');
	const results = document.querySelector('#results');

	// Calculation
    const total = bill + serviceCharge
	const tipValue = total * (tip / 100);
	const finalBill = total + tipValue;

	tipAmount.value = tipValue.toFixed(2);
    total.value =
	totalBillWithTip.value = finalBill.toFixed(2);

	// Showing Results
	tipOutput.innerHTML = `${tip}%`;
	results.style.display = 'block';
};