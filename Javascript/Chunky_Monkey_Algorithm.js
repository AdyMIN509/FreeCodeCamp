const chunkArrayInGroups = (arr, num) => {
	let out = [];
	let temp = []; 
	for (let i = 0; i < arr.length; i++) {
		if (i % num === 0 && i !== 0) {
			out.push(temp);
			temp = [arr[i]];
		} else {
			temp.push(arr[i]);
		}
	}
	out.push(temp);
	return out;
}
