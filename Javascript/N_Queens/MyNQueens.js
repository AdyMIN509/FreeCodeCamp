function dfsNQueens(n) {
	if (n < 1) return [];
	const stack = [[]];
	const solutions = [];

	while (stack.length > 0) {
		const positions	= stack.pop();
		const row = positions.length;

		if (row === n) {
			solutions.push(positions);
			continue;
		}
		 for(let col = n - 1; col >= 0; col--) {
			let valid = true;
			for (let prevRow = 0; prevRow < row; prevRow++) {
				const prevCol = positions[prevRow];
				if(col === prevCol || Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
					valid = false;
				}
			}
			if(valid) {
				stack.push([...positions, col])
			}
		 }
	}
	return solutions;
}

n = 10;

console.log(dfsNQueens(n).length);