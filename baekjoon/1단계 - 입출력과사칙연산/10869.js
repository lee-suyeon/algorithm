/* 
๐ผ ๋ฌธ์ 
๋ ์์ฐ์ A์ B๊ฐ ์ฃผ์ด์ง๋ค. 
์ด๋, A+B, A-B, A*B, A/B(๋ชซ), A%B(๋๋จธ์ง)๋ฅผ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค. 
*/

const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);