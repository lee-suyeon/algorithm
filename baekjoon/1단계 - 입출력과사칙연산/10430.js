/*
πΌ λ¬Έμ 
(A+B)%Cλ ((A%C) + (B%C))%C μ κ°μκΉ?
(AΓB)%Cλ ((A%C) Γ (B%C))%C μ κ°μκΉ?
μΈ μ A, B, Cκ° μ£Όμ΄μ‘μ λ, μμ λ€ κ°μ§ κ°μ κ΅¬νλ νλ‘κ·Έλ¨μ μμ±νμμ€. 
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