* 07 HTTP LAB

#Install
First fork and clone the repo, once cloned navigate to the folder titled lab-dean. Install required packages by typing ```npm install``` and ```npm init```. Afterwards type ```nodemon index.js``` to start the server. 

#Commands
By typing ```http://localhost:3000/``` you will receive the message ```hello from my server```

By typing ```http://localhost:3000/cowsay?text=message``` you will receive an ASCII print out of a delightful cow saying whatever you put in place of ```message``` in the URL. For example typing ```http://localhost:3000/cowsay?text=greetings``` will return the following:  
```
 ___________
< greetings >
 -----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#POST Functionality
A function for POST calls has been put in, but will require POSTMAN or a similar application to use. Here is the POST function:
```
if(request.method === 'POST' && request.url.pathname === '/cowsay') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(request.body));
        res.end();
        return;
      }
```

#Testing
The tests are running the POST and GET functions and testing for the following things: a correct HTTP response code, the information being returned as an object, and the object returned has a value matching up to the input values.