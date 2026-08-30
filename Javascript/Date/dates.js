let currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(dateObj) {
	const out = dateObj.toLocaleString("en-US", {
		month: "numeric",
		day: "numeric",
		year: "numeric"
	});
	return `Formatted Date (MM/DD/YYYY): ${out}`
}

function formatDateLong(dateObj) {
	const out = dateObj.toLocaleString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
	return `Formatted Date (Month Day, Year): ${out}`;
}

console.log(currentDate.getMonth())