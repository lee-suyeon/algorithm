/*
🛼 문제
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오. 
 */

const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log((a + b)% c);
console.log(((a % c) + (b % c))% c);
console.log((a * b)% c);
console.log(((a % c) * (b % c))% c);