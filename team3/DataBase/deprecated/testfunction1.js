//import테스트를 위한 export 함수만들기


export class test1 {
  constructor(a,b) {
    this.a = a,
    this.b = b
  }
  set a(value){
    if(typeof(value) === "number"){
      this._a = value;
    }else{
      console.log("숫자넣어줘");
    }
  }
}

export function test2(a,b) {
  return a*b;
};


