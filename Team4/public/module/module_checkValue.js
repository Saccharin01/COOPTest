// * 해당 함수는 유효성 검사를 염두하고 제작된 함수입니다.
// * 회원가입에 사용될 아이디가 영어와 숫자만을 사용할때의 경우를 가정하여 만든 함수입니다.

// * logic : 입력된 값과 지정된 다른 값을 비교하는 함수입니다.
// * logic : 같을 경우에는 통과 같지 않을 경우에는 생성이 안되게 하고자 합니다.
// * logic : 해당 함수의 매개변수 input1과 input2는 ID와 Password의 id값을 지정하면 됩니다.
// * logic : standard는 dataType을 입력하시면 됩니다.


// * 다만 해당 함수는 조건을 추가한다면의 이야기이기에 일단은 틀만 잡아둡니다.
// * 만약 정규식을 standard로 사용하고자 하신다면, 함수의 조건문을 수정해야 합니다. 
/*
* let regExp = /^[a-z]{1}[a-z0-9]{5,19}$/g;
* if(regExp.test(input1.value) && regExp.test(input2.value)){
  *  alert('사용가능한 규격입니다!');
  * } else {
  *  console.error("올바른 규격이 아닙니다.")
  * }
*/


export function checkValue(input1,input2,standard){
  if (typeof(input1.value) === standard && typeof(input2.value) === standard) {
    alert('사용가능한 값입니다!');
    } else {
      console.error("올바른 규격이 아닙니다.")
  }
}