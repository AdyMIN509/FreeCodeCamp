function fearNotLetter(str) {
	let nextChar = str[0]
	for (const char of str) {
		if (nextChar !== char) {
			return nextChar;
		} else {
			nextChar = String.fromCharCode(nextChar.charCodeAt(0) + 1);
		}
	}

	return undefined;
}


console.log(fearNotLetter("abce"))