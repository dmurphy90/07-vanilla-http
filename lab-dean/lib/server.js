'use strict';

const http = require('http');
const bodyParser = require('./body-parse');
const cowsay = require('cowsay');
const queryString = require('querystring');

const app = http.createServer((req, res) => { 
  // req.url.query = queryString.parse(req.url.query); 
  
  bodyParser(req)
    .then(request => {
      if(request.method === 'GET' && request.url.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('hello from my server!');
        res.end();
        return;
      }

      if(request.method === 'GET' && request.url.pathname === `/cowsay`) {
        if(request.url.query.text) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write(cowsay.say({
            text: `${req.url.query.text}`,
          }));
          res.end();
          return;
        }
        
      }

      if(request.method === 'POST' && request.url.pathname === '/cowsay') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(request.body));
        res.end();
        return;
      }
      
      

      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({text: 'Bad Request'}));
      res.end();
      return;
    })
    .catch(err => {
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write(cowsay.say({text: 'An error, this feels like Deja Moo..'}));
      res.end();
      return;
    });
});


const server = module.exports = {};
server.start = (port, cb) => app.listen(port, cb);
server.stop = (cb) => app.close(cb);