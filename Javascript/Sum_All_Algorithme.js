function sumAll(arr) {
	let start = min(arr);	
	let end = max(arr);

	return (start + end) * (end-start+1) / 2
}

function min(arr) {
	let minVals = Number.MAX_VALUE;
	for(const vals of arr) {
		minVals = Math.min(minVals,vals);
	}

	return minVals;
}
function max(arr) {
	let maxVals = Number.MIN_VALUE;
	for(const vals of arr) {
		maxVals = Math.max(maxVals,vals);
	}

	return maxVals;
}