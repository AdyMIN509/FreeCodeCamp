function getIndexToIns (arr, num){
	arr.sort((a,b) => a - b);
	let out = arr.findIndex((vals) => vals >= num);

	if(out === -1) {return arr.length;}
	else {return out}
}

console.log(getIndexToIns([3, 10, 5], 11))
