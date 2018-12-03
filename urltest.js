'use strict';

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
var lm = 'aaaa';
console.log(lm==='aaab');
console.log(lm === 'aaaa');