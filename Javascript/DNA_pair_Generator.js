function pairElement(DNAstr) {
	const DNA = {
		A: "T",
		T: "A",
		C: "G",
		G: "C",
	}
	let out;

	out = [];
	for(const char of DNAstr.split("")) {
		out.push(
			[char, DNA[char]]
		)
	}
	return out;
}

console.log(pairElement("ATCG"));