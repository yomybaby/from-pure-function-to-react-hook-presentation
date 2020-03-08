---
marp: true
# header: 'Header content'
footer: 'Developer Circles Bali'
---

<style>
h1 {
  font-size: 60px;
  /* color: #282A36; */
}
</style>

# Pure function & Hooks

> Journey from "Pure function" to "Hooks"

---

> # All React components <br/>must act like **_pure functions_** <br/>with respect to their props.

[reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)

---

![width:150px](https://yostudio.kr/img/yostudio/icon-jong.svg)

# Jong

- Jongeun Lee
- Organizer of JavaScript Developer Forum Korea (jsdev.kr)
- Fullstack Developer
- JavaScript ❤
- react-native, redux, terraform, AWS... 🔎

---

> from

# Why facebook make Hooks?

---

# ✋🏽 Quiz 1. What is this?

## This is based on these fundamental concepts:

- Declarative programming
- Pure functions
- Referential transparency
- Immutability

---

# ✋🏽 Quiz 1-1. Fill in the blank.

## `________` `___________` based on these fundamental concepts:

- Declarative programming
- Pure functions
- Referential transparency
- Immutability

---

![bg left](2019-11-10-21-35-32.png)

# **Functional programming** <br/> in Javascript

by Luis Atencio

---

함수형 프로그래밍은 프로그래밍 언어나 방식을 배우는것이 아니라 함수로 프로그래밍하는 사고를 배우는것이라고 할 수 있다.
// https://velog.io/@kyusung/함수형-프로그래밍-요약

순수 함수를 호출하면 프로그램의 어떠한 변화도 없고, 입력 값에 대한 결과를 예상할수 있어서 테스트하기가 쉽다.

---

> 🥋 Battle of concepts

# Imperative vs. Declarative

간단히 말하여, 명령형 프로그램은 알고리즘을 명시하고 목표는 명시하지 않는 데 반해
선언형 프로그램은 목표를 명시하고 알고리즘을 명시하지 않는 것이다.

어떻게 목표를 만들어야하는지를

What is goal vs. How to make a goal
Describe goal vs. Describe

프로그램이 어떤 방법으로 해야 하는지를 나타내기보다 무엇과 같은지를 설명하는 경우에 "선언형"이라고 한다

박스 안에 박스 안에 박스 안에

코드를 보면 목표(결과)가 뭔지 한눈에 알고
코드를 보면 목표가 뭔지 한눈에 알기 어렵다.

입력을 어디에 넣어서 출력을 얻을 것인가만을 작성하는 프로그래밍
한단계 한단계 어떻게 동작해야하는지를 기술하는 것

그럼 이렇게 좋기만 한게 아니다.
부분 수정을 어떻게?

선억적 프로그래밍과 함수형 프로그래밍의 관계

- https://ko.wikipedia.org/wiki/선언형_프로그래밍

accept input
return output

---

## Imperative programming

- tells the computer, in great detail, how to perform a certain task.

## Declarative programming

- separates program description from evaluation

## 페이지가 HTML에서 무엇을 보여주어야 하는지를 선언하고 브라우저의 절차적 알고리즘이 이것을 화면에 표시할 점들로 변환한다.

# Object Oriented vs. Functional

```javascript
// Snippet A
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}
array; //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// Snippet B
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(num) {
  return Math.pow(num, 2);
});
//-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

---

# Q. What is Functional programming?

a software development style that places a major emphasis on the use of functions

abstract control flows and operations on data
with functions in order to avoid side effects and reduce mutation of state in your application

---

> 객체 지향은 데이터와 데이터 관계의 본질에 초점을 두는 반면, 함수형의 관심사는 해야 할 일, 즉 기능입니다.

출처 : "함수형 자바스크립트"

---

# Q. 함수형 프로그래밍의 목표

부수 효과(side effect)를 방지하고 상태 변이(mutation of state)를 감소하기 위해 데이터의 제어 흐름과 연상을 추상하는 것

---

# FP 이면에 깔려 있는 개념

- 선언적 프로그래밍
- 순수 함수
- 참조 투명성
- 불변성

---

> 다른

# Q. 함수형 프로그래밍이란?

---

# Q. 함수형 프로그래밍이란?

# A. 순수함수를 쓰는 것

---

> 시작하기전 기반 다지기

# 함수

---

# 🤔 What is `Function`?

---

### A. 함수는...

- 입력 => (do something) => 출력
- 입력은 인자, 출력은 리턴 값

  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

---

## 🤔 Pure Function이란?

---

### A. Pure Function은...

- 💧 순수 함수? 뭐가 순수하다는 걸까?
  - 수학 함수 f(x) = x \* 2
  - 변덕이 없다. 한결 같다.
  - 입력이 같으면 결과가 같다.
  - 외부의 무언가를 변경해선 안된다.

---

### 어떻게 순수할 수 있나?

![](https://ws3.sinaimg.cn/large/006tNbRwgy1fwdo7xoutsj307v0esq5q.jpg)

---

### 순수하지 못한 경우를 보자 1/3

> 호출할 때마다 달라지는 값

```javascript
function notPure(a, b) {
  return a + b + Math.random();
}
notPure(1, 2);
notPure(1, 2);
```

---

### 순수하지 못한 경우를 보자 2/3

> 주변 값에 따라 달라질 수 있는 함수

```javascript
var x = 3;
function dirty(a, b) {
  return a + b + x;
}
dirty(1, 2);
x = 4;
dirty(1, 2);
```

---

### 순수하지 못한 경우를 보자 3/3

> 출력값은 같으나 외부를 변경하는 함수

```javascript
var count = 0;
function messUp(a, b) {
  count++;
  return a + b;
}
```

---

### 어떻게 순수할 수 있나?

- 원칙 1
  - 출력값에 영향을 주는 모든 것를 입력으로 받는다.
- 원칙 2
  - 함수 내부의 코드에서 함수 외부의 변수를 접근하지 않는다.
- 원칙 3
  - 외부의 변화는 외부에서 알아서 정해서 할 수 있도록 길을 열어 둠 (예. callback)

---

### 순수하게 바꿔보자 1/4

- 내부에서 random 처럼 가변적인 내용을 제거한다.
- 필요하다면 가변적인 부분을 밖으로 분리한다.

  ```javascript
  function notPure(a, b) {
    return a + b + Math.random();
  }

  function nowPure(a, b, extra) {
    return a + b + extra;
  }

  nowPure(a, b, Math.random());
  nowPure(a, b, Math.random());
  // 입렵이 달라진 것, 입력이 같을 때는 출력이 항상 같음
  ```

---

### 순수하게 바꿔보자 2/4

- 내가 하는 일은 모두 내 안에서!
- 내부에서 외부(예. global)의 값을 참조하지 않는다.

  ```
  // 예 2
  var x = 3;
  function dirty(a, b){
    return a+b+x;
  }

  function notDirty(a, b, extra){
    return a+b+extra;
  }

  notDirty(1, 2, x);
  x = 4;
  notDirty(1, 2, x);
  // 입렵이 달라진 것, 입력이 같을 때는 출력이 항상 같음
  ```

---

### 순수하게 바꿔보자 3/4

- 외부의 내용을 바꾸지 않아야하며 결과를 받아서 밖에서 처리하도록

  ```javascript
  var count = 0;
  function messUp(a, b) {
    count++;
    return a + b;
  }

  function notMessUp(a, b, count) {
    return {
      value: a + b,
      count: count + 1
    };
  }

  const result = notMessUp(1, 2, count);
  count = result.count;
  ```

---

### 순수하게 바꿔보자 4/4

- 외부의 변화이니 외부가 알아서 하도록 callback에 지정하도록 해준다.

  ```javascript
  function notMessUp2(a, b, callback) {
    callback();
    return a + b;
  }

  var count = 0;

  notMessUp2(1, 2, () => {
    count++;
  });
  ```

---

### 어디서 많이 보던 모습?

```javascript
class CountButton extend Component {
  count = 0
  onPress(){
    alert(`${++this.count}번 눌렀어!`);
  }
  render() {
    return <Button
      onPress={this.onPress}
      title="Learn More"
      color="#841584"
    />;
  };
}
```

---

### 💧 순수하면 뭐가 좋은가?

- 입력이 있을 때 결과를 예측할 수 있다.
- 예측하면 추가적으로 테스트를 쉽게 할 수 있다.
  - 예측이 충분히 되기에 예측과 다른지를 비교하도록 테스트 코드 작성

---

## 🤔 리액트 컴포넌트 === 함수?

---

### A. YES! 리액트 컴포넌트는 함수이다.

- ==입력== : `props`
- ==출력==
  - 의미적 출력 : `render`의 return 값(View)
  - 실제 출력 : 함수의 return 값
    - Stateless Component의 경우 : return 값(View)
    - 일반 Component의 경우 : Component 객체
      - 라이프 사이클
      - render 함수
