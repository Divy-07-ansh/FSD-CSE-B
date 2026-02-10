const http=require('http');
const sum=require('./fetchAPI')

const PORT=4002;

const server=http.createServer(async (req,res)=>{
// res.setHeader('Content-Type','application/json');
// // res.end('<h2>Welcome to Node Server</h2>')
// res.end(JSON.stringify({msg:"Welcome to Node Server"}))

if(req.url==='/msg' && req.method==="GET"){
    res.setHeader('Content-Type','text/html')
    res.end("<h2>Welcome to Node Server</h2>")
}
else if(req.url==="/data" && req.method==="GET"){
    const data=await sum();
    // const student={
    //     name:"Divyansh",
    //     branch:"CSE",
    //     college:"ABES"
    // }
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({msg:data}))
}
else{
    res.setHeader('Content-Type','text/html')
    res.end("<h2>Invalid end point</h2>")
}

})

server.listen(PORT,()=>{
    console.log("Server is running on "+PORT)
})