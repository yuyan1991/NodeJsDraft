'use strict';

var name = 'Node.js';
var s = `Hello, ${name}!`;

// console.log(s);

var pre = 'Hello';

function greet(name) {
	console.log("greet: " + pre + ", " + name + "!");
}

function sayHi(name) {
	console.log("sayHi: " + pre + ", " + name + "!");
}
module.exports = {
	greet: greet,
	sayHi: sayHi
}
