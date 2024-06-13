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
    if(req.url === "/"){ // ! checked
      req.on("data", chunk => {
        let container = [];
      
        fs.readFile(`parseData.json`,(err,data)=>{
          if(err){ //? 파일이 없다면
            container.push(JSON.parse(chunk))

            console.log(container)

            let userId = JSON.stringify(container, null, 2) 

            fs.writeFile(`parseData.json`, userId, (err)=>{

              if(err){
                console.log(`WF Caution : ${err}`);
              }
              else{
                console.log(`Process Tracking`)
              }
            })
  
        }else{ //?파일이 있다면 data
          // console.log(JSON.parse(data))
          // console.log(typeof(JSON.parse(data)))
          // console.log(Array.isArray(JSON.parse(data)))

            let origindata = JSON.parse(data)
            console.log(origindata)
            console.log(Array.isArray(origindata))

            let userinpt = JSON.parse(chunk)
            console.log(userinpt)
            console.log(typeof(userinpt))

            origindata.push(userinpt)
            console.log(origindata)

            fs.writeFile(`parseData.json`, JSON.stringify(origindata, null, 2), (err)=>{
              if(err){
                console.log(err)
                res.statusCode = 500
                res.end()
              }else{
                console.log(`Process Tracking`)
                res.statusCode = 200
                console.log(res.end())
                res.end()
              }
            })
          }
        })
      });

      // req.on("end", () => {
      //   const parseData = new URLSearchParams(body);
      //   const id = parseData.get("user_id")
      //   const pw = parseData.get("user_pw")

      //   const json = {
      //     id : id,
      //     pw : pw
      //   };
      //   const jsondata = JSON.stringify(json);
      //   fs.writeFile("database.json",jsondata, (err)=>{
      //     if (err) {
      //       res.writeHead(500)
      //       res.end('json 작성 오류');
      //       return;
      //     }
      //     fs.readFile('./public/html/index.html', 'utf-8', (err, data)=>{
      //       if(err){
      //         res.writeHead(500)
      //         res.end("submit후 html읽기");
      //         return;
      //       }else{
      //         res.writeHead(200, {'content-Type': 'text/html'})
      //         res.end(data);
      //       }
      //     });
      //   })
      // })
    }
    console.log(res.url)
  }
});

const port = 8081;
server.listen(port, (err)=>{
  if(err) {
    console.error("서버 리스너 에러");
  }
  console.log(`http://localhost:${port}`);
});