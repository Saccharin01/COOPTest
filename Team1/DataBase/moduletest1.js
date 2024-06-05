//import로 public/module/module_createObject.js 를 가져오자
import {makeObject} from "../public/module/module_createObject.js"
// 우선 최소한 내가 아는 콘솔 표시해서 나오는지 테스트
let a = new makeObject("ㅁㄴㅇㄴㅁㅇ","ㄴㅁㅇㄴㅁ");
console.log(a);

import {appearBtn} from "../public/module/module_appearSendBtn.js"
let b = appearBtn("a","s","d");
console.log(b);