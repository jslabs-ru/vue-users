require('./starter');

var RUN_MOCHA_TESTS = process.env.RUN_MOCHA_TESTS;

if(RUN_MOCHA_TESTS) {
    require('./test/index.js');
}
