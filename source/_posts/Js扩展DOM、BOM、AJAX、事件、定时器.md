---
title: Js扩展DOM、BOM、AJAX、事件、定时器
date: 2025-01-22 23:13:44
tags: JavaScript
excerpt: 包括：DOM、BOM、AJAX、事件、定时器相关扩展。
categories:
  - 前端
  - JavaScript
---

# BOM 操作

`BOM`指的是浏览器对象模型：`Browser Object Mode`，通过操作 `window` 对象的属性和方法来实现与浏览器的交互。

`BOM`的构成如下图所示：

![图片描述](https://doc.shiyanlou.com/courses/4385/1347963/934aa25def575c514b29c151a0cab411-0)

其中，`window`对象是顶级对象，在 `window` 对象下面有一些重要的属性：

- `document`：DOM 对象。

- `location`：用于获取或设置文档当前 URL 的位置。

- `navigation`：包含浏览器配置相关的信息。

- `history`：用于操作浏览器的历史记录。

- `screen`：用于获取屏幕设备信息。

  

  ## 用户操作

  警告框：

  ```js
  alert(message)
  ```

  对话框：

  ```js
  const res = confirm(message)	// 根据用户点击确定或取消结果：true或者false
  ```
  
  弹出输入对话框（`defaultValue`为默认值占位值，可选）：
  
  ```js
  prompt(message, defaultValue)	// 返回值为用户的输入文本
  
  // 参考实例
  const res = prompt('请输入姓名：', 'Alice')
  console.log('用户的输入结果：', res)
  ```
  
  

## 获取窗口尺寸

`window` 对象包含一些存储窗口尺寸的**只读属性**：

| 属性          | 描 述                |
| ------------- | -------------------- |
| `innerWidth`  | 窗口的内部宽度       |
| `innerHeight` | 窗口的内部高度       |
| `outerWidth`  | 整个浏览器窗口的宽度 |
| `outerHeight` | 整个浏览器窗口的高度 |

参考用例：

```js
console.log('窗口的内部宽度：', innerWidth)	// 1797
console.log('窗口的内部高度：', innerHeight) // 889
console.log('整个浏览器窗口的宽度：', outerWidth) // 1797
console.log('整个浏览器窗口的高度：', outerHeight) // 976
```

## 获取屏幕尺寸

访问 `window` 对象的 `screen` 属性会返回一个 `Screen` 对象，它包含一些屏幕尺寸相关的**只读属性**：

| 属性                 | 描 述                            |
| -------------------- | -------------------------------- |
| `screen.width`       | 屏幕的宽度                       |
| `screen.height`      | 屏幕的高度                       |
| `screen.availWidth`  | 屏幕上可用的宽度                 |
| `screen.availHeight` | 屏幕上可用的高度（不包括任务栏） |

参考实例：

```js
console.log('屏幕的宽度：', screen.width)	// 1797
console.log('屏幕的高度：', screen.height) // 1011
console.log('屏幕上可用的宽度：', screen.availWidth) // 1797
console.log('屏幕上可用的高度：', screen.availHeight) // 976
```

## Location 对象

访问 `window` 对象的 `location` 属性会返回一个 `Location` 对象，它包含有关文档当前 URL 位置的信息。

| 属性                | 描 述                                  |
| ------------------- | -------------------------------------- |
| `location.href`     | 包含整个 URL 的字符串                  |
| `location.protocol` | 包含 URL 协议方案的字符串              |
| `location.hostname` | 包含 URL 域名的字符串                  |
| `location.pathname` | 包含开头的 `/` 后跟 URL 路径的字符串   |
| `location.search`   | 包含开头的 `?` 后跟 URL 的“查询字符串” |
| `location.hash`     | 包含开头的 `#` 后跟 URL 的片段标识符   |

参考用例：

```js
console.log('整个 URL：', location.href)
console.log('URL 协议：', location.protocol)
console.log('URL 域名：', location.hostname)
console.log('URL 路径：', location.pathname)
```

此外，`Location` 对象还包含对 URL 进行操作的方法。

其中，`assign()` 方法可以使浏览器加载并显示指定 URL 处的页面：

```js
location.assign(url)
```

`reload()` 方法会重新加载当前 URL，就像点击了刷新按钮一样。

```js
location.reload()
```

## History 对象

访问 `window` 对象的 `history` 属性会返回一个 `History` 对象，可以通过它操作浏览器的历史记录。

| 方法                      | 描 述                                                        |
| ------------------------- | ------------------------------------------------------------ |
| `location.go()`           | 移动到历史记录中相对于当前页面的位置，例如 `-1` 表示上一页，`1` 表示下一页。参数为 `0` 则会重新加载当前页面。 |
| `location.back()`         | 转到历史记录中的上一页，相当于点击浏览器的“后退”按钮         |
| `location.forward()`      | 转到历史记录中的下一页，相当于点击浏览器的“前进”按钮         |
| `location.pushState()`    | 向浏览器的历史记录中添加一个条目                             |
| `location.replaceState()` | 修改当前历史记录条目                                         |

# DOM 操作

DOM 的英文全称为 **Document Object Model**（文档对象模型），它是浏览器为每个窗口内的 HTML 页面在内存中创建的表示文档的结构。通过 DOM，我们可以使用 JavaScript 来对页面中的元素进行操作。

## 常用的 DOM 属性

常用的 DOM 属性如下表所示：

| 属性               | 描 述                          |
| ------------------ | ------------------------------ |
| `document.title`   | 获取文档的标题文本             |
| `document.URL`     | 获取文档的 URL                 |
| `document.head`    | 获取文档的 `<head>` 元素       |
| `document.body`    | 获取文档的 `<body>` 元素       |
| `document.forms`   | 获取文档的 `<form>` 元素列表   |
| `document.images`  | 获取文档的 `<img>` 元素列表    |
| `document.links`   | 获取文档的 `<a>` 元素列表      |
| `document.scripts` | 获取文档的 `<script>` 元素列表 |

## 常用的 DOM 方法

我们可以使用下面这些方法从当前文档中获取元素节点：

| 方法                                | 描 述                            |
| ----------------------------------- | -------------------------------- |
| `document.getElementById()`         | 通过 `id` 属性获取元素           |
| `document.getElementsByClassName()` | 通过 `class` 属性获取元素列表    |
| `document.getElementsByTagName()`   | 通过标签名获取元素列表           |
| `document.getElementsByName()`      | 通过 `name` 属性获取元素列表     |
| `document.querySelector()`          | 通过选择器获取第一个匹配的元素   |
| `document.querySelectorAll()`       | 通过选择器获取所有匹配的元素列表 |

除了获取已有的元素节点，我们还可以使用下面这些方法创建新节点：

| 方法                        | 描 述        |
| --------------------------- | ------------ |
| `document.createElement()`  | 创建元素节点 |
| `document.createTextNode()` | 创建文本节点 |

## 基本 DOM 操作

常用的元素节点属性如下表所示：

| 属性                     | 描 述                |
| ------------------------ | -------------------- |
| `parentElement`          | 获取父级元素         |
| `previousElementSibling` | 获取同级的前一个元素 |
| `nextElementSibling`     | 获取同级的后一个元素 |
| `children`               | 获取子级元素列表     |
| `firstElementChild`      | 获取第一个子级元素   |
| `lastElementChild`       | 获取最后一个子级元素 |

常用的元素节点方法如下表所示：

| 方法                             | 描 述                                                        |
| -------------------------------- | ------------------------------------------------------------ |
| `cloneNode()`                    | 返回当前节点的副本（如果传入一个参数 `true` 则连同后代节点一起复制） |
| `remove()`                       | 删除当前节点本身                                             |
| `removeChild(node)`              | 从当前节点的子级列表中删除子级节点 `node`                    |
| `replaceWith(node1, node2, ...)` | 将当前节点替换为一组其它节点或文本                           |
| `prepend(node1, node2, ...)`     | 在当前节点的子级列表开头添加一组新的**子级**节点或文本       |
| `append(node1, node2, ...)`      | 在当前节点的子级列表末尾添加一组新的**子级**节点或文本       |
| `before(node1, node2, ...)`      | 在当前节点的前面添加一组新的**同级**节点或文本               |
| `after(node1, node2, ...)`       | 在当前节点的后面添加一组新的**同级**节点或文本               |
| `insertBefore(node, reference)`  | 在子级节点 `reference` 的前面插入一个新节点 `node`           |

元素节点的方法参考以下示例：

在这个示例中：

1. 使用 `remove()` 方法删除了 `id="js"` 的 `<li>` 元素。
2. 创建了一个新的 `<li>` 元素，并插入到 `id="css"` 的 `<li>` 元素的前面。
3. 在 `<h2>` 元素的前面添加了一行文本。
4. 将 `<h2>` 元素复制，并添加到 `<body>` 元素内部的末尾位置。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <h2>Web 开发三剑客</h2>
    <ul>
      <li id="html">HTML</li>
      <li id="css">CSS</li>
      <li id="js">JavaScript</li>
    </ul>
    <script>
      // 删除元素节点
      const js = document.getElementById('js')
      js.remove()

      // 创建元素节点
      const es = document.createElement('LI')
      es.prepend('ES6')

      // 插入新节点
      const ul = document.getElementsByTagName('ul')[0]
      const css = document.getElementById('css')
      ul.insertBefore(es, css)

      // 在节点的前面添加文本
      const h2 = document.getElementsByTagName('h2')[0]
      h2.before('Vue 是一套用于构建用户界面的渐进式框架。')

      // 复制节点并在 body 中添加
      const clone = h2.cloneNode(true)
      document.body.append(clone)
    </script>
  </body>
</html>
```

预览效果：

![图片描述](https://doc.shiyanlou.com/courses/uid1889095-20240927-1727431411923)

# 定时器

`js`中定时器有一次性定时器和重复执行定时器。

## 一次性定时器

全局 `setTimeout()` 函数设置一个定时器，一旦倒计时完成，就会执行一段指定的代码。

> 需要注意，定时器函数一般为异步函数。

设置定时器的方法如下：

```js
// 使用格式：
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)

// 参考示例：
setTimeout(() => {
  console.log('延迟一秒')
}, 1000)
console.log('其他代码')
```

`setTimeout()` 函数的返回值是一个正整数值，它代表了这个定时器的 ID。我们可以将这个值传递给 `clearTimeout()` 函数以取消定时。

```js
// 参考示例：
const timer1 = setTimeout(() => {
  console.log('延迟一秒')
}, 1000)
const timer2 = setTimeout(() => {
  console.log('延迟两秒')
}, 2000)
const timer3 = setTimeout(() => {
  console.log('延迟三秒')
}, 3000)
// 取消第二个定时器
clearTimeout(timer2)
```

##  重复定时器

全局 `setInterval()` 函数设置一个定时器，用于重复执行一段指定的代码，每次执行之间有固定的时间间隔。

其使用格式如下：

```js
// 使用方法：
setInterval(functionRef, delay, param1, param2, /* …, */ paramN)

// 参考示例：
setInterval(() => {
  console.log('重复执行')
}, 1000)
console.log('其他代码')
```

# 本地存储

本地存储是指在客户端存储数据。HTML5 为我们提供了两种 API，分别是 `localStorage` 与 `sessionStorage`。二者的使用方法类似，都可以用来存储客户端临时信息，并且二者存储的数据格式均为 key/value 对的形式。

## localStorage API

`localStorage` 对象是 HTML 5 新增的特性，主要用于本地存储。

在网络发展的早期，当没有其他选择时，[cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 被用于一般客户端数据存储目的。而在现在，更加推荐使用 `localStorage` 等现代存储 API。

`localstorage` 与 `cookie` 主要有以下区别：

- `localStorage` 解决了早期使用 `cookie` 存储遇到的存储空间不足的问题( 每条 `cookie` 的存储空间为 4k )
- `localStorage` 一般浏览器支持的是 5M 大小，具体存储大小根据浏览器的不同会有所不同。
- 相较于 `cookie` 而言，`localStorage` 中的信息不会被传输到服务器。

`localStorage` 对象提供的方法如下：

| 方法                  | 说明                                |
| --------------------- | ----------------------------------- |
| `setItem(key, value)` | 保存数据到本地存储                  |
| `getItem(key)`        | 根据指定 `key` 从本地存储中获取数据 |
| `removeItem(key)`     | 根据指定 `key` 从本地存储中移除数据 |
| `clear()`             | 清除所有保存数据                    |

### 存储数据

```js
localStorage.setItem(key, value)	// 方法一
localStorage.key = value	// 方法二，和方法一效果一样
```

### 读取数据

```js
localStorage.getItem(key)	// 方法一
localStorage.key	// 方法二，等效于前者
```



### 删除数据

```js
// 根据指定名称从本地存储中移除
localStorage.removeItem(key)
```

> 上面的`key`一般是一个字符串。

### 清空数据

```js
// 清除本地存储中所有数据
localStorage.clear()
```

## sessionStorage API

`localStorage` 和 `sessionStorage` 对象作为 HTML5 新增的特性，都可以用来存储客户端临时信息，并且二者存储的数据格式均为 key/value 键值对数据。

`sessionStorage` 对象提供的方法与 `localStorage` 对象相同，具体如下：

| 方法                  | 说明                                |
| --------------------- | ----------------------------------- |
| `setItem(key, value)` | 保存数据到本地存储                  |
| `getItem(key)`        | 根据指定 `key` 从本地存储中获取数据 |
| `removeItem(key)`     | 根据指定 `key` 从本地存储中移除数据 |
| `clear()`             | 清除所有保存数据                    |

那么`localStorage` 和 `sessionStorage` 二者有什么区别呢？

它们的区别在于：

- `localStorage` 的生命周期是永久的，除非用户清除 `localStorage` 信息，否则这些信息将永远存在。
- `sessionStorage` 的生命周期是临时的，一旦当前窗口或标签页被关闭了，那么通过它存储的数据也就被清空了。

由于具体的调用方法和`localStorage`完全一致，使用方法这里省略。

# 事件处理

事件是指用户进行了某些操作时触发的“信号”，例如点击鼠标、按下键盘、输入文字等。我们可以绑定相应的事件处理函数来进行处理。

- DOM 0 级事件与 DOM 2 级事件
- 鼠标事件
- 键盘事件
- 表单事件
- 事件对象

## DOM 0 级事件

DOM 0 级事件是直接使用 HTML 属性或 DOM 对象属性来指定相应的事件处理函数。例如，`click` 是当鼠标点击时会触发的事件。我们可以在 HTML 标签里直接写 `onclick` 属性或者在 JavaScript 中使用 `onclick = function(){}`。

直接将节点的`onclick`绑定为一个函数，点击事件就只能执行一个函数。但如果添加事件监听，就能同时执行多个事件所绑定的函数。

```html
// 直接绑定
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <input id="btn" type="button" value="按钮" onclick="alert('欢迎来到蓝桥云课')" />
    <script>
      const el = document.getElementById('btn')
      el.onclick = function () {
        alert('你好！蓝桥')
      }
      el.onclick = function () {
        alert('嗨！蓝桥')
      }	// 再次绑定就会被覆盖
    </script>
  </body>
</html>
```

## DOM 2 级事件

DOM 2 级事件可以绑定多个事件处理函数。所有的 DOM 节点都有两个方法，分别是 `addEvenetListener()` 和 `removeEventListener()`。

语法格式：

```js
target.addEvenetListener(type, listener) // 添加事件
target.removeEventListener(type, listener) // 移出事件
```

`listener`是一个函数，如果要移除他需要保证`removeEventListener` 中传入的是同一个函数名。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <input id="btn" type="button" value="按钮" />
    <script>
      const btn = document.getElementById('btn')
      btn.addEventListener('click', handler)
      function handler() {
        alert('已点击')
        btn.removeEventListener('click', handler)
      }
    </script>
  </body>
</html>
```

执行后的效果如下：

![图片描述](https://doc.shiyanlou.com/courses/uid1889095-20240925-1727269675625)

## 鼠标事件

常用的鼠标事件如下表所示：

| 事件        | 说明         |
| ----------- | ------------ |
| `click`     | 鼠标点击事件 |
| `mousedown` | 鼠标按下事件 |
| `mouseup`   | 鼠标松开事件 |
| `mouseover` | 鼠标移入事件 |
| `mouseout`  | 鼠标移出事件 |
| `mousemove` | 鼠标移动事件 |

### `click` 事件

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: #b8b5ff;
      }
    </style>
  </head>
  <body>
    <div id="item"></div>
    <script>
      const el = document.getElementById('item')
      // 鼠标点击
      el.addEventListener('click', function () {
        el.style.background = '#ffefa1'
      })
    </script>
  </body>
</html>
```



### `mousedown`、`mouseup` 事件

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: #b8b5ff;
      }
    </style>
  </head>
  <body>
    <div id="item"></div>
    <script>
      const el = document.getElementById('item')
      // 鼠标按下
      el.addEventListener('mousedown', function () {
        el.style.background = '#ffefa1'
      })
      // 鼠标松开
      el.addEventListener('mouseup', function () {
        el.style.background = '#b8b5ff'
      })
    </script>
  </body>
</html>
```

### `mouseover`、`mouseout` 事件

```js
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: #b8b5ff;
      }
    </style>
  </head>
  <body>
    <div id="item"></div>
    <script>
      const el = document.getElementById('item')
      // 鼠标移入
      el.addEventListener('mouseover', function () {
        el.style.background = '#ffefa1'
      })
      // 鼠标移出
      el.addEventListener('mouseout', function () {
        el.style.background = '#b8b5ff'
      })
    </script>
  </body>
</html>
```



## 键盘事件

常用的键盘事件有以下两个：

| 事件      | 说明                 |
| --------- | -------------------- |
| `keydown` | 键盘按下会触发的事件 |
| `keyup`   | 键盘松开会触发的事件 |

```js
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <input type="text" value="请输入内容" id="phone" />
    <script>
      const el = document.getElementById('phone')
      // 键盘按下
      el.addEventListener('keydown', function () {
        el.style.color = '#00adb5'
      })
      // 键盘松开
      el.addEventListener('keyup', function () {
        el.style.color = '#000000'
      })
    </script>
  </body>
</html>
```



## 表单事件

在 JavaScript 中，常用表单事件如下表所示：

| 事件    | 说明                     |
| ------- | ------------------------ |
| `focus` | 表单元素聚焦时触发的事件 |
| `blur`  | 表单元素失焦时触发的事件 |

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    姓名：<input type="text" id="username" value="输入你的名字" />
    <script>
      const el = document.getElementById('username')
      // 当聚焦到该输入框时，把输入框的内容置为空，并设置字体颜色为蓝色
      el.addEventListener('focus', function () {
        if (el.value == '输入你的名字') {
          el.value = ''
        }
        el.style.color = '#77acf1'
      })
      // 当失去焦点时，显示输入框的默认内容
      el.addEventListener('blur', function () {
        if (el.value == '') {
          el.value = '输入你的名字'
        }
        el.style.color = '#000000'
      })
    </script>
  </body>
</html>
```

## 事件对象

事件函数默认能接受到一个可选参数：事件对象，通过事件对象可以得到更多关于该类型事件的信息。例如鼠标事件可以拿到鼠标的位置坐标，键盘事件能拿到对应按下的键。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <input id="btn" type="button" value="按钮" />
    <script>
      const el = document.getElementById('btn')
      el.addEventListener('click', function (ev) {
        console.log(`这是一个 ${ev.type} 事件`) // 在控制台打印事件类型
      })
    </script>
  </body>
</html>
```

## 鼠标事件对象

鼠标事件处理函数接收到的[鼠标事件对象](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)还包含一些其它属性：

| 属性        | 说明                                             |
| ----------- | ------------------------------------------------ |
| `button`    | 触发鼠标事件时按下的按钮                         |
| `clientX`   | 鼠标指针在窗口可视区域中的 X 坐标                |
| `clientY`   | 鼠标指针在窗口可视区域中的 Y 坐标                |
| `pageX`     | 鼠标指针相对于整个页面的 X 坐标（考虑滚动条）    |
| `pageY`     | 鼠标指针相对于整个页面的 Y 坐标（考虑滚动条）    |
| `movementX` | 鼠标指针相对于上次 `mousemove` 事件位置的 X 坐标 |
| `movementY` | 鼠标指针相对于上次 `mousemove` 事件位置的 Y 坐标 |

参考以下示例：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: #b8b5ff;
      }
    </style>
  </head>
  <body>
    <div id="item"></div>
    <script>
      const el = document.getElementById('item')
      el.addEventListener('click', function (ev) {
        console.log('页面中鼠标指针的 X 坐标：', ev.pageX)
        console.log('页面中鼠标指针的 Y 坐标：', ev.pageY)
      })
    </script>
  </body>
</html>
```

## 键盘事件对象

键盘事件处理函数接收到的[键盘事件对象](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)包含一些按键信息相关的属性：

| 属性       | 说明                         |
| ---------- | ---------------------------- |
| `code`     | 键盘上的按键的代码值         |
| `key`      | 按键产生的字符（考虑大小写） |
| `shiftKey` | 是否按下 Shift 键            |
| `ctrlkey`  | 是否按下 Ctrl 键             |
| `altkey`   | 是否按下 Alt 键              |

参考以下示例：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
  </head>
  <body>
    <input type="text" id="item" />
    <p id="msg"></p>
    <script>
      const el = document.getElementById('item')
      el.addEventListener('keydown', function (ev) {
        // 判断是否按下 Ctrl 键
        if (ev.ctrlKey) {
          msg.innerHTML = '请不要按下 Ctrl 键'
          msg.style.color = 'red'
        } else {
          // 当没有按下 Ctrl 键时，输出按键产生的字符
          msg.innerHTML = '按键产生的字符：' + ev.key
          msg.style.color = 'black'
        }
      })
    </script>
  </body>
</html>
```

# AJAX

**AJAX** 的英文全称为 **Asynchronous JavaScript And XML**，其中 **Asynchronous** 是异步的意思。

何为异步呢？它是指通过 AJAX 向服务器请求数据，在不刷新整个页面的情况下，更新页面上的部分内容。

其工作原理图如下所示：

![图片描述](https://doc.shiyanlou.com/courses/3773/1347963/1389bcd14fc2ba77b5f8343420f96304-0)

使用`AJAX`请求的功能如果餐厅中的服务员，能在不阻塞主要流程的情况下，让服务员帮你去做某件事情。如果这件事情你自己去做的话，就会阻塞你的事件进程了。

常用的三种`AJAX`:

- XMLHttpRequest API
- Fetch API
- Axios

## XMLHttpRequest API

为了通过 AJAX 异步请求数据，一种传统的方法是使用 XMLHttpRequest API。

创建 AJAX 的基本步骤如下：

1. **创建 `XMLHttpRequest` 对象**

```js
const httpRequest = new XMLHttpRequest()
```

2. **向服务器发送请求**

```js
// 规定发送请求的一些要求
httpRequest.open(method, url, async)
// 将请求发送到服务器
httpRequest.send()
```

`open()` 方法中的参数说明如下：

- `method`：请求的类型，常见的有 `GET` 和 `POST`。
- `url`：请求的 URL 地址。
- `async`（可选）：设置同步或者异步请求，其值为布尔类型，默认为 `true`。当为 `true` 时，使用异步请求；当为 `false` 时，使用同步请求。

3. **获取服务器响应状态**
我们使用 HTTP 请求数据后，会反馈给我们相应的请求状态。我们使用 `onreadystatechange` 去检查响应的状态，当 `httpRequest.readyState` 为 4 并且 `httpRequest.status` 等于 **200** 时，说明数据请求成功。

其使用如下：

```js
// 检查响应的状态
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status == 200) {
      // 请求成功执行的代码
    } else {
      // 请求失败执行的代码
    }
  }
}
```

新建一个 `index.html` 文件，在 `<script>` 标签内写入以下内容：

```javascript
const xhr = new XMLHttpRequest()
// 规定发送请求的一些要求
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
// 将请求发送到服务器
xhr.send()
// 检查响应的状态
xhr.onreadystatechange = function () {
  console.log(xhr.readyState)
  console.log(xhr.status)
  if (xhr.readyState === 4) {
    if (xhr.status == 200) {
      // 请求成功执行的代码
      console.log('请求成功')
      console.log(JSON.parse(xhr.responseText))
    } else {
      // 请求失败执行的代码
      console.log('请求失败')
    }
  }
}
```

输出结果如下：

![图片描述](https://doc.shiyanlou.com/courses/uid1889095-20241006-1728218852523)

在控制台中输出的 `200` 是 HTTP 的响应状态码，该状态码还有其他取值，可以阅读 [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 了解更多。

而穿插在 `200` 之后的数字 `2`、`3`、`4` 是 `readyState` 属性的值，它的取值有以下几种：

- `0` 代表未初始化请求。
- `1` 代表已与服务器建立连接。
- `2` 代表请求被接受。
- `3` 代表请求中。
- `4` 代表请求完成。

## Fetch API

Fetch API 提供了用于通过网络获取资源的接口，它是 XMLHttpRequest API 的更强大、更灵活的替代品。其使用方式如下：

```js
const response = await fetch(url)
```

其中，`fetch()` 是一个全局函数，它接收要请求的 URL 作为参数，并返回一个 `Promise` 对象。

该异步操作的结果是一个 `Response` 对象，我们可以使用 `await` 关键字获取。它提供了多种方法来解析不同格式的正文内容：

- `arrayBuffer()`：二进制数据。
- `blob()`：二进制数据。
- `formData()`：HTML 表单数据。
- `json()`：JSON 格式数据。
- `text()`：纯文本数据。

下面是一个基本的使用示例：

```js
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    // 请求失败执行的代码
    console.log('请求失败')
  } else {
    // 请求成功执行的代码
    console.log('请求成功')
    const json = await response.json()
    console.log(json)
  }
}
getData()
```

默认情况下，`fetch()` 发出 GET 请求，但我们可以使用 `method` 选项来使用不同的请求方式：

```js
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })

  if (!response.ok) {
    // 请求失败执行的代码
    console.log('请求失败')
  } else {
    // 请求成功执行的代码
    console.log('请求成功')
    const json = await response.json()
    console.log(json)
  }
}
getData()
```

在上面的代码中：

- `method` 选项用于设置请求方式。
- `body` 选项用于设置发送到服务器的内容。
- `headers` 选项用于设置 HTTP 请求头。

## Axios

一个非常主流的`AJAX`的封装插件—— `Axios`。

[Axios](http://www.axios-js.com/) 是一个基于 Promise 语法的、用于浏览器和 Node.js 的 HTTP 库。简单的理解就是对 AJAX 的封装，且具有易用、简洁、高效等特点。

它本身具备以下功能：

1. 可以从浏览器中创建 XMLHttpRequest。
2. 能从 Node.js 创建 HTTP 请求。
3. 支持 Promise API。
4. 能够拦截请求和响应。
5. 可以转换请求和响应数据。
6. 可以取消请求。
7. 可以自动转换 JSON 数据。
8. 在客户端支持防止 [CSRF/XSRF](https://baike.baidu.com/item/跨站请求伪造) 攻击。

为了使用 Axios，我们需要使用 `<script>` 标签进行引入：

```html
<script src="https://unpkg.com/axios@1.7.7/dist/axios.min.js"></script>
```

新建一个 `test.json` 文件，并写入以下数据，作为接下来使用 Axios 请求的数据文件：

```json
{
  "msg": "Hello Axios!"
}
```

新建一个 `index.html` 文件，写入以下内容：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <!-- 引入 Axios 的 CDN -->
    <script src="https://unpkg.com/axios@1.7.7/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      axios.get('./test.json').then((res) => {
        console.log(res)
      })
    </script>
  </body>
</html>
```

在上面代码中，我们使用 **Axios** 发送一个简单的 **AJAX** 请求，用于获取 `test.json` 中的数据，并输出在控制台。

可以看到，通过 Axios 获取到的数据实际上是一个对象，真正需要的数据是该对象的 `data` 属性值。

上面这个例子只是 Axios 众多使用方式中的一种，它主要是用于执行 GET 请求。

下面我们看几个它比较常用的使用方式：

1. 执行 GET 数据请求：

```js
axios
  .get('url', {
    params: {
      id: '接口配置参数（相当于url?id=xxxx）',
    },
  })
  .then(function (res) {
    console.log(res) // 处理成功的函数 相当于 success
  })
  .catch(function (error) {
    console.log(error) // 错误处理 相当于 error
  })
```

2. 执行 POST 数据请求并发送数据给后端：

```js
axios
  .post(
    'url',
    { data: {} },
    {
      headers: 'xxxx', // 头部配置
    }
  )
  .then(function (res) {
    console.log(res) // 处理成功的函数 相当于 success
  })
  .catch(function (error) {
    console.log(error) // 错误处理 相当于 error
  })
```

3. 通用方式（适用于任何请求方式）：

```js
//-------- GET --------//
axios({
  method: 'get',
  url: 'xxx',
  cache: false,
  params: {
    id: 123,
  },
  headers: 'xxx',
})
//-------- POST --------//
axios({
  method: 'post',
  url: 'xxx',
  data: {
    firstName: 'Tom',
    lastName: 'Sun',
  },
})
```

其中需要注意的是，GET 和 POST 请求中向后端传递参数的配置项名字不同：GET 请求需要使用 `params`，POST 请求需要使用 `data` 发送数据。

作为一个独立的强大的 HTTP 库，Axios 的功能远不止这些，可以通过 [Axios 的官网](http://www.axios-js.com/)学习。
