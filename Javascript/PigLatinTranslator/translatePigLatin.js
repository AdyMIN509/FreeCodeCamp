function translatePigLatin(str) {
	const vowel = /^([aeiou]+)(.*)/i;
	const consonant = /^([^aeiou]+)(.*)/i;

	if (str.match(consonant)) {
		return str.replace(consonant, "$2$1ay");
	} else if (str.match(vowel)) {
		return str + "way";
	}
}