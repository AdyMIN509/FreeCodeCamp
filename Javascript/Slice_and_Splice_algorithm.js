function frankenSplice(arr1, arr2, index) {
	if (arr2.length === 0 && arr1.length > 0) {
		return arr1;
	} else if (arr1.length === 0  && arr2.length > 0) {
		return arr2;
	}
	let out  = [];
	let count = 0;
	for(let i=0; i < arr2.length; i++) {
		if (i === index) {
			for (const vals of arr1) {
				out.push(vals);
			}
		}
		out.push(arr2[i])
	}
	return out;
}

frankenSplice([1, 2, 3, 4], [], 0)