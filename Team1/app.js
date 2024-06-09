const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)


let server = http.createServer((req, res)=>{
  if(req.method === 'GET'){
    console.log(req.method)
    console.log(req.url)
    if(req.url==='/'){
      fs.readFile('./team1/public/html/test.html', 'utf-8', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          // console.log(data)
          res.writeHead(200, {'content-Type': 'text.html'});
          res.write(data);
          res.end()

        }
      })
    }else if(req.url.startsWith('/style')){
      console.log('tracking')
      fs.readFile('./team1/public/html/style.css', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          console.log(data)
          res.writeHead(200, {'content-Type': 'application/css'})
          res.end(data)
        }
      })
    }
  }
})
 

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)