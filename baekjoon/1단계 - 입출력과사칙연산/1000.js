/* 
๐ผ ๋ฌธ์ 
๋ ์ ์ A์ B๋ฅผ ์๋ ฅ๋ฐ์ ๋ค์, A-B๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
*/

const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);