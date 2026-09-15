const INF = Infinity;
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];

function dijkstra(matrix, startNode, targetNode) {
	const n = matrix.length;
	const paths = Array.from({length: n}, (_,i)=>[i]);
	const distances = new Array(n).fill(INF);
	distances[startNode] = 0;
	const visited = new Array(n).fill(false);

	for (let i = 0; i < n; i++) {
		let minDistance = INF;
		let current = -1;

		for (let nodeNo = 0; nodeNo < n; nodeNo++) {
			if(!visited[nodeNo] && distances[nodeNo] < minDistance) {
				minDistance = distances[nodeNo];
				current = nodeNo;
			}
		}

		if(current === -1) {
			break;
		}

		visited[current] = true;

		for(let nodeNo = 0; nodeNo < n; nodeNo++) {
			let distance = matrix[current][nodeNo];
			if(!visited[nodeNo] && distance !== INF) {
				let newDistance = distance + distances[current];
				if(newDistance < distances[nodeNo]) {
					distances[nodeNo] = newDistance;
					paths[nodeNo] = [...paths[current], nodeNo];
				}
			}
		}
	}

	const path = paths[targetNode];

	console.log(`Paths: ${path.join(' -> ')}`);

	return [path, distances[targetNode]];
}

console.log(dijkstra(adjMatrix, 0, 5));