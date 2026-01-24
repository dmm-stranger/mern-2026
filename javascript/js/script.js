// // console.log('my first code: Dulon');

// // DATA TYPES:
// // Primitive types:
// // string, number, boolean, undefined, null, bigint, symbol:
// console.log('my name is dulon'); // string
// console.log(12366); // number
// console.log(13.25);
// console.log(true); // boolean
// let pass; // undefined
// console.log(pass);
// let exam = null; // null
// console.log(exam);
// let total = 12n;
// console.log(total);
// let level1 = Symbol('declaration'); // symbol
// let level2 = Symbol('declaration');
// console.log(level1 === level2);

// // Reference types:
// // array, object, function, Date, Regex:
// let sealery = [12500, 250041, 215548]; // array
// console.log(sealery);
// let person = {
// 	// object
// 	name: 'Dulon Mahadi',
// 	age: 30,
// };
// console.log(person);

// function delta() {
// 	// function
// 	console.log(sealery, person, 'nill');
// }
// delta();
// console.log(new Date()); // Date
// console.log(RegExp(/hhh/)); // regEx

// // EQUALITY CHECK:
// // == and === are not same:
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false

// // typeof operator:
// console.log(typeof 45);
// console.log(typeof 'dulon mahadi');
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof { name: 'dulon' });
// console.log(typeof null);
// console.log(typeof function name() {});
// console.log(typeof Symbol());

// // nan: not a number:
// console.log(isNaN('st')); // true: "st" this is string, not a number.
// console.log(isNaN(45)); // false:

// // template literals: `...`
// const name = 'dulon mahadi';
// console.log(`my name is: ${name}.`);

// // IIFE self executed function:
// (function () {
// 	console.log('i am self executed function: IIFE');
// })();

// // && and || operator:

// console.log(true && 30);
// console.log(false && 31);

// console.log(true || 50);
// console.log(false || 51);

// // ternary operator: ?:
// let marrid = false;
// let limes = marrid ? 'married man' : 'unmarried man';
// console.log(limes);

// --------------- part 2 ------------------------------
// FUNCTION:
// function declaration:
function sum(a, b, c) {
	return (a + b) * c;
}
const sumResult = sum(2, 2, 10);
console.log(`Result: ${sumResult}`);

// function expression (anonymous / named):
const sum2 = function (a, b, c) {
	return a * b - c;
};
const result = sum2(2, 2, 10);
console.log(`repeat of: ${result}`);

// arrow function(ES6):
const sum3 = (a, b, c) => {
	return a * 2 + b * 4 + c * 6;
};
console.log(`result goes to: ${sum3(2, 3, 4)}`);

// function constructor:
const greet = new Function('name', 'return `Hello, ${name}!`;');

// default parameters:
function great(name = 'dulon mahadi', age = 18) {
	return `i am: ${name}. Age goes to: ${age}`;
}
console.log(great('alice'));

// rest parameter:
function memories(a, b, ...rest) {
	console.log(a + b);
	console.log(`rest params: ${rest}`);
}
memories(1, 2, 3, 4, 5);

// callback functions:
function processData(data, callback) {
	const result = data?.toUpperCase();
	callback(result);
}

processData('hello', function (processResult) {
	console.log(`result is: ${processResult}`);
});
