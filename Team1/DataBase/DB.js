// 생각 - 우선 필요한 require 할 것
  // fs , http 
// 우선 내가 아는 방식으로 받아보자
  // 우선은 method가 post방식으로 들어왔을 때 url이 submit이면 json으로 저장되는 것 먼저 구성한다.
// 헤보고 테스트 하면서 facth로 해보자

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  if(req.method === "POST"){
    if(req.url === "/submit"){
      fs.readFile('./public/html/index.html', 'utf-8', (err, data)=>{
        if(err){
          console.log("errr");
        }else{
          res.writeHead(200, {'content-Type': 'text/html'})
          res.write(data)
        }
      });
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
            res.end('오류');
          }
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(jsondata);
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