## Day 10 Binary Numbers

---

**Objective**  
Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

<br />

**Task**  
Given a base-10 integer, _n_, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in _n_'s binary representation. When working with different bases, it is common to show the base as a subscript.

<br />

**Example**
n = 125
The binary representation of 125 is 111101(2). In base 10, there are 5 and 1 consecutive ones in two groups. Print the maximum, 5.

<br />

**Input Format**
A single integer, _n_.

<br />

**Constraints**

- 1 &#8804; _n_ &#8804; 10^6

<br />

**Output Format**

Print a single base-10 integer that denotes the maximum number of consecutive 1's in the binary representation of _n_.

<br />

**Sample Input 1**

```
5
```

**Sample Output 1**

```
1
```

<br />

**Sample Input 2**

```
13
```

**Sample Output 2**

```
2
```

<br />

**Explanation**
Sample Case 1:
The binary representation of 5(10) is 101(2), so the maximum number of consecutive 1's is 1.

Sample Case 2:
The binary representation of 13(10)is 1101(2), so the maximum number of consecutive 1's is 2.

<br />

**Solution**

> 주어진 정수 n을 2진법으로 변환한 후 연속되는 1이 가장 많은 경우를 count해서 반환한다.

**Code**

```javascript
function main() {
  const n = parseInt(readLine().trim(), 10);
  let binary = getBinary(n).split("").reverse();
  let countArr = [];
  let count = 0;

  binary.forEach((b) => {
    if (b == "1") {
      countArr.push(++count);
    } else {
      count = 0;
    }
  });
  let maximum = Math.max(...countArr);
  console.log(maximum);
}

// Binary conversion using recursive function
function getBinary(n) {
  if (n == 1 || n == 0) {
    return String(n);
  }
  return String(n % 2) + getBinary(Math.floor(n / 2));
}
```

**Review**

> 🔹 재귀 함수를 통해 n을 2진법으로 변환했다. (⚠️ 반드시 reverse 해줘야함)  
> 🔹 toString 함수로 쉽게 2진법으로 변환할 수 있었다 😂 `num.toString(2)`  
> 🔹 변환된 2진수를 배열로 만들어 loop를 돌며 연속된 1의 숫자를 `count`해주고 `countArr`요소로 저장한다.  
> 🔹 0을 만나는 경우는 count 변수를 초기화 시켜준다.  
> 🔹 `countArr`에서 `Math.max`를 이용하여 최대값을 찾아 출력한다.

**Word**

> consecutive 연이은
