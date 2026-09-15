function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  let result = [];

  function isValid(placement, row, col) {
    for (let r = 0; r < row; r++) {
      let c = placement[r];
      if (c === col) return false;
      if (Math.abs(c - col) === Math.abs(r - row)) return false;
    }
    return true;
  }

  function backtrack(placement, row) {
    if (row === n) {
      result.push([...placement]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(placement, row, col)) {
        placement.push(col);
        backtrack(placement, row + 1);
        placement.pop();
      }
    }
  }

  backtrack([], 0);
  return result;
}

console.log(dfsNQueens(4));