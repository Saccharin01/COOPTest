// * 1. 임의 변수 a에 빈 배열을 할당
let a = [];

// * 2. 빈 배열 속에 DOM API를 통해서 input 태그의 갯수 만큼 false 값을 적용

const inputs = document.querySelectorAll("input");
// console.log(inputs);
for (let i = 0; i < inputs.length; i++) {
  a.push(false);
}
console.log("false 값이 추가 된 배열", a);

// * 3. DOM API를 이용해서 유저가 입력한 정보를 조회

const form = document.querySelector("form");
// console.log(form)
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 제출 방지

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const value = input.value;
    console.log(`${input.id}:`, value);

// * 4. 조회 된 정보의 데이터 타입이 공백 처리가 되어 있지 않은 문자열인지까지 확인

    if (typeof value === "string" && value.trim() !== "") {
      console.log(`입력 값 ${i}`);
      a[i] = true; // * 5.데이터 타입이 문자열이라면 false 값 중 하나를 true로 변경
    } else {
      console.error(`입력 값이 없어 입력해`);
    }
    input.value = ""; // 입력 값 리셋
  }

  console.log("form submit", a); // 배열 a의 상태를 최종적 확인
});