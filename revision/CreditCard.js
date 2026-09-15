function isVisaCardNumber(str) {
	const pattern = /^4\d{15}$/

	return pattern.test(str);
}