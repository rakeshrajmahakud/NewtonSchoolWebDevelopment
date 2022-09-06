const http = require('node:http');
const fs = require('fs');


////creating a basic http server.
const server = http.createServer((req,res)=>{
    res.writeHead(200,"ok")
    res.write("hello")
    res.end()
});
server.listen(3000, () => {
    console.log('Server created at port 3000');
});

// note:-
// Above code will print a statement to the console but it wont return. This is because a server is running and it blocks one port in the machine and a terminal to keep listening to requests. 

