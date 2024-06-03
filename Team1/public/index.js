const button = document.getElementById("btn");
// console.log(button);

button.addEventListener("click", () => {
  // body태그안에 id 이름이 user_id인 value값 가져오고 선언된 userID에 할당
  let userID = document.getElementById("user_id").value;
  // console.log(userID); // 값이 잘 할당 되었는지 콘솔로 확인

  // body태그안에 id 이름이 user_pw인 value값 가져오고 선언된 userPw에 할당
  let userPw = document.getElementById("user_pw").value;
  // console.log(userPw); // 값이 잘 할당 되었는지 콘솔로 확인

  // 함수 내 지역변수 선언
  // 고정 값으로 아이디와 비밀번호 기준으로만 로그인처리가 브라우저상에서 작동하게끔 설정 유도
  // 그 외에 아이디랑 비밀번호를 입력시 아이디와,비밀번호를 다시 확인하게끔 알림창이 뜨게끔 설정 유도 
  const jjinID = "user01";
  const jjinPW = "user123";

  if (userID === jjinID) {
    if (userPw === jjinPW) {
      alert("로그인 됐어");
    } else {
      alert("비밀번호를 다시 확인해줘");
    }
  } else {
    alert("아이디를 다시 확인해줘");
  }
});