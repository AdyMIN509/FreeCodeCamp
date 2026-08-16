const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(arrStr) {
	let arrObj = [];
	let skuCuml = [];
	for (let i = 0; i < arrStr.length; i++) {
		let vals = arrStr[i].split("|");
		let sku = vals[0];
		if (skuCuml.includes(sku)) {
			continue;
		}
		skuCuml.push(sku);
		let name = vals[1];
		let qty = Number.parseInt(vals[2]);
		let expires = vals[3];
		let zone = vals[4] || 'general';
		arrObj.push({
			sku: sku,
			name: name,
			qty: qty,
			expires: expires,
			zone: zone
		});
	}
	return arrObj;
}

function planRestock(pantry, shipment) {
	let out = [];
	for(const skus of shipment) {
		if (skus.qty <= 0) {
			out.push(
				{
					type: "discard",
					item: skus
				}
			)
		} else if (isInPantry(pantry, skus)) {
			out.push(
				{
					type: "restock",
					item: skus
				}
			)
		} else {
			out.push(
				{
					type: "donate",
					item: skus
				}
			)
		}
	}
	return out;
}

function isInPantry(pantry, skus) {
	for (const vals of pantry) {
		if (vals.sku === skus.sku) {
			return true;
		}
	}
	return false;
}

function groupByZone(action) {
	let out = {};
	for (const act of action) {
		if(!(act["item"]["zone"] in out)) {
			out[act["item"]["zone"]] = [act]
		} else {
			out[act["item"]["zone"]].push(act)
		}
	}
	return out;
}

function clonePantry(pantry) {
	let newPantry = []
	for(const pt of pantry) {
		newPantry.push(structuredClone(pt));
	}
	return newPantry;
}

let v = clonePantry(pantry);

let v1 = parseShipment(rawData);

let v2 = planRestock(v, v1);

console.log(groupByZone(v2));