## Day 5 Loops

---

<br />

**Objective**  
In this challenge, we will use loops to do some math. Check out the Tutorial tab to learn more.

<br />

**Task**  
Given an integer, _n_, print its first _10_ multiples. Each multiple _n x i_ (where 1 &#8804; _n_ &#8804; 10 ) should be printed on a new line in the form: n x i = result.

<br />

**Example**  
n = 3

The printout should look like this:

```
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
```

<br />

**Input Format**

A single integer, _n_.

<br />

**Constraints**  
2 &#8804; _n_ &#8804; 20

<br />

**Output Format**

Print 10lines of output; each line _i_(where 1 &#8804; _n_ &#8804; 10) contains the _result_ of _n x i_ in the form:
n x i = result.

<br />

**Sample Input**

```
2
```

<br />

**Sample Output**

```
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

<br />

**Solution**

> 주어진 정수에 1 ~ 10까지 곱한 결과를 출력한다.

**Code**

```javascript
function main() {
  const n = parseInt(readLine().trim(), 10);

  // i가 0부터 시작할 때
  for (let i = 0; i < 10; i++) {
    console.log(`${n} x ${i + 1} = ${n * (i + 1)}`);
  }

  // i가 1부터 시작할 때
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
```

**Review**
