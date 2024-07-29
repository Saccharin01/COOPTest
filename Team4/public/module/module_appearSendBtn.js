// * 해당 함수는 아이디와 비밀번호 두개의 값 모두를 입력해야 버튼이 나타나게 하고 싶을 때 사용하는 것을 가정하고 만든 함수입니다.
// * css속성 visibility를 활용했습니다.

// * logic : 2개의 input데이터를 임의로 input1, input2로 지정했습니다.
// * logic : 두개의 값이 존재할 때, 버튼의 visibility속성을 나타나게 하거나, 혹은 appendChild합니다.


export function appearBtn(input1, input2, btn) {
  if (input1.value !== '' && input2.value !== '') {
    btn.style.visibility = 'visible';
  } else {
    btn.style.visibility = 'hidden';
  }
}