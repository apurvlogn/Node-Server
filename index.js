/* Base file of the Node-Server app
*  @author :Apurv Singh
*/


//Http/s Dependencies

const http = require('http');
const https=require('https');
const Controller =require('./controller');
const config = require('./config');
const fs = require('fs');
const url = require('url');
//url dependency to take the path name

var httpOptions ={
  'key':fs.readFileSync('./http/key.pem'),
'config':fs.readFileSync('./http/cert.pem'),
};

const httpServer = http.createServer((req,res)=>{
Controller(req,res);

});

httpServer.listen(config.httpPort,()=>console.log('Server is listening to '+ config.httpPort));

const httpsServer = https.createServer(httpOptions,(req,res)=>{
    Controller(req,res);

});
httpsServer.listen(config.httpsPort,()=>console.log('Server is listening to '+config.httpsPort));



