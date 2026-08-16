function pyramid(str, num, vertex) {
	let count;
	let out = "\n";
	if (vertex) {
		count = num;
		while(count > 0) {
			let space = num - count;
			let char = count * 2 - 1;
			out = out.concat(" ".repeat(space) + str.repeat(char) + "\n");
			count--;
		}
	} else {
		count = 1;
		while(count <= num) {
			let space = num - count;
			let char = count * 2 - 1;
			out = out.concat(" ".repeat(space) + str.repeat(char) + "\n");
			count++;
		}
	}
	return out;
}

pyramid("o",40, false);