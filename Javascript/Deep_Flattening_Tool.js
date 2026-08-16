function steamrollArray(arr){
	let out = [];
	for (const element of arr) {
		if (!Array.isArray(element)){
			out.push(element)
		} else {
			out = [...out, ...steamrollArray(element)]
		}
	}
	return out;
}
console.log(steamrollArray([1, [], [3, [[4]]]]));