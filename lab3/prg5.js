import http from "http";

const server = http.createServer((req,res)=>{

   // req method -> GET, POST, PUT(approx all data change), DELETE, PATCH(single data change)
   console.log('Method:', req.method);
   console.log("URL:", req.url);

   // Browse can send only GET request to the server
   //POST/PUT/PATCH/DELETE -> Can be checked by api tester
   // API Tester:- postman, echo api, thunder client

if(req.url === '/') {
 res.setHeader("content-type",  "text/html");
 res.end("<h1> Hello Server</h1>");   
} 
else if(req.url === "/product") {
   const products = [ 
                   { id: 1,name: "bottle"},
                   { id: 2,name: "laptop"}, 
                  ];
                   res.writeHead(200, {"content-type": "application/json"});
                   res.end(JSON.stringify(products));  
}
else {
   res.end();
}
}); 

server.listen(5000, () => console.log("prg5 is running"));