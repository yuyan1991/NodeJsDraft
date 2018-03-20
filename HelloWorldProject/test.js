process.nextTick(function () {
	console.log('nextTick callback!');
});

if (typeof (window) === 'undefined') {
	console.log('node.js');
} else {
	console.log('browser');
}

console.log('nextTick was set!');

