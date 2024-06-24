//서버에 있는 것들을 모듈화하고 싶었지만 어려움이 있어 js에 있는 것을 모듈로 만들기로 했다.
//컴퍼넌트를 배우면서 활용과 모듈을 같이해보고싶어서 연습으로 만들어보았습니다.

//우선 작동하지는 않습니다 그 이유를 모르겟으나 주소는문제가 없었고 오류 메시지에는 모듈을 찾을수 없다고 하고
// 찾아본 결과 package.json에 type = "module"넣으면 된다고 했으나 결과적으로 작동하지 않았습니다.
//import하는 과정에서 오류가 샌긴듯합니다
//기본 요소 준비
const userId = document.getElementById("user_id");
const userPw = document.getElementById("user_pw");
const userPwCheck = document.getElementById("user_pw-check");
const submitBtn = document.getElementById("btn");

export const checkInputs = () => {
  function checkInputs2() {
    if (userId.value && userPw.value && userPwCheck.value) {
      if (userPw.value === userPwCheck.value) {
        submitBtnone("block")
        PwCheckCol("black")
      }
    } else {
      submitBtnone("none")
      if (userPw.value !== userPwCheck.value) {
        PwCheckCol("red")
      }
    }
  }
  function submitBtnone(onoff) {
    submitBtn.style.display = onoff;
  }    
  function PwCheckCol(col) {
    userPwCheck.style.borderColor = col;
  }

  userId.addEventListener("input", checkInputs2); 
  userPw.addEventListener("input", checkInputs2);
  userPwCheck.addEventListener("input", checkInputs2);
}

//호출할 때
// import checkInputs from './module/module_validation.js';
// checkInputs();

//작동하지 않는다면
//package.json에 type = "module"