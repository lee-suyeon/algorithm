/* 
πΌ λ¬Έμ 
μν μ μλ₯Ό μλ ₯λ°μ 
90 ~ 100μ μ A, 
80 ~ 89μ μ B, 
70 ~ 79μ μ C, 
60 ~ 69μ μ D, 
λλ¨Έμ§ μ μλ Fλ₯Ό μΆλ ₯νλ νλ‘κ·Έλ¨μ μμ±νμμ€.
*/
const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(score) {
  if(score >= 90) {
    console.log("A");
  } else if(score < 90 && score >= 80) {
    console.log("B");
  } else if(score < 80 && score >= 70) {
    console.log("C");
  } else if(score < 70 && score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

solution(input)