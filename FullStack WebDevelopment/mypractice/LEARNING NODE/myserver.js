const http = require('http');
const data = require('./data');
let port = 5000;

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'Application\json'});
    res.write(JSON.stringify(data));
    res.end()
}).listen(port,()=>{
    console.log("server listening on port " + port );
});

