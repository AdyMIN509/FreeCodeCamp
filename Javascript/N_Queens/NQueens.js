function solveNQueens(n) {
  const solutions = [];
  const stack = [[]]; // état de départ : aucune reine placée

  while (stack.length > 0) {
    const positions = stack.pop();
    const row = positions.length;

    // Cas de base : une reine par ligne a été placée → solution trouvée
    if (row === n) {
      solutions.push(positions);
      continue;
    }

    // On essaie chaque colonne pour cette ligne, dans l'ordre normal
    for (let col = 0; col < n; col++) {
      let valid = true;

      for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = positions[prevRow];
        if (prevCol === col || Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
          valid = false;
          break;
        }
      }

      if (valid) {
        stack.push([...positions, col]);
      }
    }
  }

  return solutions;
}

console.log(solveNQueens(4));