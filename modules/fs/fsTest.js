'use strict'

var fs=require('fs');

fs.readFile('data.in', 'utf-8', function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data)
	}
});

fs.readFile('forever.jpg', 'utf-8', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		// console.log(data);
		// var text = data.toString('utf-8');
		// console.log(text);
		console.log(data.length + ' bytes');
	}
});

var data1 = fs.readFileSync('data.in', 'utf-8');
console.log(data1);

var ans = 'Hello, Node.js';
fs.writeFile('data.out', ans, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('ok');
	}
});

fs.writeFileSync('data1.out', ans);

fs.stat('data.in', function (err, stat) {
	if (err) {
		console.log(err);
	} else {
		console.log('isFile: ' + stat.isFile());
		console.log('isDirectory: ' + stat.isDirectory());
		if (stat.isFile()) {
			console.log('size: ' + stat.size);
			console.log('birth time: ' + stat.birthtime);
			console.log('modified time: ' + stat.mtime);
		}
	}
});

var stat = fs.statSync('data.in');
console.log('isFile: ' + stat.isFile());
console.log('isDirectory: ' + stat.isDirectory());
if (stat.isFile()) {
	console.log('size: ' + stat.size);
	console.log('birth time: ' + stat.birthtime);
	console.log('modified time: ' + stat.mtime);
}