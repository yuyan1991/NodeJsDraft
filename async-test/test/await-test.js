const assert = require('assert');
const hello = require('../hello');

describe('#hello.js', () => {
    describe('#expression', () => {
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });

        it('#async with done 2.0', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });
    })
});