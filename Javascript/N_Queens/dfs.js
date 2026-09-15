const graph = {
	A: ['B', 'C', 'D'],
	C: ['E', 'F'],
	B: ['A'],
}
const startNode = "A";

function dfs(graph, startNode) {
	const stack = [startNode];
	const visited = [];

	while (stack.length > 0) {
		const node = stack.pop();
		visited.push(node);

		if(!Object.hasOwn(graph,node)) continue;
		for (const el of graph[node].reverse()) {
			if(!visited.includes(el)) {
				stack.push(el);
			}
		}
	}

	console.log(visited.join(" -> "));
}


dfs(graph,startNode)