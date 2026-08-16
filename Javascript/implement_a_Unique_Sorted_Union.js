function uniteUnique(arr1, arr2, ...restArr) {
	let out = [];
	for(const vals of arr1) {
		if(!out.includes(vals)) {
			out.push(vals);
		}
	}
	for(const vals of arr2) {
		if(!out.includes(vals)) {
			out.push(vals);
		}
	}
	if (restArr.length > 0) {
		for(const vals of restArr) {
			for(const num of vals) {
				if(!out.includes(num)) {
					out.push(num);
				}
			}
		}
	}
	return out;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));