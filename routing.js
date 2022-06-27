var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res)
{
    console.log('request was made: ' + req.url);
    if(req.url==='/home' ||req.url==='/')
    {
    res.writeHead(200, {'Content-Type':'text/html'});
   var readStream=fs.createReadStream(__dirname +'/index.html');
   readStream.pipe(res);
    }
    else if(req.url==='/contact')
    {
    res.writeHead(200, {'Content-Type':'text/html'});
   var readStream=fs.createReadStream(__dirname +'/contact.html');
   readStream.pipe(res);
    }
    else if(req.url==='/selfdetails')
    {
        var details=[{name:'saiteja',age:22} ,{name:'yoshi',age:23}];
        res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(details));
    }
    else
    {
        res.writeHead(200, {'Content-Type':'text/html'});
   var readStream=fs.createReadStream(__dirname +'/error.html');
   readStream.pipe(res); 
    }
});
server.listen(3000,'127.0.0.1');
console.log('now listening port 3000');