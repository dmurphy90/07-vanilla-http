'use strict';

const server = require('./lib/server.js');
const cowsay = require('cowsay');

server.start(3000, () => console.log('Listening on Port 3000'));