const lunches = [];
function addLunchToEnd(lunchList, item) {
	lunchList.push(item);
	console.log(`${item} added to the end of the lunch menu.`)
	return lunchList;
}
function addLunchToStart(lunchList, item) {
	lunchList.unshift(item);
	console.log(`${item} added to the start of the lunch menu.`)
	return lunchList;
}
function removedLastLunch(lunchList) {
	if (lunchList.length == 0) {
		console.log("No lunches to remove.")
	} else {
		let itm = lunchList.pop();
		console.log(`${itm} removed from the end of the lunch menu.`)
		return lunchList;
	}
}
function removedLastLunch(lunchList) {
	if (lunchList.length == 0) {
		console.log("No lunches to remove.")
	} else {
		let itm = lunchList.shift();
		console.log(`${itm} removed from the start of the lunch menu.`)
		return lunchList;
	}
}

function getRandomLunch(lunchList) {
	const length = lunchList.length;
	if (length == 0) {
		console.log("No lunches available.");
	} else {
		console.log(`Randomly selected lunch: ${lunchList[Math.round(length * Math.random())]}`)
	}
}

function showLunchMenu(lunchList) {
	if (lunchList.length == 0) {
		console.log("The menu is empty.")
	} else {
		console.log(`Menu items: ${lunchList.join(", ")}`)
	}
}
showLunchMenu(["Greens", "Corns", "Beans"]);