/*
	Synchronous and Asynchronous JavaScript
	* Javascript in the browser and Javascript in server(Node) Support

	1. Synchronous execution

		* Everything runs in code sequence
		* Single thread of control

	2. Asynchronous execution

		* some code may run independently of other
		* multiple threads of control
		* can't rely on strict linear execution


					* Analysis

					Pros 		Cons
		---------------------------------
		Sync 	Simple 		| Slow
		Async   Performant  | Complicated
*/

// Helper Function
const fs = require('fs');
const moment = require('moment');

function accurateTime() {
	return moment().format("HH:mm:ss.SSS");
}

function timeStamp(message) {
	console.log(`${accurateTime()} - ${message}`);
}


function storyContent(content, count) {
	const firstBit = content.substring(0, count);
	const lastBit = content.substring(content.length - count);
	return [firstBit, "...", lastBit].join("\n");
}

// Synchronous JavaScript code to read file and output its contents
// function synchronousRead() {
// 	timeStamp('Read');
// 	const content = fs.readFileSync('anthem.txt', 'utf8');
// 	timeStamp('Output');
// 	timeStamp(storyContent(content, 100));
// 	timeStamp('Done');
// }

// synchronousRead();

// * Timestamp in expected order
// * Read complete before output logged to console


/* 
	Asynchronous JavaScript with Callbacks
		* All asynchronous functions in Node take as their final argument a callback function

		Behaviour

		1. Our code calls async function and returns immediately

			* our code goes about its business
			* async function undertakes its task in the background
			* async function might take a long time (eg. read a file)

		2. when async function complets its calls the callback function

			* yes that's why it's called that
			* the callback is our code we want to run after the async function
			* we don't know how long the async function will run, so It Calls Us


	Node Conventions
		Most callack functions take at least two arguments

		This is a Node convention, not necessary the way is done everywhere

		fs.readFile('anthem.txt', 'utf8', (err, data) => { });

			1. An err value
			2. Whatever data is returned by the function

		What is Truth?
		* in JS, all values are truthy unless they are defined as falsy (i.e false, 0, -0, "", null, undefined,NaN)
		if err falsy
			1. Asynchronous function has succeed
			2. Result may be found in data

		if err truthy
			1. Async function failed
			2. err contains JS Error object
			3. No additional parameters have meaningful data 
*/

// Asynchronous Read

// function asynchronousRead() {
// 	timeStamp('Read');

// 	fs.readFile('anthem.txt', 'utf8', (err, data) => {
// 		if(err) 
// 			throw err
// 		timeStamp('Output')
// 		timeStamp(storyContent(data, 100));

// 	});

// 	timeStamp('Done');
// }

// asynchronousRead();



// 	Pyramid of Doom (A.K.A Callback Hell)

// 	1. we often want to call async functions one after another

// 	2. want the first/previous functions to finish befre calling the next one

// 	3. each subsequent function call must be inside the callback of the previous function

// 	4. Lead to deep code nesting

// 		* Hard to write
// 		* Hard to debug
// 		* Called the pyramid of doom or callback hell


// // Code Example

function readDirectory() {
		fs.readdir('../.', (err, files) => {
		if(err) {
			console.error(`Error reading directory: ${err}`);
		} else {
			files.forEach(fileName => {
				fs.stat(fileName, (err, stats) => {
					if(err) {
						console.error(`Can't stat ${fileName}`);
					}else {
						console.log(`${fileName} has ${stats.size} bytes`);
					}
				});
			});
		}
	});
}

readDirectory();