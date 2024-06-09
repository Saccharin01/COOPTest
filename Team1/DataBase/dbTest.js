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
    console.log('testing')
    console.log(req.url)
    if(req.url === "/submit"){
      let body = '';
      req.on("data", chunk => {
        body += chunk.toString();
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
          fs.readFile('./public/html/index.html', 'utf-8', (err, data)=>{
            if(err){
              res.writeHead(500)
              res.end("submit후 html읽기");
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
});

const port = 8081;
server.listen(port, (err)=>{
  if(err) {
    console.error("서버 리스너 에러");
  }
  console.log(`http://localhost:${port}`);
});