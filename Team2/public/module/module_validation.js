//서버에 있는 것들을 모듈화하고 싶었지만 어려움이 있어 js에 있는 것을 모듈로 만들기로 했다.

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

// import checkInputs from './module/module_validation.js';
// //호출할 때
// checkInputs();
