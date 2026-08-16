const questions = [
	{
		category: "Géographie",
		question: "Quelle est la capitale de l'Australie ?",
		choices: ["Sydney", "Canberra", "Melbourne"],
		answer: "Canberra",
	},
	{
		category: "Science",
		question: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?",
		choices: ["L'oxygène", "Le dioxyde de carbone", "L'azote"],
		answer: "Le dioxyde de carbone",
	},
	{
		category: "Histoire",
		question: "En quelle année a débuté la Révolution française ?",
		choices: ["1789", "1815", "1492"],
		answer: "1789",
	},
	{
		category: "Informatique",
		question: "Que signifie l'abréviation « HTML » ?",
		choices: [
			"HyperText Markup Language",
			"HighText Machine Language",
			"Hyperlink Text Management Language",
		],
		answer: "HyperText Markup Language",
	},
	{
		category: "Sport",
		question: "Combien de joueurs composent une équipe de football sur le terrain ?",
		choices: ["9", "11", "13"],
		answer: "11",
	},
];

function getRandomQuestion(qts) {
	return questions[Math.floor(Math.random() * (qts.length - 1))];
}

function getRandomComputerChoice (choicesList) {
	return choicesList[Math.floor(Math.random() * (choicesList.length - 1))];
}

function getResults(questionObj, cmpChoice) {
	if (questionObj.answer === cmpChoice) {
		return "The computer's choice is correct!";
	} else {
		return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`
	}
}