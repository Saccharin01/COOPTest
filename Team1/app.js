const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)


let server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  if(req.method === 'GET'){
    if(req.url==='/'){
      fs.readFile('./public/html/test.html', 'utf-8', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          // console.log(data)
          res.writeHead(200, {'content-Type': 'text.html'});
          res.write(data);
          res.end()
        }
      })
    }else if(req.url==='/style.css'){
      // console.log('tracking')
      fs.readFile('./public/html/style.css', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          // console.log(data)
          res.writeHead(200, {'content-Type': 'text/css'})
          res.write(data)
          res.end()
        }
      })
    }else if(req.url === '/index.js'){
      fs.readFile('./public/index.js', 'utf-8', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          res.writeHead(200, {'content-Type':'Application/javaScript'})
          res.write(data)
          res.end()
        }
      })
    }else if(req.url === '/favicon.ico'){
      fs.readFile('./public/html/favicon.ico', (err,data)=>{
        if(err){
          console.log(`error occur : ${err}`)
        }else {
          res.writeHead(200, {'content-Type': 'image/ico'})
          res.write(data)
          res.end()
        }
      })
    }
  }
})
 

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)