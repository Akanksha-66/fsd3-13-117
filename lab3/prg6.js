import http from "http";

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end("Get Request"); 
  }
   else if(req.url === '/' && req.method === 'POST') {
    res.statusCode = 200;
    res.end("Post Request"); 
  }
  else if(req.url === '/' && req.method === 'PUT') {
    res.statusCode = 200;
    res.end("Put Request"); 
  }
  
  else if(req.url === '/' && req.method === 'Delete') {
    res.statusCode = 200;
    res.end("Delete Request"); 
  }
  else {
    res.statusCode = 404;
    res.end('request not found')
  }

});

server.listen(5000, () => console.log("prg6 is running"));