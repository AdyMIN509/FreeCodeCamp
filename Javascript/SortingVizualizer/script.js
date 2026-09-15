const generateArrayBtn = document.getElementById("generate-btn");
const sortArrayBtn = document.getElementById("sort-btn");
const startingArrayContainer = document.getElementById("starting-array")
const arrayContainer = document.getElementById("array-container");

function generateElement () {
	return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
	const out = [];
	for (let i = 0; i < 5; i++) {
		out.push(generateElement());
	}
	return out;
}

function generateContainer () {
	return document.createElement("div");
}

function fillArrContainer(htmlEl, intArr) {
	intArr.forEach(e => {
		htmlEl.innerHTML += `<span>${e}</span>`
	});
}

function isOrdered(int1, int2) {
	return int1 <= int2;
}

function swapElements(arr, index) {
	if (!isOrdered(arr[index], arr[index + 1])) {
		const temp = arr[index];
		arr[index] = arr[index + 1];
		arr[index + 1] = temp;
	}
}

function highlightCurrentEls(htmlEl, index) {
	const children = Array.from(htmlEl.children);
	const currentEl = children[index];
	const nextEl = children[index + 1];

	currentEl.style.border = "dashed 1px red";
	nextEl.style.border = "dashed 1px red";
}

function visualizeBubbleSort() {
	const n = currentNums.length;
	if (n < 2) return;

	let lastContainer = startingArrayContainer;
	let swappedInPass = true;

	while (swappedInPass) {
		swappedInPass = false;

		for (let j = 0; j < n - 1; j++) {
			highlightCurrentEls(lastContainer, j);

			if (!isOrdered(currentNums[j], currentNums[j + 1])) {
				swapElements(currentNums, j);
				swappedInPass = true;
			}

			const newContainer = generateContainer();
			fillArrContainer(newContainer, currentNums);
			arrayContainer.appendChild(newContainer);
			lastContainer = newContainer;
		}
	}
}

// Event Listener

let currentNums = [];

generateArrayBtn.addEventListener('click', () => {
	Array.from(arrayContainer.children).forEach(child => {
		if (child !== startingArrayContainer) child.remove();
	});
	startingArrayContainer.innerHTML = "";
	startingArrayContainer.removeAttribute("style");
	currentNums = generateArray();
	sortArrayBtn.style.display = "inline-block";
	fillArrContainer(startingArrayContainer, currentNums);
});

sortArrayBtn.addEventListener('click', visualizeBubbleSort)