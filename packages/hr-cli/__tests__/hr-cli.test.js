'use strict';

const hrCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(hrCli(), 'Hello from hrCli');
console.info('hrCli tests passed');
