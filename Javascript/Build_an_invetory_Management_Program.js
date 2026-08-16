let inventory = [];

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
		console.log(`${productObj.name.toLowerCase()} quantity updated`);
	} else {
		inventory.push(
			{
			name: productObj.name.toLowerCase(),
			quantity: productObj.quantity,
			}
		);
		console.log(`${productObj.name.toLowerCase()} added to inventory`);
	}
}

function removeProduct(productName, productQty) {
	const prdindex = findProductIndex(productName);

	if (prdindex === -1) {
		console.log(`${productName.toLowerCase()} not found`);
		return;
	}
	if (inventory[prdindex].quantity - productQty > 0) {
		console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[prdindex].quantity - productQty}`)
		inventory[prdindex].quantity -= productQty;
	} else if (inventory[prdindex].quantity - productQty === 0) {
		inventory.splice(prdindex, 1);
	} else {
		console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[prdindex].quantity}`)
	}
}

removeProduct("FLOUR", 5)