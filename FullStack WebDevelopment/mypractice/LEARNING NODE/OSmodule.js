let os = require('os');


console.log(os.arch());    //x64
console.log(os.platform());  //win32
console.log(os.freemem());   //return freememory bytes of memry

console.log(os.totalmem()); //return totalmemory bytes of memory
console.log(os.type());   //windows_NT

console.log(os.release());  //10.0.18362
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());
// console.log(os.constants);
console.log(os.networkInterfaces());
console.log(os.cpus());

