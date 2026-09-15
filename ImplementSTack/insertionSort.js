function insertionSort(array) {
	const arr = [...array];
	if(array.length	<= 1) return [...array];

	for(let i = 0; i < arr.length; i++) {
		if(i===0) {
			continue;
		} else {
			let currentIndex = i;
			while(currentIndex - 1 >= 0 && arr[currentIndex] < arr[currentIndex - 1]) {
				const temp = arr[currentIndex];
				arr[currentIndex] = arr[currentIndex - 1];
				arr[currentIndex - 1] = temp;
				currentIndex--;
			}
		}
	}
	return arr;
}

console.log(
	insertionSort([8,3,12,4,55,6,0])
)