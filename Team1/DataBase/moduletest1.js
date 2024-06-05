//import로 public/module/module_createObject.js 를 가져오자
import {makeObject} from "../public/module/module_createObject.js"
// 우선 최소한 내가 아는 콘솔 표시해서 나오는지 테스트
let a = new makeObject("ㅁㄴㅇㄴㅁㅇ","ㄴㅁㅇㄴㅁ");
console.log(a);

// import {appearBtn} from "../public/module/module_appearSendBtn.js"
// let b = appearBtn("a","s","d");
// console.log(b);

import {test1 , add2} from "./testfunction1.js"
import * as from "./testfunction1.js"
import {add} from "./testfunction2.js"

let b = new test1(1, "testsetset")
let b2 = new test1("qwewqe", "testsetset")
console.log(b);
console.log(b2);

let c = add2(3,4);
console.log(c);
