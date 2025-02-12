---
title: ES6异步编程中Promise与Proxy对象
date: 2025-01-21 21:28:03
tags: JavaScript
excerpt: Promise与Proxy引入ES6异步编程。
categories:
  - 前端
  - JavaScript
---

# Promise 对象

`Promise`对象用于解决`Javascript`中的地狱回调问题，有效的减少了程序回调的嵌套调用。

# 创建

如果要创建一个`Promise`对象，最简单的方法就是直接`new`一个。但是，如果深入学习，会发现使用`Promise`下的静态方法`Promise.resolve()`也能创建一个`Promise`对象：

```js
// 创建方法一
new Promise((resolve, reject) => {
  // 此处做一个异步的事情
});

// 创建方法二
Promise.resolve(p)	// p 可以是一个Promise，也可以是一个普通的数值。
```

使用方法二创建`Promise`时，可以传入一个普通的值，或一个`Promise`对象。最后都会作为一个`Promise`返回出来。如果传入的是一个普通的值，产生的`Promise`的值就会将这个值传入`resolve`方法发送给下一个`then`。

## 使用

对于`Promise`对象的使用，参考下方的案例，对于`Promise`的使用，理解返回值、参数、两个回调之间的关系后会有一定的帮助。

> 第二种写法的区别主要在于直接在第一次定义`Promise`的同时把下一次`then`中的回调也顺便地写好了。

```js
// 案例一
const n = 6
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (n > 5) {
      resolve(n)
    } else {
      reject('必须大于 5！')
    }
  }, 1000)
})
p.then(
  (v) => {
    console.log(v)
  },
  (e) => {
    console.log(e)
  }
)
// 案例二
const pFn = function() {
    return Promise.resolve('解决!').then(
        v => {
            console.log('接收到', v);
        }
    )
}
const p = pFn()
```

## Promise.all() 方法

该方法用于一次性执行全部传入的`[p1, p2, p3]`对象，当全部执行成功后才会进入到第一个执行成功的`then`方法中。其中，任何一个失败了则会进入到`then`的失败回调中。

```js
// 语法演示的伪代码
Promise.all([p1, p2, p3]).then(
  (v) => {
    // 所有请求成功后的操作步骤
  },
  (e) => {
    // 某一个请求失败后的操作步骤
  }
)

// 演示案例
function p(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n)
      } else {
        reject('不能小于 0！')
      }
    }, 1000)
  })
}
Promise.all([p(5), p(6), p(7)]).then(
  (v) => {
    console.log(v)
  },
  (e) => {
    console.log(e)
  }
)
```

## Promise.race() 方法

如果`race`的字面意思`竞赛`，该方法也是传入一个`Promise`对象的数组，不同点在于：先成功的`Promise`将直接进入到`then`的成功回调中。如果失败了，也直接进入到失败的`then`回调。

```js
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('请求成功')
    }, 3000)
  })
}
function timeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, 5000)
  })
}
Promise.race([loadData(), timeOut()]).then(
  (v) => {
    console.log(v)
  },
  (e) => {
    console.log(e)
  }
)
```

## async 和 await 关键字

这两个关键字是`Promise`方法的语法糖，底层的实现还是`Promise`对象的那一套。优点在于能使异步编程的可读性进一步加强，使其更接近于同步执行的语法。

- **async** 关键字

```js
// async 语法糖的写法
async function fn() {
  return '12345'
}
fn().then((v) => {
  console.log(v)
})
// 等同于下方的写法
function fn() {
    return Promise.resolve('12345')
  }
  fn().then((v) => {
    console.log(v)
  })
```

- **await** 关键字

这个关键字必须在`async`函数中使用。用于“等待” `await`后的表达式执行，并接受该表达式的返回值。

```js
// 函数 p() 返回的是一个 Promise 对象，
// 延时 1 秒后执行成功回调函数，相当于模拟一次异步请求
function p(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 将函数 p() 的实参值 msg 作为执行成功回调函数的返回值
      resolve(msg)
    }, 1000)
  })
}

// 一个用于正常输出内容的函数
function log() {
  console.log('2. 正在操作')
}

async function fn() {
  console.log('1. 开始')
  await log()
  let p1 = await p('3. 异步请求')
  console.log(p1)
  console.log('4. 结束')
}
fn()
```

最后的执行顺序参考下图：

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/009de586cdb402a903360609bfd998b3-0.png" alt="图片描述" style="zoom:50%;" />

# Proxy 代理

通过`Proxy`代理可以为对象拦截一些特定的操作，`proxy`对象对于原对象的操作最终会转发给原对象，并且`proxy`对于原对象的值都只是引用的。

## 创建

```js
// 伪代码
const proxy = new Proxy(target, handler)

// 实际例子
const target = {}
const proxy = new Proxy(target, {})

proxy.name = '闷墩儿'
console.log(proxy.name)
console.log(target.name)

target.name = '憨憨'
console.log(proxy.name)
console.log(target.name)
```

其中最常用的拦截方法：

| 拦截方法                                | 方法说明                                                     |
| --------------------------------------- | ------------------------------------------------------------ |
| `get(target, propKey, receiver)`        | 拦截对象属性的读取。                                         |
| `set(target, propKey, value, receiver)` | 拦截对象属性的设置。                                         |
| `has(target, propKey)`                  | 拦截 `propKey in proxy` 的操作。                             |
| `ownKeys(target)`                       | 拦截 `Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in` 循环，返回一个数组。 |

## get 方法

通过在`handler`对象中 加入`get`方法来使用，该方法会在请求原对象（**target**）的某一键（**propKey**）的值时调用，并且原对象和键都会作为`get`的回调参数。

```js
const dog = { name: '闷墩儿' }
const proxy = new Proxy(dog, {
  get(target, propKey) {
    // 遍历目标对象的属性键值
    if (propKey in target) {
      return target[propKey] // 返回相应的属性值
    } else {
      throw new ReferenceError(propKey + ' 属性不存在')
    }
  },
})
console.log('访问 dog 对象中的 name 属性值为：' + proxy.name)
console.log('访问不存在的 age 属性：' + proxy.age)
```

## set 方法

`set`会在你想设置原对象（**target**）的某一键（**propKey**），并将该键对应的值设置成你传入的值（**value**）时调用。额外需要知道的是返回值为设置成功与否的`boolean`值。

```js
const validator = {
  set(target, propKey, value) {
    if (propKey === 'age') {
      // 判断 age 属性值是否时数字
      if (!Number.isInteger(value)) {
        throw new TypeError('狗狗的年龄只能是整型哦！')
      }
    }
    target[propKey] = value
    return true
  },
}

const dog = new Proxy({}, validator)
dog.age = '22'
```

## has 方法

该方法在使用`in`查询属性时调用，该方法可以解决继承时属性继承出现的问题：

> 场景一中：`valueOf`实际上是`Object`的属性，因为`dog`默认继承自`Object`所以该属性默认也是`dog`的属性。

```js
// 场景一：解决的问题
const dog = { name: '闷墩儿' }
console.log('name' in dog)
console.log('valueOf' in dog)

// 场景二：使用实例
const dog = { name: '闷墩儿', age: 2 }
const handler = {
  has(target, propKey) {
    if (propKey == 'age' && target[propKey] < 5) {
      console.log(`${target.name}的年龄小于 5 岁哦！`)
      return true
    }
  },
}
const proxy = new Proxy(dog, handler)

console.log('age' in proxy)
```

## ownKeys

在使用迭代方法例如`for...in`迭代对象的键时可以使用`ownKeys`拦截该迭代，并返回你想给的迭代数组。

> 注意，你给的数组中的元素如果不是原对象的属性，将不会被迭代。

```js
let dog = { name: '闷墩儿', age: 2, food: '狗罐头' }
const proxy = new Proxy(dog, {
  ownKeys() {
    return ['name', 'color']
  },
})

for (let key in proxy) {
  console.log(key) // 输出 name
}
```

