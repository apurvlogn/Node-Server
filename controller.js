const fs = require('fs');
//url dependency to take the path name
const url = require('url');
// String Decoder to take the buffer data and parse it to utf-8
const StringDecoder = require('string_decoder').StringDecoder;

const handlers = require('./handlers');
const config = require('./config');


var Controller=(req,res)=> {
    //parse the url
 const parsedUrl = url.parse(req.url,true);

    let path = parsedUrl.pathname;

    //trimmed path
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    //Get the query object from the parsedUrl

    let queryObject = parsedUrl.query;
    // Get method from request
    let method = req.method;
    // Get headers from request
    let headers = req.headers;

    let decoder = new StringDecoder('utf-8');
    let buffer = '';

     //feed the streaming data to the buffer variable
    req.on('data',(data)=>{
      buffer += decoder.write(data);
    });

     //when the streaming data is end  , this part of the code always gets hit irrespective of data is sent or not
    req.on('end',(data)=>{
      buffer += decoder.end(data);

        //Intializing and process handler
       var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;
    ;
    // consolidating data to send it as the payload object recived to the respective handler

    const datax ={
        trimmedPath,
        queryObject,
        method,
        headers,
        payload:buffer
    };

    chosenHandler(datax,(statusCode,responsePayload)=>{
        statusCode = typeof statusCode === 'number' ? statusCode :200;


        // get the payload from the handlers
        responsePayload = typeof responsePayload == 'object' ? responsePayload :{};

        //Stringify the payload
        const payloadString = JSON.stringify(responsePayload);

        //Return the response
        res.setHeader('Content-Type','application/json');
        res.writeHead(statusCode);
        res.end(payloadString);


    });
});
}

//defining the router
var router = {
  'hello' : handlers.hello
};
module.exports=Controller;
