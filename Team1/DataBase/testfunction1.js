//import테스트를 위한 export 함수만들기


export class test1 {
  constructor(a,b) {
    this.a = a,
    this.b = b
  }
  set(value){
    if(value === "number"){
      this._id = value;
    }else{
      console.log("숫자 말고 다른 것 넣어주세요");
    }
  }
}

export function add2(a,b) {
  return a*b;
};

