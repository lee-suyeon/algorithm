/* 
๐ผ ๋ฌธ์ 
n์ด ์ฃผ์ด์ก์ ๋, 1๋ถํฐ n๊น์ง ํฉ์ ๊ตฌํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input)
console.log(n * (n + 1) / 2);