const markdownInput = document.getElementById("markdown-input");
const rawHtml = document.getElementById("html-output");
const previewHtml = document.getElementById("preview");


// Functions
function convertMarkdown() {
	let text = markdownInput.value;
	text = text.replace(
		new RegExp("^#{3} (.*)","mg"),
		`<h3>$1</h3>`
	)
	text = text.replace(
		new RegExp("^#{2} (.*)","mg"),
		`<h2>$1</h2>`
	)
	text = text.replace(
		new RegExp("^# (.*)","mg"),
		`<h1>$1</h1>`
	)
	text = text.replace(
		new RegExp("\\*\\*(.*?)\\*\\*","mg"),
		"<strong>$1</strong>"
	)
	text = text.replace(
		new RegExp("__(.*?)__","mg"),
		"<strong>$1</strong>"
	)
	text = text.replace(
		new RegExp("\\*(.*?)\\*","mg"),
		"<em>$1</em>"
	)
	text = text.replace(
		new RegExp("_(.*?)_","mg"),
		"<em>$1</em>"
	)
	text = text.replace(
		new RegExp("!\\[(.*)\\]\\((.*)\\)","mg"),
		`<img src="$2" alt="$1">`
	)
	text = text.replace(
		new RegExp("\\[(.*)\\]\\((.*)\\)","mg"),
		`<a href="$2">$1</a>`
	)
	text = text.replace(
		new RegExp("> (.*)","mg"),
		`<blockquote>$1</blockquote>`
	)

	rawHtml.textContent = text;
	previewHtml.innerHTML = text;
}

markdownInput.addEventListener('input', convertMarkdown);