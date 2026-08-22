const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// functions
function getFlags() {
	let out = "";
	out += caseInsensitiveFlag.checked ? "i" : "";
	out += globalFlag.checked ? "g" : "";

	return out;
}

function highligthMatch() {
	const flags = getFlags();
	const pattern = regexPattern.value;
	const text = stringToTest.textContent;
	const regex = new RegExp(pattern, flags);
	const match = text.match(regex);

	if (match) {
		stringToTest.innerHTML = text.replace(regex, m => `<span class="highlight">${m}</span>`);
		testResult.textContent = match.join(", ");
		return;
	}

	testResult.textContent = "no match";
}


// EventListener
testButton.addEventListener('click', highligthMatch);