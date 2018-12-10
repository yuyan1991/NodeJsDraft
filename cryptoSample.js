'use strict';

var crypto = require('crypto');
// var hash = crypto.createHash('md5');
// var hash = crypto.createHash('sha1');
// var hash = crypto.createHash('sha256');
// var hash = crypto.createHash('sha512');
var hash = crypto.createHmac('sha256', 'secret-key');

hash.update('Hello World');
// console.log(hash.digest('hex'));
hash.update('Hello NodeJS');
// console.log(hash.digest('hex'));
hash.update('Hello World');
console.log(hash.digest('hex'));