function selectionSort(array) {
	const arr = [...array]
	if (arr.length <= 1) return arr;
	const out = [];
	let index = 0;

	while(arr.length > 0) {
		let minVals = Math.min(...arr.slice(index));
		let minIndex = arr.findIndex(e=> e === minVals);
		out.push(arr.splice(minIndex,1)[0])
	}
	return out;
}


const arr = [];
const j = 10;

for (let i = 0; i < j; i++) {
	arr.push(Math.floor(Math.random() * 10))
}
console.log(selectionSort(arr).join("->"));