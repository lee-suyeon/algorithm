/* 
๐ผ ๋ฌธ์ 
๋ ์ ์ A์ B๋ฅผ ์๋ ฅ๋ฐ์ ๋ค์, A+B๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
*/

const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

let numArr = arr.forEach(a => a * 1);
for(let i = 0; i < n; i++){
  console.log(numArr[i * 2] + numArr[i * 2 + 1]);
}