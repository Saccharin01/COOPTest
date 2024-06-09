const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)


let server = http.createServer((req, res)=>{
  if(req.method === 'GET'){
    console.log(req.method)
    console.log(req.url)
  }
})
 

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)