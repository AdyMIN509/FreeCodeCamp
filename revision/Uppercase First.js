function isUppercaseFirst(str) {
	const pattern = /^[A-Z]/;
	return pattern.test(str);
}

const phrase1 = "check";
const phrase2 = "Check";
const phrase3 = "Fuck youuu!";
const phrase4 = "fuck youuu!";

console.log(`${phrase1}: ${isUppercaseFirst(phrase1)}`);
console.log(`${phrase2}: ${isUppercaseFirst(phrase2)}`);
console.log(`${phrase3}: ${isUppercaseFirst(phrase3)}`);
console.log(`${phrase4}: ${isUppercaseFirst(phrase4)}`);