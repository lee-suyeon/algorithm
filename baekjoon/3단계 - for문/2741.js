/* 
🛼 문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
*/

const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim()

let answer = "";
for(let i = 1; i <= n; i++){
  answer += i + "\n";
}
console.log(answer);