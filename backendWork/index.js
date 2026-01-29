const http= require("http")
const PORT=4005;

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end("<h2>hiii...</h2>");
})

server.listen(PORT,()=>{
    console.log('Server is running on ${PORT}')
})