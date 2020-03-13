const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('from server');
    res.end();
}).listen(8080, ()=>{
    console.log('Server start at port 8080');
})