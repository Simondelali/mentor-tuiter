// JavaScript ES6
// * some new features in JavaScript ES6

// Template Literals

/*
	* Then - complex strings built with
	string concatenation

	* Now - string template and substitution

*/



// Without Template Literals
// * manually paste together strings and functions

let customerList = [
	{first: "Paul", last: "Offei", since: 2020},
	{first: "Joel", last: "Kofi", since: 2009}
];

// for(let customer of customerList) {
// 	let str = "Customer " + customer.first + " "
// 	+ customer.last + " (since " + customer.since +
// 	")";

// 	console.log(str);
// }


// // With Template Literals
// // * String interpolation

// for(let customer of customerList) {
// 	let str = `Customer ${customer.first} ${customer.last} (since ${customer.since})`;
// 	console.log(str);
// }

// Fat Arrow Functions
// * Functions often passed as arguments to other functions (eg. as a callback)
// * ES6 fat arrow function syntax simplifies passing functions to other functions

// using a helper function

// Import the moment package
const moment = require("moment");

// Return current time with millisecond accuracy
function accurateTime() {
	return moment().format("HH:mm:ss.SSS");
}

function timeMessage(message) {
	console.log(`${accurateTime()} - ${message}`);
}

// Demonstrate accurateTime
// const myTime = accurateTime();
// console.log(myTime);

// // Demonstrate timeMessage
// timeMessage("Hello, moment");


// Traditional Function
/*
	* Considder an old style invocation of the setTimeout function
	* Delay 1.5 second (1500 ms)
	* Invokes anonymous function with parameter ('foo')
*/

// function traditionalCallback() {
// 	timeMessage("BEFORE");

// 	setTimeout(function(args) {timeMessage(`CALLBACK (${args})`);}, 1500, 'Welcome Software Engineers');
// 	timeMessage("AFTER");
// }

// traditionalCallback();


// // FAT Arrow Function
// // * No function keyword
// // * Fat arrow (=>)

// function fatArrowCallback() {
// 	timeMessage("BEFORE");

// 	setTimeout((arg) => {timeMessage(`CALLBACK (${arg})`);}, 1500, 'Welcome Software Engineers');
// 	timeMessage("AFTER");
// }

// fatArrowCallback();

// // Simplified Version 
function simplifyFatArrowCallback() {
	timeMessage("BEFORE");

	setTimeout(args => timeMessage(`CALLBACK (${args})`), 1500, 'Welcome Software Engineers');
	timeMessage("AFTER");
}

simplifyFatArrowCallback();

// /*
// 	Fat Arrow Function Uniqueness
// 	* To Return Value from a function
// 	1. with curly brace, must include explicit return statement
// 	2. with curly brace, the single statement is automatical return by Fat Arrow

// 	Handling this
// 	1. Traditional function
// 		* Defines own value of this
// 		* Shadows any this in outer block scope
// 		* Special coding hacks requires :-()

// 	2. Fat arrow function
// 		* Does not create own this
// 		* value of this from enclosing block scope context remains available

// 		And this design makes it helpful in Callback function
// */

// // Spread operator for deep and indepent copy
const newCustomerList = [...customerList];
newCustomerList.push({first: "Simon", last: "Jonathan", since: 2022});
console.log(newCustomerList);
console.log(customerList);

