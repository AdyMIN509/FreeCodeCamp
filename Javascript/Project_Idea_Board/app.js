const projectStatus = {
	PENDING: {description: "Pending Execution"},
	SUCCESS: {description: "Executed Successfully"},
	FAILURE: {description: "Execution Failed"},
}

class ProjectIdea{
	constructor(title, description) {
		this.title = title;
		this.description = description;
		this.status = projectStatus.PENDING;
	}

	updateProjectStatus(newStatus) {
		console.log(this.status);
		this.status = newStatus;
	}
}

class ProjectIdeaBoard {
	constructor(title) {
		this.title = title;
		this.ideas = [];
	}

	pin(projectIdea) {
		this.ideas.push(projectIdea);
	}

	unpin(projectIdea) {
		const elIndex = this.ideas.findIndex(i=> i === projectIdea);
		this.ideas.splice(elIndex, 1);
	}
	count() {
		return this.ideas.length;
	}
	formatToString() {
		if(this.ideas.length === 0) {return "Empty Board has 0 idea(s)\n"};
		let out = [`${this.title} has ${this.count()} idea(s)`];
		this.ideas.forEach(i=>{
			out.push(`${i.title} (${i.status.description}) - ${i.description}`)
		});
		return out.join("\n") + "\n";
	}
}