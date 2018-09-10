var handlers = {};

handlers.hello = function(data,callback){
    var finalPayload = typeof(data.queryObject.user) === 'string' ? data.queryObject.user : 'user';
    callback(200,{'NodeServerHello':{payload:{response:`Hello, ${finalPayload}`}}});
};

// Not found handler
handlers.notFound = function(data,callback){
  callback(404);
};


module.exports = handlers;

