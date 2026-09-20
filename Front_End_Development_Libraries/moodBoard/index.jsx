export function MoodBoardItem({color, image, description}) {
	return (
		<div className="mood-board-item" style={{backgroundColor: color}}>
			<img src={image} className="mood-board-image" />
			<h3 className="mood-board-text">{description}</h3>
		</div>
	)
}

export function MoodBoard() {

	const data = [
		{
			color: "#081db8",
			image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
			description: "Pathway",
		},
		{
			color: "#12af12",
			image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
			description: "Shore",
		},
		{
			color: "#b77708",
			image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
			description: "Grass",
		},
		{
			color: "#4b053b",
			image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
			description: "Ship",
		},
		{
			color: "#a9072d",
			image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
			description: "Santorini",
		},
		{
			color: "#cfd213",
			image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
			description: "Pigeon",
		},
	]

	return (
		<div className="mood-board">
			<h1 className="mood-board-heading">Destination Mood Board</h1>
			{data.map(e=>{
				return <MoodBoardItem color={e.color} description={e.description} image={e.image} />
			})}
		</div>
	)
}