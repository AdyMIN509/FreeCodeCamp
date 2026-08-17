const inputText = document.getElementById("card-bank-num");
const cardCardNumber = document.getElementById("card-nums");

inputText.addEventListener("input", () => {
	const initialValue = "*".repeat(16).split("");   // ← tableau, pas string
	const currVal = inputText.value.split("").filter(e => !isNaN(parseInt(e)));

	currVal.forEach((e, i) => {
		initialValue[i] = e;
	});

	inputText.value = organizeByFour(currVal);
	cardCardNumber.textContent = organizeByFour(initialValue);
});

function organizeByFour(arr) {
	let out = [];
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i]);
		if ((i + 1) % 4 === 0) {
			out.push(temp);
			temp = [];
		}
	}
	if (temp.length > 0) out.push(temp);   // ← garde le dernier groupe incomplet
	return out.map(e => e.join("")).join(" ");
}