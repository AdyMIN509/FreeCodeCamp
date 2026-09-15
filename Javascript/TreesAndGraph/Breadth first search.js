function bfs(graph, start) {
	const visited = new Set();
	const queue = [start];
	const result = [];

	visited.add(start);

	while(queue.length > 0) {
		const node = queue.shift();
		result.push(node);
		for (const n of graph[node]) {
			if(!visited.has(n)) {
				visited.add(n);
				queue.push(n);
			}
		}
	}

	return result;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(bfs(graph, "A")); // ["A", "B", "C", "D", "E", "F"]