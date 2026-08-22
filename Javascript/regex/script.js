// Regex pattern declaration using Regex literal
// const regexLiteral = /freeCodeCamp/;

// Regex pattern declaration usig RegExp() object:
// const pattern = "freeCodeCamp";
// const regex = new RegExp(pattern);

// Test Result: return true if the test is present in the pattern, otherwise false

// const test = "das;l';dlsfreeCodeCamp";
// console.log(regex.test(test))

// Match

// // console.log(test.match(regex))
// console.log("freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined]
// console.log("freeCodeCamp is great".match(regex)); // ['freeCodeCamp', index: 0, input: 'freeCodeCamp is great', groups: undefined]
// console.log("I love freeCodeCamp".match(regex)); // ['freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined]
// console.log("freecodecamp".match(regex)); // null
// console.log("FREECODECAMP".match(regex)); // null
// console.log("free".match(regex)); // null


// modifiers: gimudvys ^$

// const regt = /freecodecamp/di;
// const string = "we love freecodecamp isn't freecodecamp great?";
// console.log(string.match(regt));

// const pattern = "freecodecamp";
// const str = "freecodecamp is the best we love freecodecamp";
// const matched = str.matchAll(pattern);
// const replaced = str.replaceAll(pattern, "freeCodeCamp");
// console.log(matched.next());
// console.log(matched.next());
// console.log(matched.next());
// console.log(replaced);

const regex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(regex);
console.log(Array.from(matched));