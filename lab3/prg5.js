import http from "http";

const server = http.createServer((req,res)=>{

   // req method -> GET, POST, PUT(approx all data change), DELETE, PATCH(single data change)
   console.log('Method:', req.method);
   console.log("URL:", req.url);

   // Browse can send only GET request to the server
   //POST/PUT/PATCH/DELETE -> Can be checked by api tester
   // API Tester:- postman, echo api, thunder client

   

});