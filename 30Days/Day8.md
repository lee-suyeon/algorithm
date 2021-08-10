## Day 8 Dictionaries and Maps

---

<br />

**Objective**  
Today, we're learning about <u>Key-Value pair mappings using a Map or Dictionary data structure.</u> Check out the Tutorial tab for learning materials and an instructional video!

<br />

**Task**
Given _n_ names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each _name_ queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for _name_ is not found, print Not found instead.

**Note:** Your phone book should be a Dictionary/Map/HashMap data structure.

<br />

**Input Format**

The first line contains an integer, _n_, denoting the number of entries in the phone book.
Each of the _n_ subsequent lines describes an entry in the form of 2 space-separated values on a single line. The first value is a friend's name, and the second value is an -digit phone number.

After the _n_ lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a _name_ to look up, and you must continue reading lines until there is no more input.

**Note:** Names consist of lowercase English alphabetic letters and are first names only.

<br />

**Constraints**

- 1 &#8804; _n_ &#8804; 10^5
- 1 &#8804; _queries_ &#8804; 10^5

<br />

**Output Format**
On a new line for each query, print Not found if the name has no corresponding entry in the phone book; otherwise, print the full _name_ and _phoneNumber_ in the format name=phoneNumber.

<br />

**Sample Input**

```
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
```

<br />

**Sample Output**

```
sam=99912222
Not found
harry=12299933
```

<br />

**Explanation**  
We add the following _n = 3_ (Key,Value)
pairs to our map so it looks like this:  
_phoneBook_ = {(_sam_, 99912222), (_tom_, 11122222), (_harry_,12299933)}

We then process each query and print key=value if the queried _key_ is found in the map; otherwise, we print Not found.

Query 0: sam
Sam is one of the keys in our dictionary, so we print sam=99912222.

Query 1: edward
Edward is not one of the keys in our dictionary, so we print Not found.

Query 2: harry
Harry is one of the keys in our dictionary, so we print harry=12299933.

<br />

**Solution**

> n : 전화번호부의 항목의 수  
> name - phoneNumber 데이터  
> name : 이름 (전화번호부에 이름이 있는지 확인)  
> 전화번호부에 이름이 있는 경우는 이름-전화번호 형식으로 출력하고 없는 경우는 Not found를 출력한다.

<br />

**Code**

```javascript
function processData(input) {
  //Enter your code here
  const arr = input.split("\n");
  const n = parseInt(arr[0], 10);
  const phoneBook = new Map();

  // mapping phone book
  for (let i = 1; i <= n; i++) {
    const splitArr = arr[i].split(" ");
    phoneBook.set(splitArr[0], splitArr[1]);
  }

  // name find
  for (let j = n + 1; j < arr.length; j++) {
    let name = arr[j];
    if (phoneBook.has(name)) {
      let phoneNumber = phoneBook.get(name);
      console.log(`${name}=${phoneNumber}`);
    } else {
      console.log("Not found");
    }
  }
}
```

<br />

**Review**

> 자료구조 Map을 이용해서 name => phoneNumber 를 맵핑한다.  
> has 메소드를 이용해서 name의 유무를 확인한다.  
> 이름이 있을 경우 get 메소드로 name의 value를 읽어온다.

**Reference**  
Map 🆚 Object

- Map

  - 데이터를 수집하기 위한 다양한 메서드 존재 → `clear()`, `delete()`, `has()` 등
  - 키 타입에 제한이 없다
  - 내부적으로 _해시 테이블_ 을 활용하기 때문에 데이터 검색 속도가 빠르다.
  - _반복 가능(iterable)_ 하며 `for/of` 문으로 순회하면 키와 값으로 구성된 배열을 반환
  - 데이터 개수를 `size` 프로퍼티로 구할 수 있다.

- Object
  - 문자열로 된 키만 사용할 수 있다.
  - 프로퍼티 개수를 수동으로 계산해야한다.

<br />

**Word**

> respective : 각각의  
> denote : 나타내다
