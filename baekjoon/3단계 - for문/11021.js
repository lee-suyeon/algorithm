/* 
๐ผ ๋ฌธ์ 
๋ ์ ์ A์ B๋ฅผ ์๋ ฅ๋ฐ์ ๋ค์, A+B๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
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