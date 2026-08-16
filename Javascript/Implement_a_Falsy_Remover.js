function bouncer(arr) {
	let falsyValue = [false, null, 0, "", undefined, NaN];
	let out = [];
	for (const arg of arr) {
		if(!falsyValue.includes(arg)) {
			out.push(arg);
		}
	}
	arr = out;
	return arr;
}

console.log(bouncer([7, "ate", "", false, 9]))