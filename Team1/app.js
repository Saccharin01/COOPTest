const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)


let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    //console.log(req.url)
    if(req.url === `/`){
      fs.readFile(`public/html/index.html`, 'utf-8', (err, data)=>{
        if(err){
          fs.mkdir(`public`, (err)=>{
            if(err){
              fs.mkdir(`public/html`, (err)=>{
                if(err){
                  fs.writeFile(`public/html/index.html`, htmlTemplate(``), `utf-8`, (err)=>{
                    if(err){
                      return //console.log(err)
                    }else{
                      //console.log(`All Process Success`)
                    }
                  })
                }else{
                  //console.log(`error occur on public>html : ${err}`)
                }
              })
            }else{
              //console.log(`error occur on Public dir : ${err}`)
            }
          })
        }
        else{
          res.writeHead(200, {'content-Type': 'text/html'})
          res.write(data)
          res.end();
        }
      })
    }
    else if(req.url.startsWith(`/core`)){
      fs.readFile(`public/core.js`, (err, data)=>{
        if(err){
          //console.log(`readFile error : ${err}`);
        }else{
          res.writeHead(200, {'content-Type': 'application/javaScript'});
          res.write(data);
          res.end();
        }
      })
      // //console.log(`checked`)
    }
  }
  else if(req.method === 'POST'){
    console.log(req.url)
    if(res.url){ // ? 이메터?
      console.log(`!!!!`)
    }
    if(req.url === '/submit'){
      //console.log(`process tracking`)
      let body = "";
      req.on('data', (chunk)=>{
        body += chunk.toString();
        //console.log(body)

        // * body 값에 로드 된 것 확인


        const qs = require(`node:querystring`)
        // let splitbody = body.split(`=`)[1]

        // todo 굳이 스플릿으로 쪼갤 필요가 없음, 지금은.
        // //console.log(splitbody)
        // qs.parse(splitbody)
        
        let parseData = qs.parse(body)
        let jsonData = JSON.stringify(parseData)
        //console.log(jsonData, "success")


        // xml.open(`post`, `http://192.168.100.69:8088`)
        xml.open(`post`, `http://localhost:8088`)
        xml.setRequestHeader(`content-type`, `application/json`)
        xml.send(jsonData)
        //console.log(`process Success!!`)
      })
      req.on('load', (data)=>{
        if(data.statusCode === 200){
          console.log(`catch`)
        }
      })
    }
  }
});

let PORT = 8080
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)