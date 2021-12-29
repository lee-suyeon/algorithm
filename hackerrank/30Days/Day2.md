## Day 2 Operators

---

**Objective**

In this challenge, you will work with arithmetic operators. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-operators/tutorial) tab for learning materials and an instructional video.

**Task**  
Given the *meal price* (base cost of a meal), *tip percent* (the percentage of the *meal price* being added as tip), and *tax percent* (the percentage of the *meal price* being added as tax) for a meal, find and print the meal's *total cost*. **Round the result to the nearest integer.**

<br />

**Example**

- meal cost = 100
- tip percent = 15
- tax percent = 8

A tip of 15% _ 100 = 15, and the taxes are 8% _ 100 = 8. Print the value **123**  and return from the function.

**Function Description**Complete the *solve* function in the editor below.

*solve* has the following parameters:

- *int meal_cost:* the cost of food before tip and tax
- *int tip_percent:* the tip percentage
- *int tax_percent:* the tax percentage

Returns The function returns nothing. Print the calculated value, rounded to the nearest integer.

**Note:** Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.

<br />

**Input Format**

There are  **3** lines of numeric input:

The first line has a double, *meal_cost*(the cost of the meal before tax and tip).

The second line has an integer, *tip_percent*(the percentage of  *meal_cost* being added as tip).

The third line has an integer, *tax_percent*(the percentage of *meal_cost* being added as tax).

<br />

**Sample Input**

```jsx
12.0;
20;
8;
```

**Sample Output**

```jsx
15;
```

<br />

**Explanation**  
Given: _meal_cost_ = 12, _tip_percent_ = 20, _tax_percent_ = 8  
Calculations:  
_tip_ = 12 and 12/100 X 20 = 2.4  
_tax_ = 8 and 8/100 X 20 = 0.96  
_totla_cost_ = _meal_cost_ + _tip_ + _tax_ = 12 + 2.4 + 0.96 = 15.36  
round(_totla_cost_) = 15
We round total_cost to the nearest integer and print the result, **15**

<br />

**Solution**

> 💡 계산한 결과는 가장 가까운 정수로 반올림 하여 출력한다.

<br />

**Code**

```javascript
function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let mealCost = meal_cost;
  let tip = (mealCost / 100) * tip_percent;
  let tax = (mealCost / 100) * tax_percent;

  let result = Math.round(mealCost + tip + tax);

  console.log(result);
}
```

<br />

**Review**

- `Math.round()` : 입력값을 **반올림**한 수와 가장 가까운 정수 값을 반환한다.
- `Math.ceil()` : 주어진 숫자보다 크거나 같은 숫자 중 **가장 작은 숫자**를 정수로 반환한다. ➡️ <span style="color:salmon">올림</span>
- `Math.floor()` : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다. ➡️ <span style="color:salmon">내림</span>

<br />

**Reference**

> [[MDN Web Docs] Math.round()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/round)  
> [[MDN Web Docs] Math.ceil()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)  
> [[MDN Web Docs] Math.floor()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
