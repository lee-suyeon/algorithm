/* 
๐ผ ๋ฌธ์ 
N์ ์๋ ฅ๋ฐ์ ๋ค, ๊ตฌ๊ตฌ๋จ N๋จ์ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค. 
์ถ๋ ฅ ํ์์ ๋ง์ถฐ์ ์ถ๋ ฅํ๋ฉด ๋๋ค.
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

for(let i = 1; i <= 9; i++){
  console.log(`${input} * ${i} = ${input * i}`);
}