const nunjucks = require('nunjucks');
var path = require('path');

function createEnv(path, opts) {
	var
		autoescape = opts.autoescape === undefined ? true : opts.autoescape,
		noCache = opts.noCache || false,
		watch = opts.watch || false,
		throwOnUndefined = opts.throwOnUndefined || false,
		env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path, {
			noCache: noCache,
			watch: watch,
		}), {
			autoescape: autoescape,
			throwOnUndefined: throwOnUndefined
		});
	if (opts.filters) {
		for (var f in opts.filters) {
			env.addFilter(f, opts.filters[f]);
		}
	}

	return env;
}

var viewsPath = path.resolve(__dirname, 'views');
var htmlPath = path.resolve(viewsPath, 'hello.html');

var env = createEnv(viewsPath, {
	watch: true,
	filters: {
		hex: function (n) {
			return '0x' + n.toString(16);
		}
	}
});

var s = env.render(htmlPath, { name: '小明' });
console.log(s); // <h1>Hello 小明</h1>

s = env.render(htmlPath, { name: '<script>alert("小明")</script>' });
// 这样就避免了输出恶意脚本
console.log(s); // <h1>Hello &lt;script&gt;alert("小明")&lt;/script&gt;</h1>

viewsPath = path.resolve(__dirname, 'views');
htmlPath = path.resolve(viewsPath, 'extend.html');

var env2 = createEnv(viewsPath, {
	watch:	true
});

console.log(env.render('extend.html', {
	header:	'Hello',
	body:	'bla bla bla...'
}))