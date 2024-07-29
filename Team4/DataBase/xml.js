//우선 app.js에 바로 작성하면 꼬일 것을 예상하여 따로 파일을 만들어서 작업
//아직 xml이나 DB에 익숙하지않아 -> 강사님의 코드를 보고 변경하여 만들어본 것입니다. + 찾은 부분 추가
// 그래서 작동하는지 테스트는 하지 못하였음을 알려드립니다.

//?  테스트를 하지 못해서 완성이라고 말하기는 어렵다. 테스트를 하려고 적용했으나 자꾸 실패하여 어떤 부분이 잘못된것을 찾다가 실패하였다.
const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();



let server = http.createServer((req, res)=>{
  if(req.method ===`GET`){
    if(req.url === `/`){ 
      // ! app.js에 적용한다면 적용할 부분
      xml.open('GET', 'http://localhost:8081/datajson.json', ture);
      //아래 부분은 잘은 모르지만 찾아서 작성하였고 js에 이벤트 리스너에 Readystatechange이벤트 하는 것과 비슷해 보임
      xml.onreadystatechange  = ()=>{
        if (xml.status === 200) {
          let jData = JSON.parse(xml.responseText);
          console.log(jData);
          console.dir(jData);
          //만약 html로 할거면 써볼만한 부분  
          // res.writeHead(200, { "Content-Type": 'text/html'});
          // res.end(`<p>${jData.id}</p>`);
        }
      };
      xml.send()
    // ! 적용할 부분 끝 
    }
  }
});
