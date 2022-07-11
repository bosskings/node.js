const http = require('http');

//creting a server
http.createServer((req, res) => {
    //send a response
    res.write('Hello world two');
    res.end();
}).listen(5000, ()=> console.log('server running....'));