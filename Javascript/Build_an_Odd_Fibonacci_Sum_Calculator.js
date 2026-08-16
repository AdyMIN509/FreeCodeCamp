function sumFibs(num) {
	let first = 0;
	let second = 1;
	let runningTotal = 0;
	
	while(first <= num) {
		if(first % 2 !== 0) {
			runningTotal += first;
		}
		let temp = first;
		first = second;
		second += temp;
	}
	return runningTotal;
}