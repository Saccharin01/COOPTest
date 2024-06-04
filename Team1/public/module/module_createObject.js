// * 해당 함수는 아이디와 비밀번호를 매개변수로 받아서 객체로 변화시켜주는 생성자 함수입니다.
// * id가 문자열이 아닐경우는 error를 띄워서 멈추게 하였습니다.


class makeObject {
  // * logic : id와 password를 매개변수를 받아서 객체를 생성합니다.
  // * logic : set을 사용하여 id에는 문자열만을 받도록 하였습니다.
  constructor (id,password) {
    this.id = id;
    this.password = password;
  }
  
  set id(value) {
    if(typeof(value)==="string"){
      this._id = value;
    } else {
      console.error('이것은 문자열이 아닙니다.');
    }
  }
}

let test = new makeObject(`asdasd0112`,12121212)
console.log(test)