const graph = {
	A: ['B', 'C', 'D'],
	C: ['E', 'F'],
	// B: ['A'],
}



function bfs(graph, startNode) {
	const queue = [startNode];
	const visited = [];

	while (queue.length > 0) {
		const node = queue.shift();
		visited.push(node);

		if(!Object.hasOwn(graph, node)) continue;
		for (const el of graph[node]) {
			if(!visited.includes(el)) {
				queue.push(el);
			}
		}
	}
	console.log(visited.join("->"));
}


bfs(graph,"A");
bfs(graph,"B");