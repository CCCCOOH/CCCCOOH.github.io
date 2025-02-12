---
title: JavaScript如何实现类型判断？
date: 2025-01-26 19:55:35
tags: JavaScript
excerpt: Js中如何实现一个具有核心功能的类型判断？
categories:
  - 前端
  - JavaScript
---

判断一个数据的类型，常用的方法有以下几种：

- `typeof`
- `instanceof`
- `Object.prototype.toString.call(xxx)`

> 下面来分别分析一下这三种方法各自的优缺点

## typeof

`typeof`的本意是用来判断一个数据的数据类型，所以返回的也是一个数据类型。但是会遇到下面这些问题：

- 无法判断 `null`。
- 无法判断除了 `function` 之外的引用类型。

```js
// 无法判断 null。
console.log(typeof null); // 输出 'object'，原因在文章末尾解释。

// 无法判断除了 function 之外的引用类型。
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
```

## incetance of

可以看到，`type of`无法精确判断对象的引用类型。所以在判断一个对象的引用类型时一般使用`incetance of`关键字。

```js
console.log([] instanceof Array); // true
console.log(str1 instanceof String); // false，无法判断原始类型。
```

但是`incetance of`无法准确判断原始数据类型，只能用来判断数据是否是某个类的引用。到这里就能发现，如果把`incetance of`和`type of`结合起来基本就能判断所有的数据类型了。

但是，别忘记还有一个`null`，对于`null`还需要进行特殊的处理。

```js
typeof null;	// object

if (target === null) {
	return "null";
}
```

结合这两种方法基本已经掌握了判断数据类型的手段了，但是如果去写一下你还是会发现很麻烦，你必须枚举每一种类型利用`true`or`false`判断数据类型。

这里的`null`必须单独判断，因为这是第一版`JavaScript`留下来的一个bug。

JavaScript 中不同对象在底层都表示为二进制，而 JavaScript 中会把二进制前三位都为 0 的判断为 `object` 类型，而 `null` 的二进制表示全都是 0，自然前三位也是 0，所以执行 `typeof` 时会返回 `'object'`。

这个 bug 牵扯了太多的 Web 系统，一旦改了，会产生更多的 bug，令很多系统无法工作，也许这个 bug 永远都不会修复了。

## Object.prototype.toString.call(xxx)

这个时候就不得不提到下面这种方法了：

```js
Object.prototype.toString.call([])	// [object Array]
```

这个方法会返回统一格式的字符串：`[object Xxx]`。然后再取出后面的`xxx`即可得到准确的数据类型。对于取出后面的`xxx`可以使用多种方法，包括但不限于字符切片、正则表达式。

>  这里调用`call()`方法是为了让`this`指向数组对象自身。
