/* 
🛼 문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = Number(input)
console.log(n * (n + 1) / 2);