/* 
🛼 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
*/

const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim();

let star = "*";
let space = Array(n * 1 - 1).fill(" ");
for(let i = 0; i < n; i++) {
  console.log(`${space.join("")}${star}`);
  star += "*";
  space.shift();
}