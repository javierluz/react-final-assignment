const mock = require("@jarvis-catalyst/mockserver");
mock.default({
    createExamples: false,
    dir: __dirname,
    delayResponse: 700,
});