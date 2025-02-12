---
title: ES6-Set&Map对象小记
date: 2025-01-19 13:51:22
tags: JavaScript
excerpt: ES6 Set和Map对象简单记录
categories:
  - 前端
  - JavaScript
---

# Set 对象

## 添加元素

```js
set.add(value)
```

## 常用方法

| 方法       | 描述                              |
| ---------- | --------------------------------- |
| `has()`    | 判断 `Set` 对象中特定元素是否存在 |
| `delete()` | 从 `Set` 对象中删除指定元素       |
| `clear()`  | 清空 `Set` 对象                   |

## 遍历方法

很容易想到使用`set.forEach(callBackFn, thisArg)`方法来进行遍历，其中`callBackFn`回调的形式如下：

```js
set.forEach(function (value, key, set) {
  // value为set中的元素值
  // key与value相同
  // set对象本身
}, thisArg)
//  thisArg 为this对象，为可选参数
```

回调的参数依次为:

- **value**
- **key**
- **set**

>  其中，为了和其他有`key`的对象保持一致，这里使用的`value`占位了第二个参数，所以`key`就是`value`的值。



# Map 对象

## 创建方法

```js
// 伪代码：
new Map()
new Map(可迭代对象)

// 实际代码的演示：
const map = new Map([['book', 3], ['pen', 5]])
console.log(map)
```

通常会传入一个二维数组作为可迭代对象，每个一位数组都是一个两元素的小数组，作为可迭代对象的键值对。

## 添加元素

```js
// 伪代码
map.set(键, 值);

// 实际代码的演示：
const map = new Map()
map.set([1, 2, 3], '书籍')
map.set(false, '日用品')
map.set(3, '化妆品')
console.log(map)
```

## 获取元素

```js
// 伪代码：
map.get(key)

// 实际演示：
const map = new Map()
map.set(false, '日用品')
console.log(map)

const item = map.get(false)
console.log(item)
```

## 常用方法

| 方法       | 描述                                      |
| ---------- | ----------------------------------------- |
| `has()`    | 判断 `Map` 对象中指定键对应的条目是否存在 |
| `delete()` | 从 `Map` 对象中删除指定键对应的条目       |
| `clear()`  | 清空 `Map` 对象                           |

对应的实例：

```js
let bookstore = new Map()
bookstore.set('《活着》', '余华')
bookstore.set('《平凡的世界》', '路遥')
bookstore.set('《三体》', '刘欣慈')
bookstore.set('《猫和老鼠》', '电影')
console.log('《活着》是否存在：', bookstore.has('《活着》'))

bookstore.delete('《猫和老鼠》')
console.log('《猫和老鼠》是否存在：', bookstore.has('《猫和老鼠》'))

bookstore.clear()
console.log(bookstore)
```

## 遍历方法

其中`callBackFn`回调中的参数依次为`value`,`key`,`map自身`，可以看得出来，`ES6`在`forEach`方法参数上的统一性。

```js
// 伪代码：
map.forEach(callbackFn, thisArg)

// 参考示例：
const userName = new Map([[1, '小红'], [2, '小蓝'], [3, '小白']])
userName.forEach(function (value, key) {
  console.log('当前条目的键为：', key)
  console.log('当前条目的值为：', value)
})
```

# 结语

实际上，还有`weakSet`和`weakMap`这两种垃圾回收机制更强的弱引用`Set`和`Map`，本文不再展开。
