'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({});

let txJSON = process.argv[2];
let secret = process.argv[3];

console.log( api.sign(txJSON, secret).signedTransaction ); 