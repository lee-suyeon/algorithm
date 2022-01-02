const fs = require('fs');
const n = fs.readFileSync("/dev/stdin").toString().trim();

let star = "*";
for(let i = 0; i < n; i++) {
  console.log(star);
  star += "*";
}