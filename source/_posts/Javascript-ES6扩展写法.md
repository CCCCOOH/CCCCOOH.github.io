---
title: Javascript-ES6扩展写法
date: 2024-12-23 00:12:19
tags: JavaScript
excerpt: Js中ES6语法的记录。
categories:
  - 前端
  - JavaScript
---

## String 对象扩展

### 模版字符串

类似字符串的写法，用 ` 来包裹字符串，优点是可以不用反斜杠就能在代码中多行编辑。对于模版字符串来说，反引号内任何空格、换行符都不会被省略。并且可以使用占位变量的写法：

```javascript
const value = 114514
// 传统派写法
const str = "第一行\n\
第二行:"
// 模版字符串写法明显简洁
const str2 = `第一行
第二行:${value}`
console.log(str, value, '\n')
console.log(str2)
```

**输出**：

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/JavascriptES61.png" alt="截屏2024-12-23 00.19.17" style="zoom: 67%;" />

### indexOf() 与 lastIndexOf()

#### indexOf()

使用格式：

```javascript
str.indexOf(searchString, position)
```

该方法用于返回搜索字符串的索引位置，`positoin`为可选参数（起始位置），也就是从头开始寻找。下面是代码实例：

```javascript
const str = 'HelloJavaScript'
console.log('a 首次出现的位置：', str.indexOf('a'))
console.log('a 第二次出现的位置：', str.indexOf('a', 7))
```

**输出**：

![输出结果](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/JavaScriptES62.png)

#### lastIndexOf()

如果说`indexOf()`是从左往右在字符串中寻找目标，那么`lastIndexOf()`就是从右往左，也就是从后面往前找。使用方法：

```javascript
str.lastIndexOf(searchString, position)
```

与之对应的，`position`是可选参数（起始位置），默认从最后开始寻找。

### includes()

该方法用于判断某字符串是否“包含”在内，如果存在则返回`true`否则`false`。功能和正则表达式的`test()`方法一致，区别在于可以指定查找开始的索引位置。`test()`方法做不到这一点。

```javascript
str.includes(searchString, position)
```

演示：

```javascript
const str = 'HelloJavaScript'
console.log('str 字符串中是否存在 Java：', str.includes('Java'))
```

输出：

![输出](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/r6gn3x.png)

### startsWith() 与 endsWith()

`startsWith()`用于判读字符串的开头是否是某个字符串，`endsWith()`方法用于判断末尾是否是某个字符结尾，返回`true`或者`false`。

实例：

```javascript
const str = 'LanQiao Courses'
console.log('str 字符串中是否存在 Java：', str.includes('Java'))
console.log('str 字符串的开头是否存在字符 Lan：', str.startsWith('Lan'))
console.log('str 字符串的结尾是否存在字符 Course：', str.endsWith('Course'))
```

![输出](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/lqojas.png)

### 总结

`String`类在`ES6`中有如下扩展方法：

- `indexOf()` & `lastIndexOf()`：从某个位置左往右或从右往左查找字串索引。
- `startsWith()` & `endsWith()`：查找是否以某个字符串开头或结尾。
- `Includes()`：从某个位置开始，判断字符串是否为子串。



## Array 对象扩展

### 扩展运算符

使用`...`在一个数组对象的前面，可以将这个数组的拆开后均摊出来，使用方法：

```javascript
const variableName = [...value]
```

`value`是一个数组，使用`...`可以将它拆开后摊到数组中，于是乎`variableName`变成了数组。

使用实例：

```javascript
const animals = ['兔子🐰', '猫咪🐱']
const zoo = [...animals, '老虎🐯', '乌龟🐢', '鱼🐟']
console.log(zoo)
```

输出结果：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/8ko39p.png)

### Array.of()

该方法用于创建一个数组：

```javascript
Array.of(元素0, 元素1, /* ... */, 元素N)
```

返回一个数组，和正常创建的数组一样。

### Array.from()

该方法可以将一个特定格式的对象(甚至是更多数据结构的可迭代器)转换成数组作为返回值，第二个可选参数是类似`Array.prototype.map()`方法的函数，可以对数组迭代一遍进行改造：

```javascript
cosnt arr = Array.from(待转换的对象, mapFn());
```

被转换的对象需要如下格式：

```javascript
const arrLike = { 0: '🍎', 1: '🍐', 2: '🍊', 3: '🍇', length: 4 }
const arr = Array.from(arrLike)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/es7lau.png)

> 关于`Arrray.from()`更加详细的使用建议参考MDN:
>
> - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from

熟练掌握后就能写出下方图片中两种很高效的数组创建写法：

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-01-17%2003.03.13.png" alt="截屏2025-01-17 03.03.13" style="zoom:50%;" />

### indexOf() 和 lastIndexOf()

使用方法和字符串的查找字串返回索引一样：

```javascript
arr.indexOf(searchElement, fromIndex)
arr.lastIndexOf(searchElement, fromIndex)
```

需要说明的是，前者是从前往后，后者是从后往前查找返回找到的索引，如果没有返回`-1`。

### find() 和 findLast()

该方法不同于`indexOf()`的地方在于，可以寻找第一个满足构造方法中条件的值。如果查找失败返回`undefined`。

```javascript
arr.find(callbackFn, thisArg)
arr.findLast(callbackFn, thisArg)
```

使用方法：

```javascript
const arr = [1, 3, 4, 5]
const result = arr.find(function (value) {
  return value > 2
})
console.log('find() 的结果：', result)
```

`findLast`方法是从后往前找。

### findIndex() 和 findLastIndex()

这两个方法用于查找满足构造函数的值在数组中的索引。匹配失败返回-1。

使用方法：

```javascript
arr.findIndex(callbackFn, thisArg)
arr.findLastIndex(callbackFn, thisArg)
```

对于`callbackFn`可以按顺序传入下面的参数：

- `element`，数组中元素迭代的值。
- `index`，迭代值的数组下标。
- `array`，被操作数组。

实例：

```javascript
const arr = ['小猫', '兔子', '小狗', '兔子']
const result = arr.findIndex(function (value) {
  return value == '兔子'
})
console.log('findIndex() 的结果：', result)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/x5s0fj.png)

### includes()

该方法判断数组中是否有某个元素，返回布尔值。和字符串中的`includes()`方法一样。

```javascript
arr.includes(searchElement, fromIndex)
```

### some()

该方法用于判断数组中是否有满足某个条件的值，返回布尔值。

```javascript
arr.some(callbackFn, thisArg)
```

回调函数的参数也是按照`element`、`index`、`array`的顺序可选传入的。

实例：

```javascript
const arr = [1, 3, 4, 5]
const result = arr.some(function (value) {
  return value > 3
})
console.log('存在大于 3 的元素？', result)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/rrlppr.png)

### every()

判断数组中所有的元素是否满足某个条件。参数中`callbackFn`的使用方法和之前一致，不多赘述。

```javascript
arr.every(callbackFn, thisArg)
```

参考实例：

```javascript
const arr = [1, 3, 4, 5]
const result = arr.every(function (value) {
  return value > 3
})
console.log('所有元素均大于 3 ？', result)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/18yk6f.png)

### sort()

对数组进行排序：

```javascript
arr.sort(compareFn)
```

实例：

```javascript
const arr = [2, 3, 4, 8, 1]
const result = arr.sort(function (a, b) {
  return a - b
})
console.log(result)
```

对于迭代器中传入的`a`和`b`有如下解释，如果返回值为负值表示`a`在`b`前，正值表示`a`在`b`后，0位置不变。

### reserve()

该方法可以反转数组。使用格式：

```javascript
arr.reverse();
```

实例：

```javas
const arr = ['一', '二', '三', '四']
arr.reverse()
console.log(arr)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/fmqy79.png)

### fill()

该方法用于指定一个值对数组进行切片填充。

```javascript
array.fill(value, start, end);
```

> 如果不指定`start`和`end`，默认填充整个数组。

参考：

```javascript
const arr = ['🐱', '🐶', '🐰']
arr.fill('🐷')
console.log(arr)
```

输出：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/oypgft.png)

### map()

该方法可以对数组中的所有元素进行操作后返回成一个新的数组。回调函数的参数表和上方一致。

使用方法：

```javascript
arr.map(callbackFn, thisArg)
```

参考：

```javascript
const arr = [1, 4, 9, 16]
const result = arr.map(function (x) {
  return x * 2
})
console.log(result)
```

输出：



![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/dejd5y.png)

### reduce() 和 reduceRight()

```javascript
arr.reduce(callbackFn, initialValue)
arr.reduceRight(callbackFn, initialValue)
```

该方法可以指定一个初始值，迭代数组后返回计算出来的最终值。

实例：

```javascript
const arr = [1, 2, 3, 4]
const sum = arr.reduce(function (acc, cur) {
  return acc + cur
}, 0)
console.log(sum) // 10
```

比如这段代码，指定了初始值为0，每次迭代将这个值加上迭代的元素，最终得到求和的值返回赋给`sum`。

输出:

```
10
```
### splice()

首先来看一下[MDN官方的接口文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)是怎么写的：

```javascript
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

可见第一个参数是开始的位置，第二个参数是删除的数量，第三个参数开始全是删除后在该位置插入的元素，并且需要注意**该方法会将删除的元素作为返回值返回，且直接操作于原数组**。

由此可见，`Array.prototype.splice()`接口可以胜任数组中子元素的删除、增加、替换等操作。具体实现方法请看官方文档，这里演示几个简单的操作：

- 在索引`2`处移除`0`个元素，并插入`drum`：

  > 可以看到，最终在原来数组索引`2`元素`'mandarin`的前面插入了一个元素，使得新插入的元素索引为`2`，这个操作等价于`replace()`

```
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有移除的元素
```

- 在索引`2`处移除一个元素：

> 如果需要更强大的移除操作，使用`Array.prototype.filter()`才是上上策。

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 1);

// myFish 是 ["angel", "clown", "sturgeon"];
// removed 是 ["mandarin"]
```

- 在索引`2`处移除`0`个元素，并插入"parrot"，"anemone"和"blue"：

```js
const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish 是 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 是 ["angel", "clown"]
```



### entries()、keys()、values()

使用`arr.entries()`可以得到包含`arr`键值对的二维数组。使用`keys()`可以得到一个包含键的数组，`values()`得到一个包含所有值的数组。利用这三个数组可以进行针对性的迭代。

特别的，直接输出`entries()`得到的是一个迭代器，不过你可以直接将它使用扩展运算符均摊到数组中查看。

```javascript
const arr = ['🐱', '🐶', '🐰', '🐍', '🐦', '🐟']
console.log(arr.entries())
```

输出：

```
> Array Iterator {}
```

使用扩展运算符：

```javascript
const arr = ['🐱', '🐶', '🐰', '🐍', '🐦', '🐟']
console.log([...arr.entries()])
```

得到结果：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/7ftkpl.png)

还可以使用`for ... of`进行迭代：

```javascript
const arr = ['🐱', '🐶', '🐰', '🐍', '🐦', '🐟']
for (const item of arr.entries()) {
  console.log(item)
}
```

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/ecww34.png)

### 总结

- 扩展运算符
- 两种创建数组的方法：
  - `Array.of()` 方法：将一组指定的值转换为数组。
  - `Array.from()` 方法：将类数组对象或者可迭代对象转换为数组。
- 六种数组查找方法：
  - `indexOf()`、`lastIndexOf()` 方法：查找指定元素的下标值。
  - `find()`、`findLast()` 方法：返回数组中满足指定条件的元素的值，未找到则返回 `undefined`。
  - `findIndex()`、`findLastIndex()` 方法：返回数组中满足指定条件的元素的索引，未找到则返回 `-1`。
- 三种数组测试方法：
  - `includes()` 方法：判断数组中是否包含某个元素。
  - `some()` 方法：测试数组中是否存在至少一个元素满足特定要求。
  - `every()` 方法：测试数组中是否所有的元素均满足特定要求。
- 数组实例的其他方法：
  - `sort()` 方法：给数组中的元素进行排序。
  - `reverse()` 方法：将数组中的元素进行逆序排列。
  - `fill()` 方法：用一个固定值去填充数组中指定索引位置的数组值。
  - `map()` 方法：对数组中的每个元素执行一次回调函数，返回由执行结果构成的新数组。
  - `reduce()`、`reduceRight()` 方法：依次对数组的每个元素执行回调函数，并传入前一次执行的返回值。
  - `entries()`、`keys()`、`values()` 方法：返回一个数组迭代器对象。
