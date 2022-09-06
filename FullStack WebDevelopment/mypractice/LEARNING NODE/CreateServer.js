const http = require('http');
const fs = require('fs');

server = http.createServer((req,res)=>{
    res.writeHead('200',{'Content-Type': 'text/html'})     //{'Content-Type': 'application/json'}    -- if we want to display json dta then we write this inside writehead area
    fs.readFile('index.html',(err,data)=>{
        if (err) {
            throw err;
        }
        else{
            res.end(data)                  //if we want oto host json then  here we can put our json data using json strigfy format ex:- res.end(JSON.stringfy(jsondata))
        }
    })
})

const port = 3000;
server.listen(port,(err)=>{
    if (err) {
        throw err
    }
    console.log("server is running on port "+ port );
})



