const pattern = /freeCodeCamp/g;

// test methode
let test1 = pattern.test("freeCodeCamp is great!");
let test2 = pattern.test("freeCodeCamp is great!");
let test3 = pattern.test("Naty freeCodeCamp is great!");
let test4 = pattern.test("Naty freecodeCamp is great!");
let test5 = pattern.test("great is freeCodeCamp!");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

// Match method
sentence1 = "freeCodeCamp is great";
sentence2 = "freeCodecamp is great";
sentence3 = "freeCodeCamp freeCodeCamp freeCodeCamp";
sentence4 = "freecodeCamp freeCodeCamp freeCodeCamp";
sentence5 = "not FreeCodeCamp";

console.log(sentence1.match(pattern));
console.log(sentence2.match(pattern));
console.log(sentence3.match(pattern));
console.log(sentence4.match(pattern));
console.log(sentence5.match(pattern));