function repeatStringNumTimes(str, num) {
	let out = "";
	let count = num;
	while (count > 0) {
		out += str;
		--count;
	}
	return out;
}