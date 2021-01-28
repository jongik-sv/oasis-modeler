# HTML 공부

[mdn html](https://developer.mozilla.org/ko/docs/Web/HTML)

`html 구조`

![html구조조](https://www.script-tutorials.com/demos/531/structure.png)

> aside가 왼쪽에 오기도 한다.
> Haeader 밑에 nav가 오기도 한다.

# Box와 Item

## Box

- header
- footer
- nav
- aside
- main
- section
- article
- div
- span
- form

## Item

- a
- button
- input
- label
- img
- video
- audio
- map
- canvas
- table

# Block과 Inline

## block level tag

```html
<address> <article> <aside> <blockquote> <canvas>
<dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>
```

## inline level tag

```html
<a> <abbr> <acronym> <b> <bdo>
<big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <textarea> <time> <tt>
```

## span 과 div

html 테스트 싸이트 https://jsbin.com

## input

[참고](https://developer.mozilla.org/en-us/docs/Web/HTML/Element/input)

종류 : 버튼, 체크박스, 컬러피커, 날짜, 이메일, 파일, 히든, 이미지, 월, 숫자, 패스워드, 라디오......

# CSS

온라인 코딩 : https://jsbin.com/didivoquyu/edit?html,css,output

## 캐스캐이드

1. 우리가 만든 CSS
1. 사용자가 지정한 CSS
1. 브라우저 기본 CSS

캐스캐이드를 끊어 내는것 `!important`

## 선택자

1. 모든것 \*
1. type Tag
1. ID #id
1. Class .class
1. state `:`
1. Attribute []

## 예제한번 보자

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <ol>
      <li id="special">first</li>
      <li>second</li>
    </ol>
    <h1 id="special">hello</h1>
    <button>Button 1</button>
    <button>Button 2</button>
    <div class="red"></div>
    <div class="blue"></div>
    <a href="naver.com">naver</a>
    <a href="google.com">Google</a>

    <a>Empty</a>
  </body>
</html>
```

```css
/* 전체 색상 */
* {
  color: green;
}

/* list의 색상 */
li {
  color: blue;
}

/* 리스트 + id 색상 */
li#special {
  color: pink;
}

/* 클래스 */
.red {
  width: 100px;
  height: 100px;
  background: red;
}

/* 버튼에 마우스가 올라갈때 */
button:hover {
  color: red;
  background: beige;
}

/* 링크  */
a[href] {
  color: purple;
}
/* naver로 시작하는 링크  */
a[href^="naver"] {
  color: blue;
}

/* a[href$="com"] ==> com으로 끝나는 링크 */
```

- padding 컨텐츠가 들어가는 곳이 커진다. (박스가 커진다.)
- margin 컨텐츠 밖에 영역(빈곳이 커진다.)

padding 예제(margin 도 동일하게 적용 가능)

```css
/* 전체 패딩이 커진다. */
padding: 20px;

/* left, right, top, bottom으로 한곳씩 지정이 가능하다.  */
padding-top: 20px;

/* top, right, bottom, left 방향(시계방방)으로 4개 다 지정가능하다.  */
padding: 20px 20px 20px 20px;

/* 위아래만 지정한다. */
padding: 20px 0px;
```

- border 바깥 선

```css
/* 선두께, 선스타일, 색상 */
border: 2px dashed red;
```

위의 것들은 [css reference](https://developer.mozilla.org/ko/docs/Web/CSS/Reference)에서 찾아보자.

연습은 [게임](https://flukeout.github.io)으로 하자!

## display

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <div></div>
    <div></div>
    <div></div>
    <span></span>
    <span></span>
    <span></span>
  </body>
</html>
```

```css
/* 이렇게 설정하면 span은 안나온다. */
div,
span {
  width: 80px;
  height: 80px;
  margin: 20px;
  background: pink;
}
```

span은 내용이 있어야만 나온다. span에 값을 넣고 해보자

```html
<span>1</span>
<span>2</span>
<span>3</span>
```

이렇게 바꾸더라도 80px짜리 상자는 아나오고 글자 부분만 색깔이 나온다.

div와 같이 박스 형태로 나오려면 `display: block;` 를 추가하면 된다.

```css
span {
  display: block;
  background: blue;
}
```

div의 css를 `display: inline`로 주면 span과 동일해진다.
반대로 span에 `display : block` 을 주면 div와 동일해진다.

- `display : block` 속성은 한 줄에 하나씩 보이고

- `display : inline-block` 으로 지정하면 인라인형태로 옆으로 붙어서 나온다.

- `display : inline` 으로 지정하면 값이 있어야만 나오고 값이 있으면 한줄에 여러개가 붙어서 나온다.

## position

예제 한번 보자.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <article class="container">
      <div></div>
      <div class="box">I'm Box</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </article>
  </body>
</html>
```

```css
/* 이렇게 설정하면 span은 안나온다. */
div,
span {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  background: red;
}

/* position: relative 지정해줘야 위치가 이동된다. 저 구문이 없으면 이동 안됨  */
.container {
  background: yellow;
  left: 20px;
  top: 20px;
  position: relative;
}

/* 원래 있어야 할 자리에서 추가적으로 더 위치가 변함 */
/* absolute로 바꾸면 바로 위 컨테이너를 기준으로 위치가 바뀜 */
/* fixed로 바꾸면 웹 브라우저에서 위치가 지정된다.  */
.box {
  background: blue;
  left: 20px;
  top: 20px;
  position: fixed;
}
```

- static : 기본값 이동 없음
- relative : 원래 있어야 할 자리에서 이동
- absolute : 자신이 담겨 있는 상자에서 이동
- fixed : 페이지에서 이동
- sticky : 스크롤 되어도 없어지지 않고 원래 위치에 계속 있음

# flexBox

일단 무조건 [[a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)] 참조

## container , item 속성

container 속성

- display
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

item 속성

- order
- flex-grow
- flex-shrink
- flex
- align-selp

<예제>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <!-- emmet 사용 : div.container>div.item.item${$}*10 -->
    <div class="container">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <div class="item item8">8</div>
      <div class="item item9">9</div>
      <div class="item item10">10</div>
    </div>
  </body>
</html>
```

[색상참조 싸이트](https://material.io/resources/color/#!/?view.left=0&view.right=0)

```css
/* height를 100% 지정하면 컨텐츠 만큼만 잡힌다.
그러므로 100vh 로 지정하면 전체 크기로 사용 가능하다.
vh (view height) */
.container {
  background: #fff3e0;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-even;
}

.item {
  width: 40px;
  height: 40px;
  border: 1px solid black;
}

.item1 {
  background: #fff3e0;
}

.item2 {
  background: #ffecb3;
}

.item3 {
  background: #fff59d;
}

.item4 {
  background: #dce775;
}

.item5 {
  background: #9ccc65;
}

.item6 {
  background: #4caf50;
}

.item7 {
  background: #00897b;
}

.item8 {
  background: #0097a7;
}

.item9 {
  background: #0277bd;
}

.item10 {
  background: #0d47a1;
}
```

### 콘테니어 속성

- flex-direction
  - row : 기본값, 가로로 배치
  - column : 세로로 배치
  - \*-reverse : 역방향으로 배치
- flex-wrap
  - nowrap : 기본값, 콘테이너 크기가 줄면 각각 다 줄어든다.
  - wrap : 아이템 크기가 줄어들면 다음줄로 나누어진다.
  - wrap-reverse
- flex-flow
  - direction과 wrap을 합쳐서 한줄로 사용 가능하다.
  - flex-flow: column nowrap;
- justify-content : main axis 방향으로 아이템을 어떻게 배치 할 것인지
  - flex-start : 기본값)
  - flex-end : 오른쪽 또는 아래에 붙인다. (direction에 의해 방향은 결정)
  - center
  - space-around : 양 끝은 스페이스가 작고 나머지는 동일
  - space-even : 똑같은 간격
  - space-between : 양끝은 끝에 맞추고 나머지는 동일한 간격
- align-itmes : cross axis방향으로 아이템을 어떻게 배치할지
  - center : cross axis의 중간 정렬
  - baseline : 각 아이템 중간을 기준으로 정렬
- align-content : cross axis 방향
  - center
  - space-around : 양 끝은 스페이스가 작고 나머지는 동일
  - space-even : 똑같은 간격
  - space-between : 양끝은 끝에 맞추고 나머지는 동일한 간격

### 아이템 속성

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <!-- emmet 사용 : div.container>div.item.item${$}*3 -->
  <div class="container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>

</body>
</html>
```

```css
.container {
  padding-top: 100px;
  background: beige;
  height: 100vh;
  display: flex;
}

.item {
  width: 40px;
  height: 40px;
  border: 1px solid black;
}

.item1 {
  background: #fff3e0;
  /* 커지는 비율 */
  /*  flex-grow: 2; */
  /* 작아지는 비율 */
  /* flex-shrink: 2; */

  /* 차지할 크기를 지정 */
  flex-basis: 60%;

  /* cross axis 방향으로 한 아이템만 정렬 할 수 있다. */
  align-self: center;
}

.item2 {
  background: #ffecb3;
}

.item3 {
  background: #fff59d;
}
```

- flex-grow : 커지는 비율
- flex-shrink : 줄어드는 비율
- flex-basis : 차지할 비율 지졍
- align-self : cross axis 방향으로 한 아이템만 정렬
