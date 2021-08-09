## Day 7 Arrays

---

<br />

**Objective**  
Today, we will learn about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Task**  
Given an array, _A_, _N_ of integers, print _A_'s elements in reverse order as a single line of space-separated numbers.

<br />

**Example**  
_A_ = [1, 2, 3, 4]

Print 4 3 2 1. Each integer is separated by one space.

<br />

**Input Format**

The first line contains an integer, _N_ (the size of our array).
The second line contains _N_ space-separated integers that describe array _A_'s elements.

<br />

**Constraints**

- 1 &#8804; _N_ &#8804; 1000
- 1 &#8804; _A_[_i_] &#8804; 10000, where _A_[_i_] is the ith integer in the array.

<br />

**Output Format**

Print the elements of array in _A_ reverse order as a single line of space-separated numbers.

<br />

**Sample Input**

```
4
1 4 3 2
```

<br />

**Sample Output**

```
2 3 4 1
```

<br />

**Solution**

> 주어진 배열의 요소를 역순으로 출력한다.  
> `N` : 배열의 사이즈  
> `A` : 배열

<br />

**Code**

```javascript
function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const reverseArr = [];
  for (let i = n - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  console.log(reverseArr.join(" "));
}
```

<br />

**Review**

> 역순으로 출력하기 위해 배열의 마지막 요소부터 반복문을 실행했다.  
> `reverse()`를 이용하면 좀 더 쉽게 역순으로 출력할 수 있다.  
> `join()`로 배열 -> 문자열로 변환. 글자 사이마다 한칸의 공백이 있도록 합쳐준 후 출력한다.
