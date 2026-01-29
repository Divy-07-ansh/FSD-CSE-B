const http= require("http")
const PORT=4005;

const server=http.createServer((req,res)=>{
    // res.setHeader('Content-Type','text/html');
    // res.end("<h2>hiii...</h2>");
    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        res.end('<h2 style=color:red>Welcome to Server</h2>')
    }
    if(req.url=="/data" && req.method=="POST"){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:"Data inserted successfully"}));
    }
    // console,log(Object.keys(req))
})

server.listen(PORT,()=>{
    console.log('Server is running on ${PORT}')
})