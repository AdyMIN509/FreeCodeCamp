const num = 5;

function factorialCalculator(nums) {
	let result = 1;
	let i = 1;
	while(i <= nums) {
		result *= i;
		i++;
	}
	return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);