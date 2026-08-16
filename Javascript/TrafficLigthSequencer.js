const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

const runSequence = (config, cycles) => {
	if (config.phases.length === 0) {
		console.log("No phases found")
	} else if (config.fault) {
		console.log("Faulted phase!")
	} else {
		for (let i = 0; i < cycles; i++) {
			for (const p of config.phases) {
				if (p.duration <= 0) {
					console.log("Invalid phase detected");
				} else {
					console.log(`Switching to ${p.color} for ${p.duration} s`);
				}
			}
		}
	}
}
const generateTimeline = (config, cycles) => {
	let out = [];
	let cumul = 0;
	if (config.phases.length === 0) {
		return [];
	} else {
		for (let i = 0; i < cycles; i++) {
			for (const phase of config.phases) {
				cumul += phase.duration;
				out.push(cumul);
			}
		}
	}

	return out;
}


for (const prop in config2) {
	console.log(config2[prop])
}