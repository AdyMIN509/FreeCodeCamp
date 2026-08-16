function convertHTML(str) {
	let HtmlEntities = {
		"&":	"&amp;",
		"<":	"&lt;",
		">":	"&gt;",
		'"':	"&quot;",
		"'":	"&apos;"
	}
	let out;

	out = str;
	for (const keys in HtmlEntities) {
		out = out.replaceAll(keys, HtmlEntities[keys]);
	}
	return out;
}

console.log(convertHTML("Dolce & Gabbana"))