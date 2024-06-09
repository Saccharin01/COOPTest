// 우선 필요한 require 할 것
// fs , http 
// 우선 내가 아는 방식으로 만들기 시작
//json으로 저장한 후 xml이나 fetch 사용해보자.
//xml방식으로 하는게 맞지 않을까 생각

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)
  if(req.method === "POST"){
    if(req.url === "/"){
      let body = '';
      req.on("data", chunk => {
        body += chunk.toString();
        console.log(body)
        });
      req.on("end", () => {
        const parseData = new URLSearchParams(body);
        const id = parseData.get("user_id")
        const pw = parseData.get("user_pw")

        const json = {
          id : id,
          pw : pw
        };
        const jsondata = JSON.stringify(json);
        fs.writeFile("database.json",jsondata, (err)=>{
          if (err) {
            res.writeHead(500)
            res.end('json 작성 오류');
            return;
          }
          fs.readFile('../public/html/test.html', 'utf-8', (err, data)=>{
            if(err){
              res.writeHead(500)
              res.end("submit and html");
              
              return;
            }else{
              res.writeHead(200, {'content-Type': 'text/html'})
              res.end(data);
            }
          });
        })
      })

    }
  }
  if(req.method === 'GET'){
    if(req.url==='/style.css'){
      // console.log('tracking')
      fs.readFile('../public/html/style.css', (err,data)=>{
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
      fs.readFile('../public/index.js', 'utf-8', (err,data)=>{
        if(err){
          console.log(`err occur : ${err}`)
        }else{
          res.writeHead(200, {'content-Type':'Application/javaScript'})
          res.write(data)
          res.end()
        }
      })
    }else if(req.url === '/favicon.ico'){
      fs.readFile('../public/html/favicon.ico', (err,data)=>{
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
});

const port = 8081;
server.listen(port, (err)=>{
  if(err) {
    console.error("서버 리스너 에러");
  }
  console.log(`http://localhost:${port}`);
});