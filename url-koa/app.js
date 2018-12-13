'use strict';

const koa = require('koa');
// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser');

const app = new koa();

// 导入controller middleware:
const controller = require('./controllers/controller');

// log request URL:
app.use(async (ctx, next) => {
	console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
	await next();
});

// add body parser to app
app.use(bodyParser());

// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');