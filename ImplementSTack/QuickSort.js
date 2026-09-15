function quicksort(array) {
	if (array.length <= 1) return [...array];

	let pivot = array[array.length - 1];
	let left = [];
	let rigth = [];

	for (let i = 0; i < array.length - 1;i++) {
		if(array[i] <= pivot) {
			left.push(array[i]);
		} else {
			rigth.push(array[i]);
		}
	}

	return [...quicksort(left), pivot, ...quicksort(rigth)]
}


console.log(
	quicksort([8,3,12,4,55,6,0])
)