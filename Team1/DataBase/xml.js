//우선 app.js에 바로 작성하면 꼬일 것을 예상하여 따로 파일을 만들어서 작업
//아직 xml이나 DB에 익숙하지않아 -> 강사님의 코드를 보고 변경하여 만들어본 것입니다. + 찾은 부분 추가
// 그래서 작동하는지 테스트는 하지 못하였음을 알려드립니다.


const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();



let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    if(req.url === `/`){ 
      xml.open('GET', 'http://localhost:8081/datajson.json', ture);
      xml.onreadystatechange  = ()=>{
        if (xhr.readyState === 4 && xml.status === 200) {
          let jData = JSON.parse(xml.responseText);
          console.log(jData);
          console.dir(jData);
        }
      };
      xml.send()
    }
  }
});
