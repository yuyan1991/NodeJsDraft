'use strict';

var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

var server = http.createServer(function (request, response) {
	var path = request.url.pathname;

});