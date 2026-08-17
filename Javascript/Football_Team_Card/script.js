const footballTeam = {
  team: "FC Barcelona",
  year: 2024,
  headCoach: "Hansi Flick",
  players: [
    { name: "Marc-André ter Stegen", position: "goalkeeper", isCaptain: true },
    { name: "Iñaki Peña", position: "goalkeeper", isCaptain: false },
    { name: "Wojciech Szczęsny", position: "goalkeeper", isCaptain: false },
    { name: "Ronald Araújo", position: "defender", isCaptain: false },
    { name: "Jules Koundé", position: "defender", isCaptain: false },
    { name: "Pau Cubarsí", position: "defender", isCaptain: false },
    { name: "Íñigo Martínez", position: "defender", isCaptain: false },
    { name: "Alejandro Balde", position: "defender", isCaptain: false },
    { name: "Andreas Christensen", position: "defender", isCaptain: false },
    { name: "Héctor Fort", position: "defender", isCaptain: false },
    { name: "Pedri", position: "midfielder", isCaptain: false },
    { name: "Frenkie de Jong", position: "midfielder", isCaptain: false },
    { name: "Gavi", position: "midfielder", isCaptain: false },
    { name: "Fermín López", position: "midfielder", isCaptain: false },
    { name: "Dani Olmo", position: "midfielder", isCaptain: false },
    { name: "Marc Casadó", position: "midfielder", isCaptain: false },
    { name: "Pablo Torre", position: "midfielder", isCaptain: false },
    { name: "Robert Lewandowski", position: "forward", isCaptain: false },
    { name: "Raphinha", position: "forward", isCaptain: false },
    { name: "Lamine Yamal", position: "forward", isCaptain: false },
    { name: "Ferran Torres", position: "forward", isCaptain: false },
    { name: "Pau Víctor", position: "forward", isCaptain: false }
  ]
};

const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playersType = document.getElementById("players");
const playerCardsContainer = document.getElementById("player-cards");

teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;
headCoachElement.textContent = footballTeam.headCoach;

function listFromPlayersType(selectedPlayersType) {
	if (selectedPlayersType === "all") {
		return footballTeam.players;
	} else {
		return footballTeam.players.filter(p => p.position === selectedPlayersType);
	}
}

function addDivToPlayersCards(listOfPlayers) {
	listOfPlayers.forEach((p) => {
		let isCap = p.isCaptain ? "(Captain) " : "";
		let position = `Position: ${p.position}`;
		let newDivElement = document.createElement("div");
		let newH2 = document.createElement('h2');
		let newP = document.createElement('p');

		newDivElement.setAttribute('class','player-card');
		newH2.textContent = `${isCap}${p.name}`;
		newDivElement.appendChild(newH2);
		newP.textContent = position;
		newDivElement.appendChild(newP);
		playerCardsContainer.appendChild(newDivElement);
	})
}

addDivToPlayersCards(footballTeam.players)


playersType.addEventListener('change', ()=>{
	playerCardsContainer.innerHTML = "";
	let playerTypeChoosed = playersType.value;
	let validPlayerList = listFromPlayersType(playerTypeChoosed);
	addDivToPlayersCards(validPlayerList);
})