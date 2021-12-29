## Day 16 Exceptions - String to Integer

---

**Objective**  
Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. Check out the Tutorial tab for learning materials and an instructional video!

<br />

**Task**
Read a string, _S_, and print its integer value; if _S_ cannot be converted to an integer, print Bad String.

**Note:** You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a 0 score.

<br />

**Input Format**

A single string, _S_.

<br />

**Constraints**

- 1 &#8804; |_S_| &#8804; 6, where |_S_|is the length of string _S_.
- _S_ is composed of either lowercase letters (a - z) or decimal digits (0 - 9).

<br />

**Output Format**

Print the parsed integer value of _S_, or Bad String if _S_ cannot be converted to an integer.

<br />

**Sample Input 0**

```
3
```

**Sample Output 0**

```
3
```

**Sample Input 1**

```
za
```

**Sample Output 1**

```
Bad String
```

<br />

**Explanation**

Sample Case 0 contains an integer, so it should not raise an exception when we attempt to convert it to an integer. Thus, we print the 3.  
Sample Case 1 does not contain any integers, so an attempt to convert it to an integer will raise an exception. Thus, our exception handler prints Bad String.

<br />

**Solution**

> 정수인지 아닌지를 판단하여 출력한다.

**Code**

```javascript
function main() {
  const S = readLine();

  let int = parseInt(S, 10);
  let result = isNaN(int) ? "Bad String" : int;

  console.log(result);
}
```
