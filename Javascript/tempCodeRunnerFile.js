let inventory = [{name: "flour", quantity: 5}];

function findProductIndex(name){
	for(let i = 0; i< inventory.length; i++) {
		if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
			return i;
		}
	}
	return -1;
}

function addProduct(productObj) {
	let productIndex = findProductIndex(productObj.name);
	if (productIndex !== -1) {
		inventory[productIndex].quantity += productObj.quantity;
		console.log(`${productObj.name} quantity updated`);
	} else {
		inventory.push(
			{
			name: productObj.name.toLowerCase(),
			quantity: productObj.quantity,
			}
		);
		console.log(`${productObj.name} added to inventory`);
	}
}

addProduct({name: "FLOUR", quantity: 55});
console.log(inventory)