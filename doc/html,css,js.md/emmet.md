# [emmet](https://docs.emmet.io/abbreviations/syntax/)

빠른 html 코딩을 위한 툴

emmet을 입력하고 탭을 누르면 자동완성 된다.

일단 ! + tab 해보자

- `!` + tab키 : 자동으로 아래 코드가 생성된다.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body></body>
  </html>
  ```

- tag : span + tab
  ```html
  <span></span>
  ```
- tag.classname : div.container
  ```html
  <div class="container"></div>
  ```
- .class
  ```html
  <div class="class"></div>
  ```
- .class#id
  ```html
  <div class="class" id="id"></div>
  ```
- div>ul+ol
  ```html
  <div>
    <ul></ul>
    <ol></ol>
  </div>
  ```
- ul>li\*5
  ```html
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  ```
- div>ul>li\*5^ol

  ```html
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ol></ol>
  </div>
  ```

- div>(header>ul>li\*2>a)+footer>p
  ```html
  <div>
    <header>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </header>
    <footer>
      <p></p>
    </footer>
  </div>
  ```
- p{hello}

  ```html
  <p>hello</p>
  ```

- p.class${itme $}\*5

  ```html
  <p class="class1">itme 1</p>
  <p class="class2">itme 2</p>
  <p class="class3">itme 3</p>
  <p class="class4">itme 4</p>
  <p class="class5">itme 5</p>
  ```

- div#page>div.logo+ul#navigation>li\*5>a

  ```html
  <div id="page">
    <div class="logo"></div>
    <ul id="navigation">
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </div>
  ```

- div#page>div.logo+ul#navigation>li.liclass$*5>a{$}
  ```html
  <div id="page">
    <div class="logo"></div>
    <ul id="navigation">
      <li class="liclass1"><a href="">1</a></li>
      <li class="liclass2"><a href="">2</a></li>
      <li class="liclass3"><a href="">3</a></li>
      <li class="liclass4"><a href="">4</a></li>
      <li class="liclass5"><a href="">5</a></li>
    </ul>
  </div>
  ```
