/* 
๐ผ ๋ฌธ์ 
๋ ์ ์ A์ B๊ฐ ์ฃผ์ด์ก์ ๋, A์ B๋ฅผ ๋น๊ตํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
*/
const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a > b) {
  console.log('>')
} else if(a < b) {
  console.log('<')
} else {
  console.log('==')
}