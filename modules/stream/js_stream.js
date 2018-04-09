'use strict';

var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('data.in', 'utf-8');

rs.on('data', function (chunk) {
	console.log('DATA:')
	console.log(chunk);
});

rs.on('end', function () {
	console.log('END');
});

rs.on('error', function (err) {
	console.log('ERROR: ' + err);
});

var ws1 = fs.createWriteStream('data1.out', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('data2.out');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();

var rs = fs.createReadStream('data.in');
var ws = fs.createWriteStream('data3.out');

rs.pipe(ws);

var rf = fs.createReadStream('data1.out');
var wt = fs.createWriteStream('data4.out');
rf.pipe(wt);