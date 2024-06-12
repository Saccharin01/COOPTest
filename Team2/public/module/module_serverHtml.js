//app.js  서버에 있는 fs.readfile을 모듈로 만들 것이다.
//우선 서버에 있는 read파일 부분만 가져온다

// 매개변수를 2개로 만드어 보려고 한다

const fs = require(`fs`)
const htmlserver = (file, htmlname) => {
  fs.readFile(`./public/${file}/${htmlname}.html`, 'utf-8', (err,data)=>{
    if(err){
      console.log(`err occur : ${err}`)
    }else{
      // console.log(data)
    res.writeHead(200, {'content-Type': 'text.html'});
    res.write(data);
    res.end()
    }
  })
}