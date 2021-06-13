const http = require('http');

const server = http.createServer((req, res)=>{
   res.end("This is my first res");
});

server.listen(3000);
