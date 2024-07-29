const reDirect = (url, loadTime)=>{
    const mainButton = document.getElementById('mainButton');

    const loadingBar = document.querySelector(".innerLoading")
    let condition = 0
    const maxCount = 100;
    let duration = loadTime/maxCount
  
  
    const animation = ()=>{
      if(condition < maxCount){
        
        // setTimeout(()=>{
            condition++
            loadingBar.style.width = `${condition}%`
            console.log(condition)
            setTimeout(animation,duration) 
  
          loadingBar.style.transition = `width ${duration}ms ease-out`;
          mainButton.style.color = `rgba(${condition + 175},0,0,0.8)`
      }else{
        window.location.href = url 
      }
    }
    animation() 
  }




  document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const mainButton = document.getElementById('mainButton');
  
    // '환영합니다' 메시지를 클릭하면 '메인으로 돌아가기' 버튼이 서서히 나타나게 합니다
    welcomeMessage.addEventListener('click', () => {
        console.log(mainButton)
        mainButton.style.display = 'block';

        setTimeout(() => {

            mainButton.style.opacity = '1';
        }, 1500);

        reDirect("./index.html",5000)


    });
  
    // '메인으로 돌아가기' 버튼 클릭 시 index.html로 이동
    mainButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
  });
  