function dfs(graph, start) {
	const visited = new Set();
	const stack = [start];
	const result = [];

	visited.add(start);

	while(stack.length > 0) {
		const node = stack.pop();
		result.push(node);
		for (const n of graph[node].reverse()) {
			if(!visited.has(n)) {
				visited.add(n);
				stack.push(n);
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

console.log(dfs(graph, "A"));