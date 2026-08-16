const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];


function compactFragments(arrOfFragments) {
	let newArrOfFragments = [];
	let hasRemoved = false;
	for (const fragments of arrOfFragments) {
		if (!fragments) {
			hasRemoved = true;
		} else {
			newArrOfFragments.push(fragments);
		}
	}
	if (hasRemoved) {
		console.log("[COMPACTED]");
	}
	return newArrOfFragments;
}

let compactedShuffledFragments = compactFragments(shuffledFragments)

function sortFragments(arrOfFragments) {
	let arrCopy = structuredClone(arrOfFragments);
	for (let i = 0; i < arrCopy.length - 1; i++) {
		for(let j= 0; j < arrCopy.length - 1 - i; j++) {
			if (arrCopy[j].id > arrCopy[j + 1].id) {
				let temp = arrCopy[j];
				arrCopy[j] = arrCopy[j + 1];
				arrCopy[j + 1] = temp;
			}
		}
	}
	return arrCopy;
}

let sortedFragments  = sortFragments(compactedShuffledFragments);

function dedupeFragments(arrFragments) {
	let idSeen = [];
	let out = [];
	for (const fragment of arrFragments) {
		if (!idSeen.includes(fragment.id)) {
			out.push(fragment);
			idSeen.push(fragment.id)
		} else {
			console.log("[DEDUPED]");
		}
	}
	return out;
}


let dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sortedArrOfFragments) {
	let cp = structuredClone(sortedArrOfFragments);
	let out = [];
	let currentSupposedId = 1;

	for(const fragment of cp) {
		if (fragment.id === currentSupposedId) {
			out.push(fragment);
		} else {
			while(currentSupposedId !== fragment.id) {
				out.push(
					{
						id: currentSupposedId,
						text: "[...]",
					}
				);
				console.log("[FILLED]")
				currentSupposedId++;
			}
			out.push(fragment);
		}
		currentSupposedId++;
	}
	return out;
}


let filledFragments = fillMissingFragments(dedupedFragments) 
console.log(filledFragments)

function assembleStory(sortedArrFragments) {
	let out = "";
	for (const fragment of sortedArrFragments) {
		out = out.concat(fragment.text) + "\n";
	}
	return out.slice(0,out.length - 1);
}

console.log(assembleStory(filledFragments));