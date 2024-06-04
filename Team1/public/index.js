// * 초기화 된 변수 배열에 데이터가 추가 될 곳
// * 계속 추가 될 수 있는 부분 / 임시로 하나만 설정
const user = [
  { userID : "user1", userPW : "pass123" }
];

// * 해당 태그들 불러옴
const button = document.querySelector("#btn");

// * 해당 id와 pw이 값을 입력했을때 user 데이터 배열에 추가되게끔 유도
// * userID와 PW가 데이터 타입이 문자열인 형식일때만 적용 / 그게 아니라면 에러가 뜨게끔 적용
button.addEventListener("click", () => {
  const userID = document.querySelector("#user_id").value;
  const userPW = document.querySelector("#user_pw").value;

  if (typeof userID === "string") {
    if (typeof userPW === "string") {
      console.log("회원가입이 가능한 아이디와 비밀번호 입니다");
      user.push({ userID, userPW });
    } 
    else {
      console.error("아이디와 비밀번호가 잘못되었습니다");
    }
  }
});
console.log(user);
