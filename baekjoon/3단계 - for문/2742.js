/* 
πΌ λ¬Έμ 
μμ°μ Nμ΄ μ£Όμ΄μ‘μ λ, 1λΆν° NκΉμ§ ν μ€μ νλμ© μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμμ€.
*/

const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim()

let answer = "";
for(let i = n; i > 0; i--){
  answer += i + "\n";
}
console.log(answer);