function myReplace(str, wrd, newWrd){
	const pat = new RegExp(wrd, "i");
	const matched =  str.match(pat) + "";
	let newWrd1 = (matched.slice(0,1) == matched.slice(0,1).toUpperCase() ? newWrd.slice(0,1).toUpperCase() : newWrd.slice(0,1).toLowerCase()) + newWrd.slice(1); 
	return str.replace(pat, newWrd1);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

console.log('a' == 'a')