'use strict';

const server = require('../lib/server.js');
const superagent = require('superagent');
const cowsay = require('cowsay');

describe('Server Module', function() {
  beforeAll(() => server.start(4444));
  afterAll(() => server.stop());

  describe('Valid Request to the API', () => {
    describe('GET /', () => {
      it('should respond with a status of 200', () => {
        return superagent.get(':4444/')
          .then(res => {
            expect(res.status).toBe(200);
          });    
      });
      it('should respond with the correct string', () => {
        return superagent.get(':4444/')
          .then(res => {
            expect(res.text).toMatch(/hello/);
          });
      });
      it('should return a valid object', () => {
        return superagent.get(':4444/')
          .then(res => {
            expect(res.body).toBeInstanceOf(Object);
          });
      });
    });
    describe('GET /cowsay', () => {
      it('should respond with a status of 200', () => {
        return superagent.get(':4444/cowsay?text=testing')
          .then(res => {
            expect(res.status).toBe(200);
          });   
      });
      it('should return the text from query', () => {
        return superagent.get(':4444/cowsay?text=testing')
          .then(res => {
            expect(res.text).toBe(cowsay.say({ text: 'testing'}));
          });
      });
      it('should return a valid object', () => {
        return superagent.get(':4444/cowsay?text=testing')
          .then(res => {
            expect(res.body).toBeInstanceOf(Object);
          });
      });
    });
    describe('POST', () => {
      it('should respond with a status of 200', () => {
        return superagent.post(':4444/cowsay?text=testing')
          .send({text: 'test'})
          .then(res => {
            expect(res.status).toBe(200);
          });   
      });
      it('should return an object matching the query text', () => {
        return superagent.post(':4444/cowsay?text=testing')
          .send({'text': 'testing'})
          .then(res => {
            expect(res.text).toMatch(/testing/);
          });  
      });
      it('should return a valid object', () => {
        return superagent.post(':4444/cowsay?text=testing')
          .send({'text': 'testing'})
          .then(res => {
            expect(res.body).toBeInstanceOf(Object);
          }); 
      });
    });
  });

  describe('Invalid Request to the API', () => {
    describe('GET /cowsay', () => {
      it('should send 400 if no data is sent', () => {
        return superagent.get(':4444/cowsay?text=')
          .send()
          .then(res => {
          })
          .catch(err => {
            expect(err.status).toBe(400);
          });
      });
      it('should return an object on error', () => {
        return superagent.get(':4444/cowsay?text=')
          .then(res => {
          })
          .catch(err => {
            expect(err).toBeInstanceOf(Object);
          });
      });
    }); 
    describe('POST /cowsay', () => {
      it('should send 400 if no data is sent', () => {
        return superagent.post(':4444/cowsay?text=')
          .send()
          .then(res => {
          })
          .catch(err => {
            expect(err.status).toBe(400);
          });
      });
      it('should return an object on error', () => {
        return superagent.post(':4444/cowsay?text=')
          .send()
          .then(res => {
          })
          .catch(err => {
            expect(err.status).toBe(400);
          });
      });
    });
  });
});