//서버에 있는 것들을 모듈화하고 싶었지만 어려움이 있어 js에 있는 것을 모듈로 만들기로 했다.


function checkInputs() {
  if (userId.value && userPw.value && userPwCheck.value) {
    if (userPw.value === userPwCheck.value) {
      submitBtn.style.display = "block";
      document.getElementById("user_pw-check").style.borderColor = "black";
    }
  } else {
    submitBtn.style.display = "none";
    if (userPw.value !== userPwCheck.value) {
      document.getElementById("user_pw-check").style.borderColor = "red";
    }
  }
}

userId.addEventListener("input", checkInputs);
userPw.addEventListener("input", checkInputs);
userPwCheck.addEventListener("input", checkInputs);