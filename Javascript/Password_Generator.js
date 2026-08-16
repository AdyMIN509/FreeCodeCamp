function generatePassword(passwordLength) {
	const possibleValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
	let count;
	let out;
	let randomIndex;

	count = 0;
	out = "";
	while(count < passwordLength) {
		randomIndex = Math.round(Math.random() * (possibleValues.split("").length - 1))
		out += possibleValues[randomIndex];
		count++;
	}

	return out;
}

const password  = generatePassword(10);
console.log(`Generated password: ${password}`)