import { appearBtn as testing }  from "./module/module_appearSendBtn.js";

console.log(testing)
console.dir(testing)

const input1 =  document.getElementById('user_id')
const input2 =  document.getElementById('user_pw')
const btn =  document.getElementById('btn')

console.log(input1, input2,btn)

testing(input1,input2,btn)