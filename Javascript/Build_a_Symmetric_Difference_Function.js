function diffArray(arr1, arr2) {
	let cpr1 = [...arr1].filter((vals) => !arr2.includes(vals));
	let cpr2 = [...arr2].filter((vals) => !arr1.includes(vals));
	let out;
	for(const element of cpr2) {
		cpr1.push(element)
	}

	return cpr1
}