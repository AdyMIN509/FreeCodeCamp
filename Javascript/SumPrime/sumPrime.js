function sumPrimes(n) {
  let out = 0;

  for (let i = 0; i < n + 1; i++) {
    if (i < 2) continue;
    let isPrime = true;
    for (let j = 2; j < n; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
        break;
      }
    }
    out += isPrime ? i : 0;
  }

  return out;
}

console.log(sumPrimes(10));