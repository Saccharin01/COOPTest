import { appearBtn } from "../module/module_appearSendBtn.js"


const input1 = document.getElementById('user_id')
const input2 = document.getElementById('user_pw')
const btn = document.getElementById('btn')

console.log(input1);
console.log(input2);

input1.addEventListener('change',function(){appearBtn(input1,input2,btn)});
input2.addEventListener('change',function(){appearBtn(input1,input2,btn)});