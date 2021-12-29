## Day 11 2D Arrays

---

**Objective**
Today, we are building on our knowledge of arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Context**
Given a 6 x 6 2D Array, _A_:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

We define an hourglass in _A_ to be a subset of values with indices falling in this pattern in _A_'s graphical representation:

```
a b c
  d
e f g
```

There are 16 hourglasses in _A_, and an hourglass sum is the sum of an hourglass' values.

<br />

**Task**  
Calculate the hourglass sum for every hourglass in _A_, then print the maximum hourglass sum.

<br />

**Example**

In the array shown above, the maximum hourglass sum is 7 for the hourglass in the top left corner.

<br />

**Input Format**  
There are 6 lines of input, where each line contains 6 space-separated integers that describe the 2D Array _A_.

<br />

**Constraints**

- -9 &#8804; _A_[_i_][_j_] &#8804; 9
- 0 &#8804; _i_,_j_ &#8804; 5

<br />

**Output Format**
Print the maximum hourglass sum in _A_.

<br />

**Sample Input**

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

<br />

**Sample Output**

```
19
```

<br />

**Explanation**

_A_ contains the following hourglasses:

```
1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
```

The hourglass with the maximum sum (19) is:

```
2 4 4
  2
1 2 4
```

<br />

**Solution**

> 주어진 2차원 배열에서 모래시계 패턴의 합이 최대값인 경우를 출력한다.

**Code**

```javascript
function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let maximum = -9 * 6;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (maximum < sum) {
        maximum = sum;
      }
    }
  }
  console.log(maximum);
}
```

<br />

**Review**

> 🔹 6 x 6 배열이 주어지지만, `index`가 4 이상이 될 경우 모래시계 패턴이 성립되지 않기 때문에 배열의 길이에서 2를 빼준만큼 반복문을 돈다.  
> 🔹 `maximum` 변수에 나올 수 있는 가장 최소값을 저장한다. -9(A[i][j]의 최소값) \* 6 (패턴의 요소 개수)  
> 🔹 `sum` 변수에 모래시계 패턴의 합을 저장한다.
> 🔹 `sum` 값이 구해지면 maximum에 저장된 값과 비교한다. ( `sum`이 더 클 경우 `maximum` 값을 `sum` 값으로 교체한다.)

<br />

**Word**

> subset : 부분집합
> indices : 지수
