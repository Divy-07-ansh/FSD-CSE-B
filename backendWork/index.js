const http= require("http")
const PORT=4005;
const sum=require("./getdata.js")

const server=http.createServer(async(req,res)=>{
    // res.setHeader('Content-Type','text/html');
    // res.end("<h2>hiii...</h2>");
    if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        res.end('<h2 style=color:red>Welcome to Server</h2>')
    }
    if(req.url=="/data" && req.method=="POST"){
        const result=await sum();
        console.log("result"+result);
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:result}));
    }

    if(req.url=="/data" && req.method=="PUT"){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({msg:"Data updated successfully"}));
    }
    // console,log(Object.keys(req)) 
})

server.listen(PORT,()=>{
    console.log('Server is running on ${PORT}')
})