function isPalindrome(word) {
	let lc = word.toLowerCase();
	let reverse = lc.split("").reverse().join("");
	return lc === reverse;
}

function findPalindromeBreaks(words) {
	let notPal = [];
	if (words.length === 0) {
		return [];
	}
	for (const i in words) {!isPalindrome(words[i]) ? notPal.push(Number.parseInt(i)) : null}
	return notPal;
}
function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }
  const counts = new Map();

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    counts.set(phrase, (counts.get(phrase) || 0) + 1);
  }

  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (counts.get(phrase) > 1) {
      result.push(i);
    }
  }

  return result;
}


function analyzeTexts(texts, phraseLength) {
  if (!Array.isArray(texts) || texts.length === 0) return [];
  
  return texts.map(text => ({
    repeatedPhrases: findRepeatedPhrases(text, phraseLength),
    palindromeBreaks: findPalindromeBreaks(text)
  }));
}