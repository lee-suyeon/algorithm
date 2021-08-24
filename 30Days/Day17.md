## Day 17 More Exceptions

---

**Objective**  
Yesterday's challenge taught you to manage exceptional situations by using try and catch blocks. In today's challenge, you will practice throwing and propagating an exception. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Task**  
Write a Calculator class with a single method: int power(int,int). The power method takes two integers, _n_ and _p_, as parameters and returns the integer result of _n^p_. If either _n_ or _p_ is negative, then the method must throw an exception with the message: n and p should be non-negative.

**Note:** Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.

<br />

**Input Format**

Input from stdin is handled for you by the locked stub code in your editor. The first line contains an integer, _T_, the number of test cases. Each of the _T_ subsequent lines describes a test case in 2 space-separated integers that denote _n_ and _p_, respectively.

<br />

**Constraints**

- No Test Case will result in overflow for correctly written code.

<br />

**Output Format**

Output to stdout is handled for you by the locked stub code in your editor. There are _T_ lines of output, where each line contains the result of _n^p_ as calculated by your Calculator class' power method.

<br />

**Sample Input**

```
4
3 5
2 4
-1 -2
-1 3
```

<br />

**Sample Output**

```
243
16
n and p should be non-negative
n and p should be non-negative
```

<br />

**Explanation**  
_T_ = 4  
_T0_: 3 and 5 are positive, so power returns the result of 3^5, which is 243.
_T1_: 2 and 4 are positive, so power returns the result of 2^4 =, which is 16.  
_T2_: Both inputs (-1 and -2) are negative, so power throws an exception and n and p should be non-negative is printed.  
_T3_: One of the inputs (-1) is negative, so power throws an exception and n and p should be non-negative is printed.

<br />

**Solution**

> 주어진 두 수가 양수일 경우 제곱을 계산한 결과를 리턴
> 두 숫자중 하나라도 음수일 경우는 주어진 문구를 출력한다.
> 에외 구문을 사용한다.

<br />

**Code**

```javascript
class Calculator {
  power(n, p) {
    try {
      if (n >= 0 && p >= 0) {
        return Math.pow(n, p);
      } else {
        throw "n and p should be non-negative";
      }
    } catch (error) {
      return error;
    }
  }
}
```
