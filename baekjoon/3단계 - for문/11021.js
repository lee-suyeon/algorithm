/* 
🛼 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let n = input[0];
for(let i = 1; i <= n; i++){
  let num = input[i].split(' ');
  let sum = Number(num[0]) + Number(num[1]);
  console.log(`Case #${i}: ${sum}`);
}

// 11022
let n = input[0];
for(let i = 1; i <= n; i++){
  let num = input[i].split(' ');
  let sum = Number(num[0]) + Number(num[1]);
  console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${sum}`);
}