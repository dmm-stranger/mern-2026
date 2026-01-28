// // console.log('my first code: Dulon');

// DATA TYPES:
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
// // function declaration:
// function sum(a, b, c) {
// 	return (a + b) * c;
// }
// const sumResult = sum(2, 2, 10);
// console.log(`Result: ${sumResult}`);

// // function expression (anonymous / named):
// const sum2 = function (a, b, c) {
// 	return a * b - c;
// };
// const result = sum2(2, 2, 10);
// console.log(`repeat of: ${result}`);

// // arrow function(ES6):
// const sum3 = (a, b, c) => {
// 	return a * 2 + b * 4 + c * 6;
// };
// console.log(`result goes to: ${sum3(2, 3, 4)}`);

// // function constructor:
// const greet = new Function('name', 'return `Hello, ${name}!`;');

// // default parameters:
// function great(name = 'dulon mahadi', age = 18) {
// 	return `i am: ${name}. Age goes to: ${age}`;
// }
// console.log(great('alice'));

// // rest parameter:
// function memories(a, b, ...rest) {
// 	console.log(a + b);
// 	console.log(`rest params: ${rest}`);
// }
// memories(1, 2, 3, 4, 5);

// // callback functions:
// function processData(data, callback) {
// 	const result = data?.toUpperCase();
// 	callback(result);
// }

// processData('hello', function (processResult) {
// 	console.log(`result is: ${processResult}`);
// });

// --------------- part 3 ------------------------------
// OBJECT && ARRAY:
// // object literal:
// const person = { name: 'Dulon Mahadi', age: 28 };
// console.log(person);

// // object constructor:
// const student = new Object();
// student.id = 1258006;
// student.name = 'sumiya islam';
// student.age = 16;

// console.log(student);

// // constructor function:
// function memory(name, fill_id) {
// 	this.name = name;
// 	this.fill_id = fill_id;
// }

// const alian1 = new memory('silliman', 1558200);
// const alian2 = new memory('rkijjan', 1558266);
// console.log(alian1, alian2);

// console.log(`alian1 ID: ${alian1['fill_id']}`);
// console.log(`alian2 name: ${alian2?.name}`);

// // object create method:
// const lime = {
// 	greet: function () {
// 		console.log('Hello');
// 	},
// };

// const employee = Object.create(lime);
// console.log(employee);

// employee.name = 'alex tin';
// employee.age = 45;

// console.log(employee);

// // ES6 class:
// class manage {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// const manager = new manage('abul basar', 60);
// const manager2 = new manage('khairul mia', 56);

// console.log(manager);
// console.log(manager2);

// // object iterator (for...in):
// const melbon = { name: 'Sumiya Islam', age: 17, isMarrid: true };
// for (const key in melbon) {
// 	if (melbon.hasOwnProperty(key)) {
// 		console.log(key, melbon[key]);
// 	}
// }

// Object.keys(melbon).forEach((key) => console.log(key, melbon[key]));
// Object.values(melbon).forEach((value) => console.log(value));
// Object.entries(melbon).forEach(([key, value]) => console.log(key, value));

// console.log(Object.keys(melbon));
// console.log(Object.values(melbon));
// console.log(Object.entries(melbon));

// // array literal:
// const salary = [1200, 1500, 1800];
// console.log(salary);

// // new Arrays:
// const milon = new Array(1, 2, 3, 4);
// console.log(milon);

// const emptyArr = new Array(5);
// console.log(emptyArr);

// // Array of:
// const manage2 = Array.of(1, 2, 3, 4, 4, 5);
// console.log(manage2);

// // Array from:
// const str = 'Dulon Mahadi';
// const newStr = Array.from(str);
// console.log(newStr);

// // forEach:
// manage2.forEach((num, index, arr) => console.log(num * 2));
// // filter, map, reduce ...

// // array destruction:
// const sealery = [1544, 2566, 4587, 1252, 6659, 4485];

// const [first, last] = sealery; // basic destruction
// console.log(first, last);

// const [, , third] = sealery; // empty destruction
// console.log(third);

// const [one, two, ...rest] = sealery; // rest of destruction
// console.log(one, two, rest);

// // Object destruction:
// const personMan = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 30,
// 	address: {
// 		city: 'New York',
// 		country: 'USA',
// 	},
// };

// const { firstName } = personMan; // basic destruction
// console.log(firstName);

// const { lastName: sureName } = personMan; // assigning to new variable named destruction
// console.log(sureName);

// const {
// 	// nested destruction
// 	address: { country },
// } = personMan;
// console.log(country);

// const { middleName = 'empty' } = personMan; // default destruction
// console.log(middleName);

// // Map ans Set object:
// const mySet = new Set([1, 2, 3, 4, 'hello', 'mello']); // Set
// console.log(mySet);

// mySet.add(5);
// console.log(mySet);
// console.log(mySet.has(5));
// true;
// console.log(mySet.has(6));

// const myMap = new Map();
// console.log(myMap);
// myMap.set('name', 'alice');
// console.log(myMap);
// // myMap.set(keyObj, 'An object key');

// console.log(myMap.get('name')); // Alice
// // console.log(myMap.get(keyObj)); // An object key

// --------------- part 4 ------------------------------
// ASYNCHRONOUS javascript::

// // Promises:
// function fetchData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const success = Math.random() > 0.5;
// 			if (success) {
// 				resolve('Data fetch successfully!');
// 			} else {
// 				reject(new Error('failed to fetch data.'));
// 			}
// 		}, 1000);
// 	});
// }

// fetchData()
// 	.then((data) => {
// 		console.log(data);
// 		return data.toUpperCase();
// 	})
// 	.then((process) => {
// 		console.log('Processed:', processedData);
// 	})
// 	.catch((error) => {
// 		console.error(error.message); // "Failed to fetch data."
// 	})
// 	.finally(() => {
// 		console.log('Fetch operation finished.');
// 	});

// // asy...await:
// async function fetchDataAsync() {
// 	try {
// 		console.log('Fetching data...');
// 		const data = await fetchData(); // fetchData is the Promise-returning function from above
// 		console.log(data);
// 		const processedData = data.toUpperCase();
// 		console.log('Processed:', processedData);
// 		return processedData;
// 	} catch (error) {
// 		console.error('Error in async function:', error.message);
// 		throw error; // Re-throw if needed
// 	} finally {
// 		console.log('Async fetch operation finished.');
// 	}
// }
// fetchDataAsync().then((result) => console.log('Final result:', result));

// // POST request using fetch:
// async function postData(url = '', data = {}) {
// 	const response = await fetch(url, {
// 		method: POST,
// 		headers: {
// 			'content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	});
// 	if (!response?.ok) {
// 		throw new Error(`HTTP error status: ${response?.status}`);
// 	}
// }

// postData('https://api.example.com/submit', { item: 'test' })
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err.message));

// --------------- part 5 ------------------------------
// OOP && PROTOTYPE:
// Class:
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} Makes a Noise.`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}
	speak() {
		console.log(`${this.name} Barks.`);
	}
}

const myAnimal = new Animal('Russian');
const myDog = new Dog('Rex', 'Germen Shepherd');
console.log(myDog.speak());
console.log(myAnimal.speak());

// Static Class:
class MathHelper {
	static PI = 3.1416;

	static add(x, y) {
		return x + y;
	}
}

console.log(MathHelper.PI);
console.log(MathHelper.add(20, 20));
