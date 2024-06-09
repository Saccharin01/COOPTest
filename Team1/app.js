const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
let container = [];

let server = http.createServer((req, res)=>{
  if(req.method === 'GET'){
    container.push(req.url)
    if(req.url==='/'){
      fs.readFile('./team1/public/html/index.html', 'utf-8', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          res.writeHead(200, {'content-Type': 'text.html'});
          res.write(data);
          res.end();
        }
      })
    }else if(container.includes(req.url)){
      console.log('this part tracking')
      console.log(container)
    }
  }
})
 

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)