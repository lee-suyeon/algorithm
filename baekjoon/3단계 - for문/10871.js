/* 
๐ผ ๋ฌธ์ 
์ ์ N๊ฐ๋ก ์ด๋ฃจ์ด์ง ์์ด A์ ์ ์ X๊ฐ ์ฃผ์ด์ง๋ค. 
์ด๋, A์์ X๋ณด๋ค ์์ ์๋ฅผ ๋ชจ๋ ์ถ๋ ฅํ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.
*/


const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = inputs[0].split(" ")[0];
let X = inputs[0].split(" ")[1];
let arr = inputs[1].split(" ");

// for/if
let result = "";
for(let i = 0; i < N; i++){
  if(Number(arr[i]) < Number(X)) {
    result += arr[i] + " ";
  }
}
console.log(result)

// filter()
let result = arr.filter(n => Number(n) < Number(X));
console.log(result.join(" "))
