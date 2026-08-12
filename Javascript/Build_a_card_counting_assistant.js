let count = 0;

function cardCounter(card) {
	if ("JKQA".includes(card) || card === 10) {
			--count;
		}
	else if (card >= 2 && card <= 6) {
			++count;
		}

	if (count > 0) {
		return `${count} Bet`;
	} else if (count <= 0) {
		return `${count} Hold`;
	}
}

console.log(cardCounter(10));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
console.log(cardCounter("K"));
console.log(cardCounter("A"));