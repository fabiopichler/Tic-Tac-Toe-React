#! /usr/bin/env node

const open = require('open');

(async () => {
    await open('./coverage/lcov-report/index.html', { wait: true });
})();
