function confirmEnding(str1, str2) {
	return str1.slice(-(str2.length)) === str2;
}