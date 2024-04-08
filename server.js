const http = require('http');
const color = require('colors')

http.createServer((req,resp) =>{

        resp.write("hello world".bgGreen);
    resp.end();
}).listen(4500);