/* 
🛼 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/

const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

let numArr = arr.forEach(a => a * 1);
for(let i = 0; i < n; i++){
  console.log(numArr[i * 2] + numArr[i * 2 + 1]);
}