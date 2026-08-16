const inputText = document.getElementById("text-input");
const charCountOut =  document.getElementById("char-count");
const maxChar = 50;


inputText.addEventListener('input', () => {
	let currCount = inputText.value.length;
	if (currCount < maxChar) {
		charCountOut.textContent = `Character Count: ${currCount}/${maxChar}`;
		charCountOut.style.color = "black";
		inputText.style.color= "black";
		inputText.style.borderColor="lightgray"
	} else {
		charCountOut.textContent = `Character Count: ${currCount}/${maxChar}`;
		charCountOut.style.color = "red";
		inputText.style.color= "red";
		inputText.style.borderColor="red"
		inputText.value = inputText.value.split("").slice(0, maxChar).join("");
	}
	console.log(currCount)
})
