## Day 6 Let's Review

---

<br />

**Objective**  
Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Task**  
Given a string, _S_, of length _N_ that is indexed from 0 to _N_ - 1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

**Note**: 0 is considered to be an even index.

<br />

**Example**

s = adbecf

Print abc def

<br />

**Input Format**

The first line contains an integer, _T_ (the number of test cases).
Each line _i_ of the _T_ subsequent lines contain a string, _S_.

<br />

**Constraints**

- 1 &#8804; _T_ &#8804; 10
- 2 &#8804; length of _S_ &#8804; 10000

<br />

**Output Format**

For each String _Sj_ (where 0 &#8804; _j_ &#8804; _T_ - 1), print _Sj_'s even-indexed characters, followed by a space, followed by _Sj_'s odd-indexed characters.

<br />

**Sample Input**

```
2
Hacker
Rank
```

<br />

**Sample Output**

```
Hce akr
Rn ak
```

<br />

**Explanation**  
Test Case 0: _S_ = "Hacker"  
S[0] = "H"  
S[1] = "a"  
S[2] = "c"  
S[3] = "k"  
S[4] = "e"  
S[5] = "r"  
The even indices are 0, 2, and 4, and the odd indices are 1, 3, and 5. We then print a single line of space-separated strings; the first string contains the ordered characters from _S_'s even indices (_Hce_), and the second string contains the ordered characters from _S_'s odd indices (_ark_).

Test Case 1: _S_ = "Rank"  
S[0] = "R"  
S[1] = "a"  
S[2] = "n"  
S[3] = "k"  
The even indices are 0 and 2, and the odd indices are 1 and 3. We then print a single line of space-separated strings; the first string contains the ordered characters from _S_'s even indices (_Rn_), and the second string contains the ordered characters from _S_'s odd indices (_ak_).

<br />

**Solution**

> 주어진 문자열의 짝수 / 홀수 인덱스끼리 연결시킨 문자열을 출력한다.

**Code**

```javascript
function processData(input) {
  //Enter your code here
  const word = input.split("\n");
  let result = "";

  for (let i = 1; i < word.length; i++) {
    result = splitString(word[i]);
    console.log(result);
  }
}

function splitString(string) {
  const splitStr = string.split("");

  const evenChar = [];
  const oddChar = [];

  for (let j = 0; j < splitStr.length; j++) {
    if (j % 2 === 0) {
      // 짝수일경우
      evenChar.push(splitStr[j]);
    } else {
      // 홀수일경우
      oddChar.push(splitStr[j]);
    }
  }

  return `${evenChar.join("")} ${oddChar.join("")}`;
}
```

**Review**

> 1. input은 `String`타입이다.
> 2. 'T&nbsp;&nbsp;hacker&nbsp;&nbsp;rank' 형식으로 받게 된다.
> 3. `split()`메소드로 공백을 기준으로 문자열을 나눈다.
> 4. `splitString(string)` 함수는 `string`을 인자로 받아 짝수번째 문자열과 홀수번째 문자열을 분리해서 다시 합친 문자열을 반환한다. -> `split()`, `join()`
> 5. 반환한 결과를 주어진 테스트 횟수만큼 반복문을 돌려 출력한다.

<br />

**Word**

> subsequent 뒤의  
> indices 지수
