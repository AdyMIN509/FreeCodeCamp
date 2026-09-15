function dfs(graph, root) {
  const n = graph.length;
  const stack = [root];
  const visited = new Set();
  const out = [];

  visited.add(root);
  while (stack.length > 0) {
    const node = stack.pop();
    out.push(node);

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (graph[node][neighbor] === 1 && !visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
  return out;
}