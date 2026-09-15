function isValidEmail(str) {
	const pattern = /^[a-zA-Z]+\w*-?\w*@[a-zA-Z]{1,16}\.[a-zA-Z]{2,3}$/;
	return pattern.test(str);
}

const email1 = "mbolanantenainaChristian@gmail.com932"; 
const email2 = "christian-mbolanantenaina@sumproduct.com"; 

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));