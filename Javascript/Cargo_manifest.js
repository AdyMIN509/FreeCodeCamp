let normalizeUnits = (manifest) => {
	if (manifest.unit === "lb") {
		return {
			...manifest,
			weight: manifest.weight * 0.45,
			unit: "kg",
		}
	} else {
		return {...manifest};
	}
}

let validateManifest = (manifest) => {
	const errors = {}
	// For ContainerID
	if (!manifest.hasOwnProperty("containerId")) {
		errors.containerId = "Missing";
	} else if (
		typeof manifest.containerId !== "number" ||
		manifest.containerId <= 0 ||
		!Number.isInteger(manifest.containerId) ||
		Number.isNaN(manifest.containerId)
	) {
		errors.containerId = "Invalid"
	}
	// For Destination
	if (!manifest.hasOwnProperty("destination")) {
		errors.destination = "Missing";
	} else if (
		typeof manifest.destination !== "string" ||
		manifest.destination.trim() === "" 
	) {
		errors.destination = "Invalid"
	}
	// For weight
	if (!manifest.hasOwnProperty("weight")) {
		errors.weight = "Missing";
	} else if (
		typeof manifest.weight !== "number" ||
		manifest.weight <= 0 ||
		Number.isNaN(manifest.weight)
	) {
		errors.weight = "Invalid"
	}
	// For unit
	if (!manifest.hasOwnProperty("unit")) {
		errors.unit = "Missing";
	} else if (
		(manifest.unit !== "lb" &&
		manifest.unit !== "kg" )||
		manifest.unit.trim() === "" 
	) {
		errors.unit = "Invalid";
	}
	// For unit
	if (!manifest.hasOwnProperty("hazmat")) {
		errors.hazmat = "Missing";
	} else if (
		typeof manifest.hazmat !== "boolean"
	) {
		errors.hazmat = "Invalid"
	}

	return errors;
}

let processManifest = (manifest) => {
	let copy = validateManifest(manifest);
	if (Object.keys(copy).length === 0) {
		console.log(`Validation success: ${manifest.containerId}`);
		console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
	} else {
		console.log(`Validation error: ${manifest.containerId}`);
		console.log(copy);
	}
}

let test = { containerId: -88, destination: "Soledad", weight: NaN };
processManifest(test)