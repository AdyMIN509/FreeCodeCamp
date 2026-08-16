function smallestCommons(arr){
	let out = 1;
	let min = arr.sort((a,b) => a - b)[0];
	let max = arr.sort((a,b) => a - b)[1];
	let divs = [];
	for (let i = min; i <= max; i++) {divs.push(i)}
	let count = 1;
	function isDividedByAll(vals) {
		return ;
	}

	while(!divs.every(element => count % element === 0)) {count++}
	return count
}

console.log(smallestCommons([10, 1]))