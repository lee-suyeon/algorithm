## Day 9 Recursion 3

---

<br />

**Objective**  
Today, we are learning about an algorithmic concept called recursion. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Recursive Method for Calculating Factorial**

_factorial_(N) = 1 ➡️ N &#8804; 1
N x _factorial_(N - 1) _otherwise_

<br />

**Function Description**
Complete the factorial function in the editor below. Be sure to use recursion.

factorial has the following paramter:

- int n: an integer

<br />

**Returns**

int: the factorial of _n_

**Note**: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of 0.

<br />

**Input Format**

A single integer, _n_ (the argument to pass to factorial).

<br />

**Constraints**

- 2 &#8804; _n_ &#8804; 12
- Your submission must contain a recursive function named factorial.

<br />

**Sample Input**

```
3
```

<br />

**Sample Output**

```
6
```

<br />

**Explanation**

Consider the following steps. After the recursive calls from step 1 to 3, results are accumulated from step 3 to 1.

1. _factorial_(3) = 3 x _factorial_(2) = 3 x 2 = 6
2. _factorial_(2) = 2 x _factorial_(1) = 2 x 1 = 2
3. _factorial_(1) = 1

<br />

**Solution**

> 재귀호출을 통해 팩토리얼을 구한다.

<br />

**Code**

```javascript
function factorial(n) {
  if (n === 1) {
    // 함수 종료 조건
    return 1;
  }
  return n * factorial(n - 1);
}
```

<br />

**Review**

> 🔹 재귀(Recursion) : 함수가 본인 스스로를 호출해서 사용  
> 🔹 `n`이라는 숫자를 받았을 때, `n`과 `factorial(n-1)`을 곱한 값을 리턴한다.  
> 🔹 내부적으로 호출된 `factorial`함수를 따라가다 보면 n = 1인 상황이 오게 된다. 그때는 1을 `return` 하도록 (함수가 더이상 호출되지 않도록) 조건문을 추가한다.  
> 🔹 `n`이 4일 경우 : factorial(4) ➡️ factorial(3) ➡️ factorial(2) ➡️ factorial(1) ➡️ 1 ➡️ 1 _ 2 ➡️ (1 _ 2) _ 3 ➡️ (1 _ 2 _ 3) _ 4
