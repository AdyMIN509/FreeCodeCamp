// DOM variables
const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return cleaned === cleaned.split("").reverse().join("");
}

button.addEventListener('click', ()=>{
	if (input.value === "") {
		alert("Please input a value")
	} else{
		result.textContent = `${input.value} is ${isPalindrome(input.value) ? "" : "not"} a palindrome`;
	}
})