## Day 13 Abstract Classes

---

<br />

**Objective**  
Today, we will extend what we learned yesterday about Inheritance to Abstract Classes. Because this is a very specific object oriented concept, submissions are limited to the few languages that use this construct. Check out the Tutorial tab for learning materials and an instructional video.

<br />

**Task**  
Given a Book class and a Solution class, write a MyBook class that does the following:

- Inherits from Book
- Has a parameterized constructor taking these 3 parameters:
  1. string _title_
  2. string _author_
  3. int _price_
- Implements the Book class' abstract display() method so it prints these 3 lines:

1. Title:, a space, and then the current instance's _title_.
2. Author:, a space, and then the current instance's _author_.
3. Price:, a space, and then the current instance's _price_.
   **Note:** Because these classes are being written in the same file, you must not use an access modifier (e.g.:public) when declaring MyBook or your code will not execute.

<br />

**Input Format**
You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

<br />

**Output Format**
The _void display()_ method should print and label the respective _title_, _author_, and _price_ of the MyBook object's instance (with each value on its own line) like so:

```
Title: $title
Author: $author
Price: $price
```

**Note:** The $ is prepended to variable names to indicate they are placeholders for variables.

<br />

**Sample Input**
The following input from stdin is handled by the locked stub code in your editor:

```
The Alchemist
Paulo Coelho
248
```

<br />

**Sample Output**

The following output is printed by your display() method:

```
Title: The Alchemist
Author: Paulo Coelho
Price: 248
```

<br />

**Solution**

> Book 클래스를 상속받는 MyBook클래스를 구현하고 주어진 형식으로 출력한다.

<br />

**Code**

```javascript
class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    let bookObj = {
      Title: this.title,
      Author: this.author,
      Price: this.price,
    };

    for (const [key, value] of Object.entries(bookObj)) {
      console.log(`${key}: ${value}`);
    }
  }
}
```

<br />

**Review**

> 🔹 Book클래스를 상속받는 MyBook 클래스  
> 🔹 bookObj 객체를 만들어 출력할 프로퍼티를 저장한다.  
> 🔹 Object.entires() 메서드를 이용하여 객체 루프를 돌아 출력한다.

<br />

**reference**

> 🔹 `Object.entries()` 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
