import http from 'http'

const server = http.createServer((req,res)=>{
    const products = {
                       id:1,
            name:"Mobile",
            price: 25000,
             rating:4.5,
             review:200
    };
    if(req.url === "/api/products") {
        res.end(JSON.stringify(products));
    }
    else {
        res.statusCode=404;
        res.end(); 
    }
})

server.listen(30000,()=>console.log('prg4 is running...'))