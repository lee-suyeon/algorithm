/* 
🛼 문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
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
