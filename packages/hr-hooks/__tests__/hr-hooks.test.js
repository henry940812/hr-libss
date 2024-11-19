'use strict';

const hrHooks = require('..');
const assert = require('assert').strict;

assert.strictEqual(hrHooks(), 'Hello from hrHooks');
console.info('hrHooks tests passed');
