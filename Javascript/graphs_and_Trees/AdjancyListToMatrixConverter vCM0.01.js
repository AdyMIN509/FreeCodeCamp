function adjacencyListToMatrix(adjList) {
	const n = Object.keys(adjList).length;
	const out = Array.from({length: n}, (_, i) => []).map(i=> new Array(n).fill(0));

	for(const i in adjList) {
		for(const j of adjList[i]) {
			out[i][j] = 1
		}
	}

	for (const r of out) {
		console.log(r);
	}
	return out;
}

const retVal = adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]});

console.log(`Returned value = ${retVal}`);