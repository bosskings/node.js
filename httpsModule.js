const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h2>Hello World</h2>');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000...');