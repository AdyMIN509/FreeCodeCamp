function bubbleSort(array) {
  if (array.length <= 1) return array;
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [];
const j = 10;

for (let i = 0; i < j; i++) {
	arr.push(Math.floor(Math.random() * 10))
}

console.log(`
	Before Sorting: ${arr}
	`)
console.log(`
	After  Sorting: ${bubbleSort(arr)}
	`)