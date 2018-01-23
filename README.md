![cf](https://i.imgur.com/7v5ASc8.png) Lab 07: Vanilla HTTP Server
======

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives
* students will be able to identify key qualities of the HTTP protocol
* students will be able to implement an HTTP server using the node.js `http` module

## Requirements
#### Configuration
<!-- list of files, configurations, tools, etc that are required -->
Your lab directory must include
* `.gitignore`
* `.eslintrc.json`
* `.eslintignore`
* `package.json`
* `README.md`

_Note: You will need to `npm i cowsay` for this project_

#### Feature Tasks
##### Documentation:
  - Brief description of you app
  - How to install / get started with your app
  - How to interact with the endpoints
      - Sample requests and example responses
      - _Note: use a code block to show the HTTPie and response format_
  - Create an HTTP Server using the NodeJS `http` module
  - Create a *custom* body parsing module that is used for parsing the body of all **POST** and **PUT** requests

##### GET (request methods) `/`
* For **GET** requests made to `/`, the server should respond with the following:
    * A header containing `Content-Type: text/plain`
    * A status code of **200**
    * A response with the string "hello from my server!"

##### GET `/cowsay?text={message}`
* For all **GET** requests made to `/cowsay`, the server should respond with the following:
    * _Note: the query string should have the key value `text=message`_
    * The response header should include `Content-Type: text/plain`
    * If the query `text=message` is set, respond with:
        * A status code of **200**
        * A response body that includes the value returned from `cowsay.say({ text: <querystring text> })`
    * If the query `text=message` is **not** set, respond with:
        * Status code **400**
        * A body including the value returned from `cowsay.say({ text: 'bad request' })`

##### POST `/cowsay`
* For all **POST** requests made to `/cowsay`, the server should respond with the following:
    * The response header should include `Content-Type: text/plain`
    * If the JSON `{text: message}` is set in the body, respond with:
        * A status code of **200**
        * A response body including the value returned from `cowsay.say({ text: <querystring text> })`
    * If the JSON `{text: message}` is **not** set in the body, respond with:
        * Status code **400**
        * A body including the value returned from `cowsay.say({ text: 'bad request' })`

#### Tests
* _Note: There is no need to unit test the body parser module for this lab_
* Write tests that validate any **GET** request to `/` and assert that the **200** response is received, including the defined response message
* Write tests that validate all **GET** requests to `/cowsay` and assert that the **200** response is received, including the cowsay response message
    - Do not neglect the query string format required for the text message
* Write tests that validate any malformed requests to `/cowsay` and assert that the **400** response is received, including the cowsay response message
* Write tests that validate all **POST** requests to `/cowsay` and assert that the **200** response is received, including the cowsay response message
* Write tests that validate any malformed requests to `/cowsay` and assert that the **400** response is received, including the cowsay response message
    - Do not neglect the request body format required for the text message

#### Stretch
* Add the ability to change the cow file - **ex: dragon, sheep, etc** _(note: this should be done through the querystring)_

## Rubric 10pts
* Documentation: 2pts
* Feature Tasks: 5pts
* Tests: 3pts