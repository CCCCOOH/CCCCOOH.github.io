---
title: ES6函数、对象和面向对象扩展
createTime: 2025/02/23 20:39:14
permalink: /demo/nxyiresv/
---

# 函数扩展

## 默认参数

通用的写法：

```js
function func(a, b, ..., c = '默认值c', d = '默认值d', ...) {
    ...
}
```

其中，需要注意的是，有默认值的尽量写在后面并且所有形参参数不允许重复申明。具体例子：

```js
function test() {
    return 13
}

// 函数可以作为形参的接收
function func(words, name = '🍎', age = test()) {
    console.log(words, name, age)
}

func('请给我一个')
func('请给我一个', '🍐')
func('请给我一个', '')
```

> 对于没有传入的参数，如果没有默认值，默认是`undefined`。

## 剩余参数

可以使用均摊符号`...`来接受最右边的所有参数，所有接受的参数会以数组的形式放入该变量。

```js
function func(a, ...rest) {
  console.log(rest)
}

func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

但是注意不能这样写，控制台会报错：

```js
function func(a, ...rest, b) {
  console.log(rest)
}
```

## 箭头函数

函数的语法糖，写法如下:

```js
let sum = (a, b) => {
  return a + b
}
console.log(sum(1, 2))
```

单参数或单返回值的两种缩写：

```js
// 单个参数的缩写
let sum = a => {
    return a * 2
}
console.log(sum(2))

// 单个返回值进一步缩写，省略return和{}
let sum2 = a => a * 2
console.log(sum2(3))
```

特别声明，如果返回对象时想使用缩写必须用小括号包住，防止被当成函数体处理：

```js
let student = () => ({ name: "小蓝" })
console.log(student())
```

> 剪头函数同样可以使用函数的均摊语法，默认参数语法。

# 对象扩展

## 字面量扩展

### 属性的简洁表示

对于参数和对象值重复的申明，可以使用语法糖：

```js
// ES6写法
const name = '闷墩儿'
const age = 2
const dog = { name, age }
console.log(dog)

// 等价于下方的写法
const name2 = '闷墩儿'
const age2 = 2
const dog2 = { name2: name2, age2: age2 }
console.log(dog2)
```

### 方法的简洁表示

对于方法也有更加简单的写法，相比于ES5：

```js
// ES6写法
const name = '闷墩儿'
const dog = {
  run() {
    return name + '在公园里奔跑！'
  },
}

// ES5写法
// const name = '闷墩儿'
// const dog = {
//   run: function () {
//     return name + '在公园里奔跑！'
//   },
// }
```

### 属性名表达式

属性名可以使用`[]`方括号的写法，和`Python` 中的写法差不多：

```js
const ch = '2'
const key = `name${ch}`
const dog = {
  [key]: "闷墩儿",
}

console.log(dog[`name${ch}`])
```

## 对象扩展运算符

使用`...`均摊符号，可以将对象均摊出来，不仅可以用于快速复制一个对象，还可以用于合并对象：

```js
let obj1 = { species: '柯基', name: '闷墩儿', age: 2 }
let obj2 = { food: '狗粮' }
let obj3 = { ...obj1, ...obj2 }
console.log(obj3)
```

> 对应重复的`key`，合并时会被后面的对象所覆盖。

## 对象新增方法
### Object.is() 方法

直接用`==`或`===`判断变量相等与否会产生一些问题：

```js
console.log(-0 == +0) // true
console.log(-0 === +0) // true

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

console.log(7 == '7') // true
```

但使用`Object.is()`就能解决：

```js
console.log(Object.is(-0, +0)) // false
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(7 == '7')) // false
```

### Object.assign() 方法 

该方法用于将对象合并起来，并且是浅拷贝：

```js
let obj1 = { name: '闷墩儿', food: '狗粮' }
let obj2 = { age: 2, hobby: '跑圈圈' }
let obj3 = { color: '黑白黄' }
Object.assign(obj1, obj2, obj3) // 将 obj2 和 obj3 合并到 obj1 中
console.log(obj1)
obj2.hobby = '游泳'
console.log(obj2)
console.log(obj1)
```

# 面相对象编程

## 类的申明

在ES6中申明一个类的方法：

```js
class MyClass {
  // constructor() 方法是类的默认构造方法
  constructor(num) {
    this.num = num
    this.enginesActive = false
  }
  // 相当于 MyClass.prototype.startEngines
  startEngines() {
    console.log('num =', this.num)
    console.log('starting ...')
    this.enginesActive = true
  }
}

const myclass = new MyClass(1)
myclass.startEngines()
```

### 类的表达式

类和函数都有两种存在形式：

- 声明形式（例如 `function`、`class` 关键字）。
- 表达式形式（例如 `const A = class{}`）。

```js
// ES6 语法
let DogType = class {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(`大家好！我是一只小${this.name}。`)
  }
}

let dog = new DogType('柯基')
dog.sayName()
console.log(dog instanceof DogType)
console.log(dog instanceof Object)
```

### 命名表达式

和函数一样，可以给表达式重新命名：

```js
let DogName = class MyClass {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}
console.log(typeof DogName)	// function
console.log(typeof MyClass)	// undefined
```

`MyClass`是只存在类内部的标识符，在类外部不存在。

## 类的继承

### extends 关键字

使用`extends`关键字来继承类：

```js
class child_class_name extends parent_class_name {}
```

### extends 接表达式

`extends`不仅可以接类，还可以紧跟一个表达式：

```js
function func(message) {
  return class {
    say() {
      console.log(message)
    }
  }
}
class Person extends func('欢迎来到蓝桥云课！') {}

person = new Person()
person.say()
```

> 本质是还是在继承类。

### super 关键字

继承了父类后如果想要重写构造函数，必须在所有`this`调用前调用一遍`super()`，如果不写系统也会自动生成。

```js
class Animal {
    constructor(name, age, speed) {
        this.name = name
        this.age = age
        this.speed = speed
    }
    run() {
        console.log(`${this.age}岁的${this.name}酷跑了 ${this.speed} 公里。`)
    }
    stop() {
        console.log(`${this.name}停止了奔跑。`)
    }
}

class Dog extends Animal {
    constructor(name, age, speed, species) {
        super(name)
        this.species = species
    }
    run() {
        console.log(`${this.name}是一只奔跑的${this.species}`)
    }
}

let dog = new Dog('闷墩儿', '一', 5, '狗')
dog.run()
```



## 类的属性和方法

### 静态属性和方法

```js
class Dog {
    static dogName = '闷墩儿'
    static show() {
        console.log(`我叫:${this.dogName}`)
    }
}
console.log(Dog.dogName) // 闷墩儿
Dog.show()
```

类的静态成员变量可以被继承。

### 私有属性和方法

使用下方写法可以申明一个私有成员变量：

```js
// 私有属性
#propertiesName
// 私有方法
#methodName()
```
