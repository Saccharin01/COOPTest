// 가입하세요! 라는 버튼을 클릭하면 , partition , welcomeSubmit 를 hidden
function welcomeHidden() {
  document.querySelectorAll("button").forEach((button) => {
    if (button.textContent === "가입하세요!") {
      button.addEventListener("click", function () {
        document.getElementById("partition").style.visibility = "hidden";
        document.getElementById("welcomeSubmit").style.visibility = "hidden";
      });
    } else if (button.textContent === "난치킨파야!") {
      button.addEventListener("click", function () {
        button.style.display = "none";
      });
    }
  });
}
welcomeHidden();

// 각 요소 가져오기
const userId = document.getElementById("user_id");
const userPw = document.getElementById("user_pw");
const userPwCheck = document.getElementById("user_pw-check");
const submitBtn = document.getElementById("btn");
submitBtn.style.display = "none";
const root = document.getElementById("root");
console.log(root);

// 입력 값이 변경될 때마다 실행될 핸들러
function checkInputs() {
  if (userId.value && userPw.value && userPwCheck.value) {
    submitBtn.style.display = "block";
  } else {
    submitBtn.style.display = "none";
  }
}

userId.addEventListener("input", checkInputs);
userPw.addEventListener("input", checkInputs);
userPwCheck.addEventListener("input", checkInputs);
