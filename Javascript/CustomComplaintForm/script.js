// DOM variables
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintGroup = Array.from(document.querySelectorAll("#complaints-group input[type='checkbox']"));
const complaintDescription = document.getElementById("complaint-description");
const solutionGroup = Array.from(document.querySelectorAll("#solutions-group input[type='radio']"));
const solutionDescription = document.getElementById("solution-description");
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("form");
const messageBox = document.getElementById("message-box");


// functions

function validateForm() {
	let field = {
		"full-name": false,
		"email": false,
		"order-no": false,
		"product-code": false,
		"quantity": false,
		"complaints-group": false,
		"complaint-description": false,
		"solutions-group": false,
		"solution-description": false
	}
	field["full-name"] = fullName.value !== "";
	field["email"] = (new RegExp("^.+@.+\\.[a-zA-Z]+$")).test(email.value);
	field["order-no"] = (new RegExp("^2024\\d{6}$")).test(orderNo.value);
	field["product-code"] = (new RegExp("^[a-zA-Z]{2}\\d{2}-[a-zA-Z]\\d{3}-[a-zA-Z]{2}\\d$")).test(productCode.value)
	field["quantity"] = (new RegExp("^[1-9][0-9]*$")).test(quantity.value)
	field["complaints-group"] =  complaintGroup.filter(e=> e.checked).length > 0;
	field["complaint-description"] = complaintGroup[complaintGroup.length - 1].checked ? complaintDescription.value.length >= 20 : true;
	field["solutions-group"] = solutionGroup.filter(e=> e.checked).length === 1;
	field["solution-description"] = solutionGroup[solutionGroup.length - 1].checked ? solutionDescription.value.length >= 20 : true;

	return field;
}

function isValid(obj) {
	for (const e in obj) if(!obj[e]) return false;
	return true;
}

function colorInvalidRed() {
	for(const e in validateResult) {
		const currDoc = document.getElementById(e);
		currDoc.addEventListener('change', event=> {
			const validateFormResult = validateForm();
			currDoc.style.borderColor = validateFormResult[e] ? "green" : "red";
		})
	}
}

// EventListener
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const valid = validateForm();
	if (isValid(valid)) {
		messageBox.textContent = "Your form have been submitted!"
		form.submit();
	} else {
		messageBox.textContent = "Please give the correct the value to each field!"
		for(const e in valid) {
			const currDoc = document.getElementById(e);
				currDoc.style.borderColor = valid[e] ? "green" : "red";
		}
	}
});

const validateResult = validateForm();

colorInvalidRed();

