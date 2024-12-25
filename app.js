const http = require('http');

const PORT = 9000

const server = http.createServer((req,res) => {
    
  if(req.url === "/"){
    res.end("i am home page")
  }
  if(req.url === "/about"){
    res.end("i am about page hello world hhhhhhhhhhh")
  }
}
)

server.listen(PORT)