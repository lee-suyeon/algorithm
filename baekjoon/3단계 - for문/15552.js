/* 
🛼 문제
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let n = input[0];
let result = "";
for(let i = 1; i <= n; i++){
  let num = input[i].split(' ');
  result += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(result);

// 🙉 comment 
/*
입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다. 
입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.
*/