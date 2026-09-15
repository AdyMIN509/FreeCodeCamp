function fibonacci(n) {
	const sequence = [0, 1];
	if (n === 1 || n === 0) {
		return n;
	}

	for (let i = 2; i < n + 1; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2])
	}
	return sequence.pop();
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));