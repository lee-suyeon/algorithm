## Day 3 Intro to Conditional Statements

---

**Objective**
In this challenge, we learn about conditional statements. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Task**
Given an integer, _n_, perform the following conditional actions:

If _n_ is odd, print <u>Weird</u>

> n이 홀수이면 Weird 출력

If _n_ is even and in the inclusive range of 2 to 5, print <u>Not Weird</u>

> n이 짝수이고 2 ~ 5의 범위에 포함되어 있으면 Not Weird 출력

If _n_ is even and in the inclusive range of 6 to 20, print <u>Weird</u>

> n이 짝수이고 6 ~ 20 범위에 포함되어 있으면 Weird 출력

If _n_ is even and greater than 20, print <u>Not Weird</u>

> n이 짝수이고 20보다 크면 Not Weird 출력

Complete the stub code provided in your editor to print whether or not is weird.

<br />

**Input Format**

A single line containing a positive integer, _n_.

<br />

**Constraints**

- 1 &#8804; _n_ &#8804; 100

<br />

**Output Format**

Print Weird if the number is weird; otherwise, print Not Weird.

<br />

**Sample Input 0**

```
3
```

**Sample Output 0**

```
Weird
```

<br />

**Sample Input 1**

```
24
```

**Sample Output 1**

```
Not Weird
```

<br />

**Explanation**

Sample Case 0: _n_ = 3  
_n_ is odd and odd numbers are weird, so we print <u>Weird</u>.

Sample Case 1: _n_ = 24  
n > 20 and is even, so it is not weird. Thus, we print <>Not Weird.</</u>

**Code 01**

```javascript
function main() {
  const N = parseInt(readLine().trim(), 10);

  const isEven = N % 2 === 0;
  const range1 = N >= 2 && N <= 5;
  const range2 = N >= 6 && N <= 20;

  if (!isEven) {
    console.log("Weird");
  } else if (isEven && range1) {
    console.log("Not Weird");
  } else if (isEven && range2) {
    console.log("Weird");
  } else if (isEven && N > 20) {
    console.log("Not Weird");
  }
}
```

> 문제에 주어진 그대로 조건문을 작성했는데 크게 두 부분으로 나눌 수 있을 거 같아서 코드를 수정했다.  
> condition 1은 짝수 / 홀수 판별  
> condition 2는 주어진 범위를 판별  
> 하는 조건문으로 나눠서 다시 작성

<br />

**Code 02**

```javascript
function main() {
  const N = parseInt(readLine().trim(), 10);

  const isOdd = N % 2 === 1;
  const range1 = N >= 2 && N <= 5;
  const range2 = N >= 6 && N <= 20;

  // condition 1
  if (isOdd) {
    console.log("Weird");
  } else {
    // condition 2
    if (range1) {
      console.log("Not Weird");
    } else if (range2) {
      console.log("Weird");
    } else {
      console.log("Not Weird");
    }
  }
}
```

**Word**

> inclusive : 포함한  
> constraints : 제약
