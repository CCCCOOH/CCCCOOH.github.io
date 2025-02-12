---
title: Vue3重修笔记
date: 2025-02-10 07:01:41
tags: Vue
excerpt: '重新学习Vue3后写下的一些笔记'
categories:
  - 前端
  - Vue
---

## 一、前言

在大一上这段时间，看着尚硅谷前端老师的课自学了`Vue2`，再往后的`Vue3`课程由于期末周突然而至没有深挖。

时隔几个月，时间转眼来到寒假，跟着蓝桥杯国赛班再次学到了`Vue`的内容，在看到`Vue3`的内容时大部分之前学过的知识都能在脑中突然乍现，不过还是略有遗忘，这一次学习`Vue3`决定从头开始留下一些笔记便于复习。

> 本文笔记📒大部分内容借鉴于国赛班的教程文档。

## 二、第一个 Vue 程序

创建一个简单的`Vue3`程序可以按照如下步骤执行：

1. 利用`script:src`在`head`中引入`Vue`的CDN文件：

``` html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

2. 创建一个根`div`：

```html
<div id="app">
    {{msg}}
</div>
```

3. 结构`Vue`对象得到`createApp, ref`，使用`createApp`创建一个`Vue`应用的实例对象，这里赋值给了`app`。利用`app.mount('#app')`方法将`Vue`应用实例与我们的根`div`绑定在一起，为它服务。在`setup()`中使用`ref`创建一个响应式的属性`msg`，`return`它得到响应式的变量。

```html
<script>
    const { createApp, ref } = Vue
    const app = createApp({
        setup() {
            const msg = ref('Hello World!') // Step 5：声明一个属性 msg 并为其赋予初始值
            return { msg }
        },
    })
    app.mount('#app') 
</script>
```

实际上，为你的项目引入`Vue`总共有四种方法：

1. 在页面上以 [CDN](https://cn.vuejs.org/guide/quick-start#using-vue-from-cdn) 包的形式导入。
2. 下载`JavaScript `文件并[自行托管](https://www.jsdelivr.com/package/npm/vue)。
3. 使用 [npm](https://www.npmjs.com/package/vue) 安装它。
4. 使用官方的 [CLI](https://cn.vuejs.org/guide/quick-start#creating-a-vue-application) 来构建一个项目。

下面额外讲一下如何使用`npm`引入`Vue`，有两种方法：

```bash
# 1.最新稳定版安装
npm install vue@next
# 2.指定版本安装
npm install vue@3.5.1
```

## 三、双向绑定

学习`Vue`双向绑定语法是向新手展示`Vue`魅力最好的方法：

```html
<div id="app">
    <h1> {{ msg }} </h1>
	<input v-model="msg">
</div>
```

这段代码在根`div`下创建了一个`input`框，这个`input`框的`value`值会和`msg`这个变量双向的绑定在一起，`msg`改变，`input`的`value`就会改变。`input`中的`value`改变，`msg`中的值也会改变。不得不让人感叹：“早知道，还得是`Vue`虚拟盗墓大法”。

## 四、文本插值

有时候我们渲染的数据可能是一个对象，可以通过`ref({})`来创建，在节点中使用`{{userInfo.xxx}}`来使用即可。这种差值语法支持各种`js`的表达式，其通用性可以保证。

```js
setup() {
    const userInfo = ref({
        name: '小王',
        age: 15,
        pet: {type: '小狗', name: '喵喵', color: 'Eva紫'}
    })
    return { userInfo };
}
```

## 五、常用指令

`Vue3`提供了许多内置指令来实现各种各样的功能，详细使用方法参见[Vue官方文档](https://cn.vuejs.org/api/built-in-directives)。

比如上面提到过利用`v-model`来实现双向绑定，这里的`v-model`就是一个指令。

### 5.1 v-bind

该指令可以为属性动态绑定一个表达式。，例如这里的`imgPath`是一个`Vue`中`ref`的字符串，但是能用`v-bind`这个指令动态绑定给`src`这个属性。

这个指令非常常见，所以`Vue3`提供了一种简写，直接用`:`就能表示`v-bind:`。

```html
<img v-bind:src="imgPath" />
<!-- 简写语法如下 -->
<img :src="imgPath" />
```

### 5.2 v-on

该指令用于给元素绑定事件，比如`v-on:click`就是绑定一个`click`点击事件，他的简写是一个`@`：

```html
<a v-on:click="doSomething"> ... </a>
<!-- 简写语法如下 -->
<a @click="doSomething"> ... </a>
```

这里需要提一个新的事情，在之前申明一个变量我们一直用的都是`const msg = ref('Hello')`这种写法。但是如果是函数，就可以直接申明成：`function myFn() { ... }`这样再正常导出即可。具体原因我试了下，如果给没有`ref`的变量进行双向绑定，该变量不会响应式的更新，但如果是`ref`申明出来的变量就会响应式的更新。所以我推测`ref`和`Vue`内的`MVVM`模型的响应式原理有关，具体原理以后会说。但是函数就不需要向变量一样响应式变化，函数更多作为一种存储程序逻辑的模板的功能存在。

这里和之前有一点不同之处，`v-on:`的冒号后面跟着一个`click`参数，这里其实是一个特殊的写法。其中方括号中的属性名叫作**动态参数**。这个动态参数可以是一个表达式，并且表达式最终返回的结果作为最终的参数来使用。

由此可见，动态参数能实现将一个动态的可以变化的事件绑定给元素。

```html
<a v-bind:[attributeName]="url"> ... </a>
```

### 5.3 动态参数

在`v-on`中我提到了动态参数，但我认为有必要单独来讲一下，因为使用动态参数的时候存在一些语法上的约束需要新手注意。

```html
<input v-on:[eventName]="doSomething" />
```

先用一个代码来形象的解释下他的作用，其实有点类似`ES6`中对象的键名的写法。上面这行代码中的`eventName`的值如果是`'focus'`，`focus`就会作为值返回，所以就等价于了`v-on:focus="doSomething"`。



#### 5.3.1 对动态参数值的约束

动态参数预期会求出一个字符串，异常情况下值为 `null`。这个特殊的 `null` 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

#### 5.3.2 对动态参数表达式的约束

动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML 属性名里是无效的。例如：

```html
<!-- 这会触发一个编译警告 -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

变通的办法是使用没有空格或引号的表达式，或用后面将会学到的**计算属性**替代这种复杂表达式。

在 DOM 中编写模板时，还需要**避免使用大写字符来命名键名**，因为**浏览器会把属性名全部强制转为小写**：

```html
<!--
在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。
除非在实例中有一个名为“someattr”的 property，否则代码不会工作。
-->
<a v-bind:[someAttr]="value"> ... </a>
```

注意，这里的`someAttr`即使是一个变量并且变量的值全是小写字母也不行，因为浏览器在看到这段代码的时候会去寻找`someattr`这个变量，但是这个变量显然不存在，于是会出现异常。

![image-20250210043755185](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100438453.png)

> 具体就是长这个样子。

#### 5.3.3 使用动态参数

既然了解了那么多，我们一起来写一下动态参数语法吧。

```html
<!-- html部分 -->
<div id="app">
    <div v-bind:[attributename]="msg" v-on:[eventname]="changeMsg">
        {{ other }}
    </div>
</div>
<!-- 下面是script部分 -->
<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const msg = ref('你好，世界~')
            const other = ref("你好，Vue!")
            const attributename = ref("title"); // 动态属性名称
            function changeMsg() {
                console.log('如change~');
            }
            const eventname = ref("click"); // 动态事件名称
            return { attributename, eventname, msg, changeMsg, other };
        },
    });
    app.mount("#app");
</script>
```

可以看的出来，不仅可以为指定的属性绑定值，就连这个所谓的“属性”也能动态的改变。响应式的优越性可见一斑了。

也可以这样写：

```html
<div id="app">
    <a v-bind:[myatt]="myurl"> {{msg}} </a>
</div>

<!-- Vue脚本部分 -->
<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const myatt = ref('href');
            const msg = ref('去Sy.online看看')
            const myurl = ref('https://shenying.online');
            return { myatt, myurl, msg }
        },
    });
    app.mount("#app");
</script>
```

### 5.4 修饰符

如果我们定义了这样一个`a`标签：

```html
<a v-bind:[attributename]="msg" v-on:[eventname]="changeMsg" href="https://shenying.online">
  {{ msg }}
</a>

<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const attributename = ref('title')
            const eventname = ref('click')
            const msg = ref('你好，世界!')
            function changeMsg() {
                msg.value = '你好，Vue'
            }
            return { attributename, eventname, msg, changeMsg }
        },
    });
    app.mount("#app");
</script>
```

你会发现，在点击该标签时，默认的页面跳转也会同时执行，在`Javascript`中我们尝试用`event.preventDefault()`来阻止默认的行为。

也就是把`changeMsg()`方法改为：

```js
function changeMsg(event) {
  event.preventDefault() // 阻止事件默认行为
  msg.value = '你好蓝桥！'
}
```

其实，Vue 为了方便，直接把“阻止事件默认行为”这样的操作变成了指令的修饰符，所以我们通过指令修饰符可以这样做：

```html
<a v-bind:[attributename]="msg" v-on:[eventname].prevent="changeMsg" href="https://shenying.online">
    {{ msg }}
</a>
```

如果不使用动态参数就是`v-on:click.prevent`。

### 5.5 v-html

上面已经展示过文本插值的便捷性了，但如果一个变量中存储的是`DOM`结构，想使用该结构插入某个元素，就无法使用文本插值来正常显示他，因为文本插值不会解析`HTML`元素，只会将变量作为正常的文本输出。为了解决这个问题就有了`v-html`。

```html
<body>
    <div id="app">
        <p> {{htmlValue}} </p>
        <p v-html="htmlValue"></p>
    </div>
    <script>
        const { createApp, ref } = Vue;
        const app = createApp({
            setup() {
                const htmlValue = ref(`<h1>我是一个标题{{msg}}</h1>`)
                const msg = ref('你好，世界.')
                return { htmlValue, msg }
            },
        });
        app.mount("#app");
    </script>
</body>
```

通过这个例子，我们可以看到`v-html`确实解决了这个问题，它可以更新元素的`innerHtml`。但还是有局限存在，它的内容只能作为普通的`html`解析，不能解析成`Vue`模板。

> 当然，直接动态渲染任意的`html`是非常危险的，会造成[XSS 攻击](https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting)，这也是老生常谈的话题了。顺便提一嘴，XSS 是 2017 年[第七名最常见的 Web 应用程序漏洞](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS))。 

看到 innerHTML 的同学肯定会联想到它的姐妹 innerText，没错，在 JavaScript 中，我们经常会用到这两个属性去更新元素内容。同样，Vue 中也有它相对应的指令—— `v-text`，一起来看下。

### 5.6 v-text

`v-text` 指令用于更新元素的 [textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent)，会将整个元素中的内容进行替换。如果只需要更新元素内容中的一部分，则需要使用插值表达式。

```html
<span v-text="msg"></span>
<span>{{ msg }} </span>
```

接下来我们再来看一个用于优化更新性能的指令—— `v-once`。

### 5.7 v-once

在模板中使用 `v-once` 指令的元素，不管里面的数据如何发生动态变化，也只会渲染一次。随后的重新渲染，元素及其**所有的子节点**将被视为静态内容并跳过。该指令可以用于优化更新性能。

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{ msg }}</span>

<!-- 有子元素 -->
<div v-once>
    <h1>comment</h1>
    <p>{{ msg }}</p>
</div>
<p> {{msg}} </p>
<input type="text" v-model="msg">
```

这里例子中，通过`input`来改变`msg`的值，明显可以发现`v-once`下的所有的结点不会再次改变和渲染。

## 六、组合式Api

Vue官方提供了两种代码书写风格：**选项式 API** 和**组合式 API**。它们的简要介绍可以查看[官网的说明](https://cn.vuejs.org/guide/introduction.html#api-styles)。考虑到易用性和可扩展性，接下来的实验内容均采用**组合式 API** 。

首先是`setup()`方法。

### 6.1 setup() 方法

因为在我们前面的例子中，它出现的频率很高，而且我们发现所有的响应式数据的声明和函数的定义貌似都写在它里面。

**`setup` 函数是一个组件选项，作为组件中组合式 API 的起点（入口），在组件被创建之前执行**。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const { createApp } = Vue
      const app = createApp({
        setup() {
          return {}
        },
      })
      app.mount('#app')
    </script>
  </body>
</html>
```

例如上面这段代码，我们在应用配置中添加了一个 `setup()` 方法，该函数用于定义后续将要使用的响应式数据和方法等，并将这些数据和方法整体打包成一个对象返回出去，供该组件的其它部分使用。

所以就可以这么写：

```html
<div id="app">
    <img :src="dog.imgPath" width="200" />
    <p @click="change">{{ dog.name }}</p>
</div>
<script>
    const { createApp } = Vue
    const app = createApp({
        setup() {
            const dog = {
                name: '二哈',
                imgPath: 'https://labfile.oss.aliyuncs.com/courses/5428/1.jpg',
            }
            function change() {
                console.log(dog)
                dog.name = '小汪'
                console.log(dog)
            }
            return { dog, change }
        },
    })
    app.mount('#app')
</script>
```

这样却出现了一个问题，点击"二哈"后页面上的二哈并不会响应式的改变。那是因为普通的申明方式在`setup()`中不具备响应式的渲染能力。

1. 为了解决这个问题，需要在Vue中引入`Reactive`函数：

```javascript
const { createApp, reactive } = Vue
```

2. 在`setup()`函数中调用`reactive()`函数，将对象作为参数传入即可：

```js
const dog = reactive({
  name: '二哈',
  imgPath: 'https://labfile.oss.aliyuncs.com/courses/5428/1.jpg',
})
```

3. 在 `setup()` 中将 `reactive()` 函数调用之后的返回值，以对象属性的形式返回出去。

### 6.2 ref() 方法

可惜 `reactive()` 函数有一个缺点，它无法将一个简单类型的数据转化为响应式数据，且一级属性不可变。一起来验证一下。

```html
<div id="app">
    <h1>变量：{{msg}} </h1>
    <button @click="myFn">msg++</button>
</div>
<script>
    const { createApp, reactive } = Vue
    const app = createApp({
        setup() {
            const msg = reactive(0);
            function myFn() {
                msg.value++;
                console.log(msg);
            }
            return { msg, myFn }
        },
    })
    app.mount('#app')
</script>
```

这段代码中的`msg`不会响应式的变化，控制台会一直输出`0`，由此可见`reactive`不适用于简单场景下的响应式渲染。

![image-20250210060605741](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100606812.png)

其意思也就是不能使用 `reactive()` 声明一个值为 0 的响应式数据，因为它只能用于声明复杂类型的响应式对象。

为了解决这个问题，我们需要使用 `ref()` 函数。

`ref()` 函数接受一个简单类型或者复杂类型的传入，并返回一个响应式且可变的对象。

其语法如下：

```js
const { ref } = Vue;
// ...
const num = ref(0);
```

因为是一个响应式的可变对象，需要改变`num`的值的时候通过改变`num.value`来改变它。

> 推荐一种写法：只有我们明确知道要转换的对象内部的字段名称我们才使用 `reactive()`，否则就一律使用 `ref()`，从而降低在语法选择上的心理负担。

### 6.3 toRefs() 函数

`reactive()` 函数处理后的返回对象还有一个问题，那就是：如果给这个对象解构或者展开，会让数据丢失响应式的能力。

比如，在“个人中心页”我们有个响应式数据对象 `user` 用于存储用户信息，并显示在页面中。我们有如下写法：

```html
<div id="app">
  <div>
    <h1>个人中心页</h1>
    <p>Hi, {{ user.nickname }}!</p>
    <p>{{ user.phone }}</p>
  </div>
</div>
<script>
  const { createApp, reactive } = Vue
  const app = createApp({
    setup() {
      const user = reactive({
        phone: '13211111111',
        nickname: 'Tom',
      })
      return { user }
    },
  })
  app.mount('#app')
</script>
```

这里的`user`对象名好像没有起到太大的作用，那么能不能在模版中省略`user`直接书写 `nickname` 和 `phone` 呢？为此，在`setup()`返回的时候把`user`对象的属性展开是不是就可以了呢？我们尝试做如下的修改：

```html
<div id="app">
  <div>
    <h1>个人中心页</h1>
    <p>Hi, {{ nickname }}!</p>
    <p>{{ phone }}</p>
  </div>
</div>
<script>
  const { createApp, reactive } = Vue
  const app = createApp({
    setup() {
      const user = reactive({
        phone: '13211111111',
        nickname: 'Tom',
      })
      return { ...user }
    },
  })
  app.mount('#app')
</script>
```

看似没有什么问题。

但是，事情并不如我们所想的那样简单。

我们接到了一个可以在页面中修改昵称的需求，于是又在页面上添加了一个用于修改昵称的按钮。代码如下：

```html
<button @click="nickname='lily'">修改昵称</button>
```

但是，我们遗憾的发现页面上没有任何变化。

为了解决这个问题，我们需要引入另一个函数——`toRefs()`。

它可以保证被展开的响应式对象的**每个属性都是响应式**的，其用法也比较简单：

```js
const { toRefs } = Vue
// ...
setup() {
// ...
  return { ...toRefs(user) }
}
```

然后页面上就能正确渲染出来了。

## 七、事件处理

### 7.1 内联事件处理器

我们可以使用 `v-on` 指令 （通常缩写为 `@` 符号） 来监听 DOM 事件，并在触发事件时执行一些 JavaScript。

其用法为 `@click="JavaScript 表达式"`。

例如这样：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>一共有 {{ count }} 个赞👍</h1>
      <button @click="count++">点赞</button>
    </div>
    <script>
      const { createApp, ref } = Vue
      const app = createApp({
        setup() {
          const count = ref(0)
          return { count }
        },
      })
      app.mount('#app')
    </script>
  </body>
</html>
```

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100625168.gif)

### 7.2 方法事件处理器

有时，许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中不是长久之计。其实 `v-on` 还可以接收一个需要调用的方法名称。

其用法为 `@click="methodName"`。

在`setup()`中定义一个同名的方法即可使用：

```html
<div id="app">
    <h1>一共有 {{ count }} 个赞👍</h1>
    <button @click="like">点赞</button>
</div>
<script>
    const { createApp, ref } = Vue
	const app = createApp({
        setup() {
            const count = ref(9995);
            function like() {
                count.value++;
                if (count.value == 10000) {
                    alert('恭喜点赞次数突破 1w 大关！🎉');
                }
            }
            return { count, like }
        },
	})
app.mount('#app')
</script>
```

### 7.3 内联事件处理器中调用方法

除了直接接收一个需要调用的方法名称，也可以在内联 JavaScript 语句中调用该方法。比如我们想在调用方法的同时传递给方法一些必要的参数。

其用法为 `@click="methodName(参数)"`。

```html
<div id="app">
    <h1>一共有 {{ count }} 个赞👍</h1>
    <button @click="change(-1)">减少</button>
    <button @click="change(1)">增加</button>
</div>
<script>
    const { createApp, ref } = Vue
    const app = createApp({
        setup() {
            const count = ref(100)
            function change(val) {
                count.value += val
            }
            return { count, change }
        },
    })
    app.mount('#app')
</script>
</body>
```

页面效果如下：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100636010.gif)

### 7.4 事件对象 $event

有时，我们也需要在内联事件处理器中访问原始的 DOM 事件，比如我们想通过点击获取当前元素的信息时。此时可以用特殊变量 `$event` 把它传入方法。

```html
<div id="app">
    <span v-show="!isEdit" @click="showEdit($event)">点我编辑</span>
    <input v-show="isEdit" type="text" v-model="inputVal" />
</div>
<script>
    const { createApp, ref } = Vue
    const app = createApp({
        setup() {
            const inputVal = ref('') // 存储用户输入的内容
            const isEdit = ref(false) // 控制输入框和文本显隐切换
            function showEdit(event) {
                console.log(event);
                inputVal.value = event.target.innerText // 获取 span 标签中的文本
                isEdit.value = true // 隐藏文本，显示输入框
            }
            return { inputVal, isEdit, showEdit }
        },
    })
    app.mount('#app')
</script>
```

> 这里的`v-show`是一个根据布尔值决定是否渲染元素的指令。

### 7.5 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。

尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

记住，使用`Vue`的时候永远告诉自己一句话：“尽量不要自己去操纵 DON结构。”想想这个操作真的需要自己用原生Js操作DOM吗？能否用`Vue`的方式来解决？

为了解决这个问题，Vue 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

来看下 Vue 都为我们提供了哪些**事件修饰符**：

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```

例如，下面这个例子：

```html
<div id="app">
    <a href="https://shenying.online" @click.prevent="msg='已点击！'">{{msg}}</a>
</div>
<script>
    const { createApp, ref } = Vue
    const app = createApp({
        setup() {
            const clicked = ref(false);
            const msg = ref('等待点击！')
            return { msg }
        },
    })
    app.mount('#app')
</script>
```

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100646433.gif)

可以看到链接失去了跳转的能力。

### 7.6 其他修饰符

我们在学习 JavaScript 事件的时候已经知道，除了常用的鼠标事件之外，还有键盘（按键）事件、UI（系统）事件等。Vue 为这些事件同样也提供了修饰符。

#### 7.6.1 键盘按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 指令在监听键盘事件时添加**按键修饰符**。

例如，我们有一个 `<input>` 输入框，我们需要在点击“回车键”的时候打印 `<input>` 输入框里面的值：

```html
<div id="app">
  <input @keyup.enter="handleEnter" />
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      function handleEnter(event) {
        console.log(event.target.value)
      }
      return { handleEnter }
    },
  })
  app.mount('#app')
</script>
```

除了 `.enter` 按键修饰符外，常用的还有下面这些：

- `.enter`
- `.tab`
- `.delete` （捕获“删除”和“退格”键）
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

#### 7.6.2 系统修饰符

我们还可以搭配着以下系统修饰键来实现多个按键组合效果：

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

例如当 ctrl+enter 键同时抬起的时候，我们打印 `<input>` 元素的值：

```html
<div id="app">
  <input @keyup.enter.ctrl="handleEnter" />
</div>
```

可以看到，当有多个修饰符的时候，我们直接用 `.` 符号连接就可以了。

#### 7.6.3 `.exact` 修饰符

`.exact` 修饰符允许我们控制由精确的系统修饰符组合触发的事件。

上面的例子中：

```html
<div id="app">
  <input @keyup.enter.ctrl="handleEnter" />
</div>
```

我们希望当 enter+ctrl 键同时抬起的时候，才会触发 `handleEnter` 事件。但是当我们同时抬起 enter+ctrl+shift 三个键的时候， `handleEnter` 事件也会被触发。也就是说不管我们抬起几个键，只要包含了 enter+ctrl 键时，事件都会触发：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100656101.gif)

如果我们明确规定只需要抬起 enter+ctrl 键才能触发 `handleEnter` 事件的时候，我们可以利用 `.exact` 修饰符：

```html
<div id="app">
  <input @keyup.enter.ctrl.exact="handleEnter" />
</div>
```

页面的效果如下：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502100656032.gif)

## 八、生命周期

### 8.1 介绍

什么是生命周期？

首先来看下`Vue`官方的生命周期示意图：

![Vue官方生命周期示意图](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/uid1889095-20240830-1725010317320.png)

我们可以把 Vue 实例看作一个有生命的个体，它从被创建（`createApp()`）到被销毁 GC（Garbage Collection：垃圾回收）回收的整个过程，被称为 Vue 实例的生命周期。

Vue 实例有一个完整的生命周期，包括：开始创建、初始化数据、编译模版、挂载 DOM、初次渲染组件-更新数据-重新渲染组件、卸载等一系列过程。

从上面的图中，我们能清晰地看到 Vue 实例的整个生命周期的执行过程。

### 8.2 生命周期钩子

Vue提供的钩子函数有哪些？

| 钩子函数            | 说明                                                   |
| ------------------- | ------------------------------------------------------ |
| `onBeforeMount()`   | 组件挂载到真实 DOM 树之前被调用。                      |
| `onMounted()`       | 组件被挂载到真实 DOM 树中时自动调用，可进行 DOM 操作。 |
| `onBeforeUpdate()`  | 数据有更新被调用。                                     |
| `onUpdated()`       | 数据更新后被调用。                                     |
| `onBeforeUnmount()` | 组件销毁前调用，可以访问组件实例数据。                 |
| `onUnmounted()`     | 组件销毁后调用。                                       |

如果将整个生命周期按照阶段划分的话，总共分为三个阶段：初始化、运行中、销毁。

![生命周期缩略图](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/uid1889095-20240830-1725010439152.png)

### 8.3 使用方法

1. 首先需要导入生命周期函数（以`onBeforeMount`🪝为例）：

```js
const { createApp, ref, onBeforeMount } = Vue
```

2. 在`setup()`中调用，并将执行的函数作为参数传给钩子函数：

```js
setup() {
  const num = ref(0)
  onBeforeMount(() => {
    console.log(num);
  })
}
```

### 8.4 onBeforeMount() 钩子函数

其实也很简单，从字面意思上理解就是“挂载之前”。

在 `onBeforeMount()` 钩子函数中，虚拟 DOM 已经创建完成，马上就要渲染（挂载）到真实 DOM 树上。在这里我们可以访问和操作组件数据，且不会触发 `onUpdated()` 等其他的钩子函数，一般可以在这里做初始数据的获取，例如调用`ajax`请求数据什么的。

例如我们可以尝试在这个时期来访问数据是否存在：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <p id="counter">计数器：{{ num }}</p>
    </div>
    <script>
      const { createApp, ref, onBeforeMount } = Vue
      const app = createApp({
        setup() {
          const num = ref(0)
          onBeforeMount(() => {
            console.log('-------- onBeforeMount() --------')
            console.log(`[组件属性] ${num.value}`)
            const el = document.getElementById('counter')
            console.log(`[组件 DOM] ${el?.innerText}`)
          })
          return { num }
        },
      })
      app.mount('#app')
    </script>
  </body>
</html>
```

运行后发现返回的是`undefined`，说明这个时期的`num`的`value`值可以正常访问，但是由于还没有挂载到`DOM`上的原因，`el.innerText`是不存在的。

![截屏2025-02-10 07.14.29](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-02-10%2007.14.29.png)

> `?.`是对象的安全访问修饰符，是一种语法糖，如果对象中需要访问的数据不存在就会返回一个`undefined`否则正常返回。

### 8.5 onMounted() 钩子函数

字面上来理解就是，“挂载了之后”。我们知道，**ed**在英文中是过去式的意思，也就是表示动词已经完成了✅。

在 `onBeforeMount()` 钩子函数被调用之后，开始渲染出真实 DOM，然后执行 `onMounted()` 钩子函数。

此时，组件已经渲染完成，在页面中已经真实存在了，可以在这里做修改组件中属性（比如异步请求数据）、访问真实 DOM 等操作。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <p id="counter">计数器：{{ num }}</p>
    </div>
    <script>
      const { createApp, ref, onBeforeMount } = Vue
      const app = createApp({
        setup() {
          const num = ref(0)
          onBeforeMount(() => {
            console.log('-------- onBeforeMount() --------')
            console.log(`[组件属性] ${num.value}`)
            const el = document.getElementById('counter')
            console.log(`[组件 DOM] ${el?.innerText}`)
          })
          return { num }
        },
      })
      app.mount('#app')
    </script>
  </body>
</html>
```

可以看到，能正常访问到`DOM`中的`innerText`，因为此时数据已经被挂载到`DOM`数上了。

### 8.6 onBeforeUpdate() 钩子函数

当组件或实例的数据更改之后，会立即执行 `onBeforeUpdate()` 钩子函数，然后 Vue 的虚拟 DOM 会重新构建。虚拟 DOM 与上一次的虚拟 DOM 树利用 diff 算法进行对比之后重新渲染涉及到数据更新的 DOM。

我们一般不会在 `onBeforeUpdate()` 钩子函数中做任何操作。

具体的使用方法可以参考下面这段代码：

```html
<div id="app">
  <p id="counter">计数器：{{ num }}</p>
  <button @click="change">修改计数</button>
</div>
<script>
  const { createApp, ref, onBeforeUpdate } = Vue
  const app = createApp({
    setup() {
      const num = ref(0)
      function change() {
        console.log('-------- change() --------')
        num.value = 99
      }
      onBeforeUpdate(() => {
        console.log('-------- onBeforeUpdate() --------')
        console.log(`[组件属性] ${num.value}`)
        const el = document.getElementById('counter')
        console.log(`[组件 DOM] ${el?.innerText}`)
      })
      return { num, change }
    },
  })
  app.mount('#app')
</script>
```

控制台输出：

![截屏2025-02-10 07.30.41](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-02-10%2007.30.41.png)

可以看出来，因为是“BeforeUpdate()“，所以此时`DOM`还没有更新，`num`的数值虽然改变了但是`innerText`暂时没有更新。

并且，由于`Vue`会根据**diff算法**来聪明的判断是否需要重新渲染**dom结构**，所以再次点击按钮时`num`数值没有改变，`Vue`就会认为不需要重新更新和渲染`DOM`，从而不在调用`onBeforeUpdate`了。

### 8.7 onUpdated() 钩子函数

当数据更新完成后，`onUpdated()` 钩子函数会被自动调用。此时，数据已经更改完成，DOM 也重新渲染完成。这个时候，我们就可以操作更新后的虚拟 DOM 了。

使用方法如下：

```html
<div id="app">
  <p id="counter">计数器：{{ num }}</p>
  <button @click="change">修改计数</button>
</div>
<script>
  const { createApp, ref, onUpdated } = Vue
  const app = createApp({
    setup() {
      const num = ref(0)
      function change() {
        console.log('-------- change() --------')
        num.value = 99
      }
      onUpdated(() => {
        console.log('-------- onUpdated() --------')
        console.log(`[组件属性] ${num.value}`)
        const el = document.getElementById('counter')
        console.log(`[组件 DOM] ${el?.innerText}`)
      })
      return { num, change }
    },
  })
  app.mount('#app')
</script>
```

可以看到，同 `onBeforeUpdate()` 一样，再次点击按钮对 `num` 做相同值的修改时，`onUpdated()` 不会被触发。`onUpdated()` 中可以通过访问真实 DOM 获取到更新后的 `num` 的值。

### 8.8 onBeforeUnmount() 钩子函数

经过某种途径调用组件 `unmount()` 方法后，会立即执行 `onBeforeUnmount()` 钩子函数。开发者一般会在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等。

我们实现一个计数器效果，并在指定时间后将 Vue 组件实例销毁：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <p id="counter">计数器：{{ i }}</p>
    </div>
    <script>
      const { createApp, ref, onBeforeUnmount } = Vue
      const app = createApp({
        setup() {
          const i = ref(0)
          const timer = setInterval(() => {
            console.log(i.value++);
          }, 1000);
          onBeforeUnmount(() => {
            console.log('---- onBeforeUnmount ---');
            clearInterval(timer);
          })
          return { i }
        },
      })
      app.mount('#app')
      setTimeout(() => {
        app.unmount()
      }, 3000);
    </script>
  </body>
</html>
```

如果不在`onBeforeUnmount()`中清除`timer`，控制台上就会继续打印数字。但是很显然，应用已经被销毁了，`DOM`不在更新，有时候这是没有意义的。

### 8.9 onUnmounted() 钩子函数

组件的数据绑定、监听等等去掉之后，页面中只剩下一个 DOM 的空壳。这个时候，`onUnmounted()` 钩子函数被自动调用了，在这里做善后工作也是可以的，比如清除计时器、清除非指令绑定的事件等等。

由于代码基本一样，这里不列举，举一反三即可。

## 九、计算属性

虽然模版内的表达式非常便利，但是它们的设计初衷是用于简单运算的。如果在模版中放入太多逻辑，会让模版过重且难以维护。

例如，在购物车中有一种商品，我们希望根据单价和数量来计算它的总价。此外，我们希望添加一些关键性判断，在商品单价或数量是负值的时候令计算结果为 `NaN`。

我们的实现可能是这样的：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <ul>
        <li>商品名：{{ name }}</li>
        <li>商品单价：{{ price }} 元</li>
        <li>商品数量：{{ num }} 个</li>
      </ul>
      <p>商品“{{ name }}”的总价为：{{ price >= 0 && num >= 0 ? price * num : NaN }} 元</p>
      <button @click="addNum">增加商品数量</button>
    </div>
    <script>
      const { createApp, ref } = Vue
      const app = createApp({
        setup() {
          const name = ref('苹果')
          const price = ref(5)
          const num = ref(-1)
          function addNum() {
            num.value++
          }
          return { name, price, num, addNum }
        },
      })
      app.mount('#app')
    </script>
  </body>
</html>
```

页面效果如下：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/uid1889095-20240826-1724641092408.gif)

虽然这样写可以实现我们的需求，但是大家会发现插值表达式过于庞大，看着让人晕眩。

因此我们推荐使用**计算属性**来代替模板中复杂的插值表达式。

### 9.1 使用方法

在 Vue 中，计算属性使用 `computed()` 函数定义，它期望接收一个用于动态计算响应式数据的函数。

修改上文的代码：

```html
<div id="app">
    <ul>
        <li>商品名称：{{ name }}</li>
        <li>商品单价：{{ price }} 元</li>
        <li>商品数量：{{ num }} 个</li>
    </ul>
    <p>商品“{{ name }}”的总价为：{{ totalPrice }} 元</p>
    <button @click="addNum">增加商品数量</button>
</div>

<script>
    const { createApp, ref, computed } = Vue;
    const app = createApp({
        setup() {
            const name = ref("苹果");
            const price = ref(5);
            const num = ref(-1);
            const totalPrice = computed(() =>
                                        price.value >= 0 && num.value >= 0 ? price.value * num.value : NaN
                                       );
            function addNum() {
                num.value++;
            }
            return { name, price, num, totalPrice, addNum };
        },
    });
    app.mount("#app");
</script>
```

需要注意的是，`computed`方法需要在最上方解构`Vue`并引入。

使用计算属性还有一个好处，就是`Vue`知道`totalPrice`依赖于`num`和`price`，如果后两者发生了改动，`totalPrice`也会自动更新和渲染。

### 9.2 计算属性和普通方法

当然，我们也可以使用在 `setup()` 中定义普通方法的方式实现前面的功能，不过这种方式只建议在计算属性无法满足需求的复杂情况下使用。

```html
<div id="app">
  <ul>
    <li>商品名称：{{ name }}</li>
    <li>商品单价：{{ price }} 元</li>
    <li>商品数量：{{ num }} 个</li>
  </ul>
  <p>商品“{{ name }}”的总价为：{{ countTotal() }} 元</p>
  <button @click="addNum">增加商品数量</button>
</div>
<script>
  const { createApp, ref, computed } = Vue
  const app = createApp({
    setup() {
      const name = ref('苹果')
      const price = ref(5)
      const num = ref(-1)
      function countTotal() {
        return price.value >= 0 && num.value >= 0 ? price.value * num.value : NaN
      }
      function addNum() {
        num.value++
      }
      return { name, price, num, countTotal, addNum }
    },
  })
  app.mount('#app')
</script>
```

我们可以将同一函数定义为一个方法而不是一个计算属性，两种方式的最终结果确实是完全相同的。

然而不同的是，计算属性只在相关响应式依赖发生改变时才会重新求值。这就意味着只要 `price` 和 `num` 还没有发生改变，多次访问 `totalPrice` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

接下来，我们通过一个例子来验证下计算属性和普通方法在缓存利用上的区别。

```html
<div id="app">
    <p>计数值：{{ num }}</p>
    <button @click="addNum">增加</button>
    <p>使用计算属性：{{ getByComputed }}</p>
    <p>使用普通方法：{{ getByMethod() }}</p>
</div>
<script>
    const { createApp, ref, computed } = Vue;
    const app = createApp({
        setup() {
            const num = ref(0);
            function addNum() {
                num.value++;
            }
            const getByComputed = computed(() => {
                console.log("计算属性被调用....");
                return Date.now();
            });
            function getByMethod() {
                console.log("普通函数方法被调用....");
                return Date.now();
            }
            return { num, addNum, getByComputed, getByMethod };
        },
    });
    app.mount("#app");
</script>
```

上面的例子中，我们同时用普通的函数和计算属性写了一个获取当前时间的功能。并且可以看到，计算属性由于没有任何依赖的响应式属性，无论点击多少次按钮都只会调用一次。而普通函数却会一直调用。

这个例子说明，在性能开销比较大的计算场景下尽量使用计算属性，因为如果依赖的响应式属性没有改变，Vue会使用缓存，可以节省大量的计算。但在实时性比较强的场景下可以使用普通函数。我们在使用的时候需要根据实际情况选择恰当的实现方案。

### 9.3 可写的计算属性

在前文的示例中，定义计算属性时传入的函数，实际上是该计算属性的 [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) 函数，也就是一个必须具有返回值，且在访问计算属性时必须调用的函数。它不应有副作用，以易于测试和理解。

计算属性的完整写法是一个具有 getter 和 setter 函数的对象，默认情况下只有 getter，不过在需要时我们也可以提供一个 setter。

```html
<div id="app">
    <h2>
        firstName: {{firstName}}
    </h2>
    <h2>
        lastName: {{lastName}}
    </h2>
    <h2>
        fullName: {{fullName}}
    </h2>
    <button @click="change">更改</button>
</div>
<script>
    const { createApp, ref, computed } = Vue;
    const app = createApp({
        setup() {
            const firstName = ref('John')
            const lastName = ref('Smith')
            const fullName = computed({
                get() {
                    return firstName.value + lastName.value;
                },
                set(newValue) {
                    [firstName.value, lastName.value] = newValue.split(' ')
                }
            })
            function change() {
                fullName.value = 'Dig Big'
            }
            return { firstName, lastName, fullName, change }
        }
    })
    app.mount('#app')
</script>
```

## 十、侦听器

在Vue中我们使用`watch`对数据进行侦听，一旦数据改变就能捕捉到：

```js
const n = ref(0);
watch(n, (newValue, oldValue) => {
	console.log(newValue, oldValue);
})
```

比如这段代码，就是侦听`n`的变化。如果需要对数据进行限制就可以在这里进行处理，比如不希望`n`能超过5：`if (newValue > 5) n.value = oldValue;`。

对于`v-model`指令来说，`watch`的存在刚好可以胜任原来`input`事件的工作。

那么这个时候可能就会有人有这样的问题了：“什么时候用计算属性，什么时候用侦听器呢？”

显然，当数据存在依赖关系时，使用计算属性是最佳选择。因为在多个依赖关系之间添加多个侦听器过于繁琐。但如果数据没有依赖关系，只是需要监听数据的动态就可以使用侦听器。他本质上类似**ES6**中的数据代理**Proxy**。

### 10.1 即时侦听器

在默认情况下，Vue为了提高性能只会在数据发生变化时才会执行`watch`内的回调函数。有时候我们需要在创建侦听器的时候就立即执行一次回调就需要在第三个参数传入一个配置对象：

```js
watch(
  num,
  () => {
    console.log('num 发生了变化')
  },
  { immediate: true } // 即时侦听器
)
```

> 这个时候`newValue`是`num`的起始值，而`oldValue`是`undefined`。

### 10.2 深层侦听器

在默认情况下，用`watch`侦听对象对象内部的属性发生变化不会被侦听器捕捉到。需要在`watch`的配置项中传入一个`deep`参数并设置为`true`表示深层侦听。比如这里的`const list = ref(['a', 'b'])`是一个列表。

向`list`中添加数据时页面能够响应式的渲染，但`watch`没有反应。

```js
watch(
  list,
  () => {
    console.log('list 发生了变化')
  },
  { deep: true } // 深层侦听器
)
```

实测时候也能发现，加入`deep: true`后成功让侦听器深层侦听了。

## 十一、条件渲染

### 11.1 v-if 指令

`v-if`指令语法：

```html
<p v-if="isRender">这是一段隐藏文本。</p>
```

这里的`<p>`只会在`isRender=true`的情况下渲染。

### 11.2 v-else 指令

有"if"就有"else"，我们可以用`v-else`指令添加一个`else`代码块。

```html
<p v-if="isSunny">今天艳阳高照。</p>
<p v-else>今天可能下雨。</p>
```

### 11.3 v-else-if 指令

那当然也少不了`v-else-if`指令。

比如下面是一个用`status`来判断快递状态的多条件判断代码。

```html
<p v-if="status == 0">待揽收</p>
<p v-else-if="status == 1">已揽收</p>
<p v-else-if="status == 2">运输中</p>
<p v-else-if="status == 3">送货中</p>
<p v-else-if="status == 4">已签收</p>
<p v-else>物流信息暂时缺席，请咨询客服小姐姐</p>
```

### 11.4 v-show 指令

这个指令用于做显示和隐藏的切换，例如选项卡的功能就可以使用该方法实现：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502102012957.jpeg)

代码上和`v-if`基本一致，这里说说主要的区别：

1. `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建。
2. `v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
3. 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
4. 另外，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。

在使用上，像前面示例中根据天气情况展示对应信息以及根据响应式属性的值显示对应物流状态的需求，由于只需要在页面初始时渲染一次，而不会像选项卡那样频繁切换的情况，建议使用 `v-if`。如果一个页面中需要频繁切换，则使用 `v-show`。

`v-if`在渲染时如果条件为假，则真的会在DOM树上被移除，而`v-show`只是多了个`display=none`的`style`属性。

## 十二、列表渲染

### 12.1 v-for 指令

`v-for`指令能像用`for`循环遍历数组一样简单地渲染一整个数组中的数据。

```html
<p v-for="item in items">{{ item }}</p>
```

这里的`item`就代表着数组中的每一个元素，`items`就是等待遍历的数组。

也可以用`of`代替`in`效果一致，更接近`JavaScript`的语法。

```html
<p v-for="item of items">{{ item }}</p>
```

`v-for`还支持第二个参数，数组索引`index`。

```html
<p v-for="(item, index) in items">{{index}} - {{item}}</p>
```

类似于 `v-if`，我们也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容：

```html
<ul>
  <template v-for="item in items" :key="item.name">
    <li>{{ item.name }}</li>
    <li>{{ item.msg }}</li>
  </template>
</ul>
```

这里的`key`是每一个`item`的唯一标识。

### 12.2 v-for 作用域

和普通的`for`循环一样，`v-for`指令也有作用域。Vue中的`v-for`能访问到`setup()`中申明的变量。

下面这段代码中的`parentValue`能被正常访问，就像其他的文本插值那样。

```html
<li v-for="(item, index) of myList">
    姓名: {{item}} 索引: {{index}} -- {{parentValue}}
</li>
```

### 12.3 v-for 遍历对象

非常类似于`JavaScript`中的`for`循环，使用`v-for`语句遍历对象有以下几种方法：

```html
<li v-for="value in person">{{value}}</li>
<li v-for="value of person">{{value}}</li>
<li v-for="(info, key) of person">{{key}}：{{info}}</li>
<li v-for="(info, key， index) of person">{{key}}：{{info}} - {{index}}</li>
```

类似于`for`循环，`v-for`指令也可以使用嵌套的写法：

```html
<div id="app">
  <ul>
    <li v-for="user in userList">
      <h1>{{ user.name }}的信息</h1>
      <p>姓名：{{ user.name }}</p>
      <p>年龄：{{ user.age }}</p>
      <h3>爱好</h3>
      <ul>
        <li v-for="hobby in user.hobbies">{{ hobby }}</li>
      </ul>
    </li>
  </ul>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const userList = ref([
        { name: '小王', age: 19, hobbies: ['吃饭', '睡觉', '打游戏'] },
        { name: '小花', age: 18, hobbies: ['唱歌', '画画'] },
      ])
      return { userList }
    },
  })
  app.mount('#app')
</script>
```

良好的代码习惯是平时养成的，建议不超过三层嵌套。一是算法效率低，二是不利于代码后期的维护工作。

### 12.4 就地更新策略

Vue的列表渲染采用就地更新的策略。简单来说，如果数组发生了改变，Vue不会重新渲染所有的数据项，取而代之的是更新数组中与原数组相比变化的元素。

例如下图中插入了一个`f`，指挥更改与原数组不同的元素，从而就地更新。反馈到DOM上可以打开浏览器开发者工具，插入元素后只有`b`开始的元素的DOM结构有紫色闪过。

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502110205823.jpeg)

### 12.5 通过 key 管理状态

绑定了`key`之后的元素相当于有了一个唯一的标识。

这是绑定的方式：

```html
<li v-for="user in userList" :key="user.name">
    {{user.name}}
</li>
```

对于key有几个建议遵循的准则：

- 最好不要使用`index`作为唯一标识，`index`可能会变动。
- 如果不是故意的，最好绑定一个唯一的`key`，因为可以优化性能。

这是不绑定`key`的渲染原理图：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502110220397.jpeg)

这是绑定了`key`之后的原理图：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502110220539.jpeg)

可以看到，默认情况下需要重新渲染的元素由于有了唯一的标识，Vue认识它可以重用`DOM`结构，从而节省了内存开支。

### 12.6 v-for 和 v-if 同时使用

如果你在一个元素中同时用了`v-if`和`v-for`指令，不要让他们同时处理同一个结点：

```html
<div id="app">
  <h1>任务列表</h1>
  <ul>
    <li v-for="todo in todoList" :key="todo" v-if="index == 0">{{ todo }}</li>
  </ul>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const todoList = ref(['买菜', '洗衣服']) // 用于存储所有添加的任务
      return { todoList }
    },
  })
  app.mount('#app')
</script>
```

可以发现，无法找到`index`。这是因为`v-for`和`v-if`同时使用时，`v-if`的优先级要高于`v-for`，所以`v-if`找不到`v-for`身上的变量。

解决方法就是将`v-for`放到循环的外层：

```html
<template v-for="(todo, index) in todoList" :key="todo">
  <li v-if="index == 0">{{ todo }}</li>
</template>
```

## 十三、模板引用

虽然Vue开发者基本不怎么需要自己操作DOM结构，但在真实开发中总能碰到一些情况是需要自己操作DOM的。要实现这一点可以使用特殊的模板引用功能。

比如，我们需要在页面渲染后将光标定位到一个特定的`<input>`框上去：

```html
<div id="app">
    光标定位：<input type="text" name="input" ref="myInput">
</div>
<script>
    const { createApp, ref, onMounted } = Vue;
    createApp({
        setup() {
            const myInput = ref(null);
            onMounted(() => {
                console.log(myInput.value);
                myInput.value.focus();
            })
            return { myInput };
        },
    }).mount("#app");
</script>
```

可以看到，我们只是给`input`添加了一个`ref`的属性，通过它将`myInput`和`<input>`绑定在了一起。然后我们在`onMounted`也就是渲染完成的钩子函数中执行逻辑`focus()`即可。

这段代码中的`ref`会在DOM挂载后将`myInput`的值指向使用`ref`属性的那个元素。

### 13.1 侦听模板引用

除了用生命周期钩子`onMounted`，我们也能使用`watchEffect`来侦听模板引用的变化，也就是`ref`变量的变化。

```js
const { createApp, ref, watchEffect } = Vue;
createApp({
	setup() {
    const myInput = ref(null)
    watchEffect(() => {
        console.log(myInput.value);
    })
	return { myInput };
},
}).mount("#app");
```

运行后发现终端输出了两次，第一次创建`myInput`这个模板引用的时候被Vue侦听到一次，第二次挂载后元素绑定它的时候也被侦听到了。

```html
>> null
>> <input type="text" name="input">
```

因此，为了确保侦听在正常DOM挂载后进行，而不是一开始初始化的`null`。需要为侦听器添加一个`flush： 'post'`的配置项。

```js
// 侦听模版引用
watchEffect(
  () => {
    // DOM 元素将在初始渲染后分配给 ref
    console.log(focusInput.value)
    // focusInput.value.focus() // 光标定位
  },
  { flush: 'post' }
)
```

### 13.2 v-for 中的模板引用

在`v-for`中绑定`ref`时，例如下面的代码。被绑定的`itemRefs`将不是一个单独的模板，而是将`v-for`遍历的所有元素添加到这个`itemRefs`中去。

`itemRefs.value`是一个数组，其中的每个元素是这里`v-for`遍历的所有的`<li>`的引用。

```html
<li v-for="(item, index) in list" ref="itemRefs">
    {{index}} - {{item}}
</li>
```

我们可以打印一下`itemRefs`：

```javascript
 onMounted(() => console.log(itemRefs.value));
```

看到确实是一个ref代理的数组：

![image-20250211031320975](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502110313474.png)

## 十四、样式绑定

学了这么多枯燥的`Vue`内容，你是否还记得当初那个令你神往的让你迷恋前端的亚当的苹果 - “CSS”。没错，接下来就围绕在Vue中绑定样式（也就是style属性）展开。

### 14.1 内联样式绑定

先来回顾一下，在没有Vue之前我们是怎么写`style`的：

```html
<div style="background-color: #87cefa; width: 100px; height: 40px"></div>
```

如果想要修改这个样式，我们可以利用`JavaScript`的`DOM`操作来获取它，并修改它的`style`。

如果是Vue呢？我们很容易会想到`v-bind`这个指令：

```html
<div :style="{ backgroundColor: '#87CEFA', width: '100px', height: '40px' }"></div>
```

可以看得出来，我们在Vue中为`style`传入一个对象，其中键是之前的`style`属性，键对应的值是该属性的值。并且键的写法使用了小驼峰的规范(也可以用引号括起来表示，如：`'background-color': '#87CEFA'`)。

> 不要尝试将一个`reative`的对象作为内联样式传入。

完成上述的学习后，我们可以尝试做一个阅读网站主题背景色变换的功能：

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文档</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app">
      <div :style="{ width: '100%', height: '100%', backgroundColor: isBlack ? 'black' : 'white' }">
        <span :style="{ color: isBlack ? 'white' : 'black' }" @click="isBlack = !isBlack">
          当前为{{ isBlack ? '黑夜模式' : '白天模式' }}，点我切换
        </span>
      </div>
    </div>
    <script>
      const { createApp, ref } = Vue
      const app = createApp({
        setup() {
          const isBlack = ref(false) // 是否为为黑夜模式
          return { isBlack }
        },
      })
      app.mount('#app')
    </script>
    <style>
      html,
      body,
      #app {
        width: 100%;
        height: 100%;
        margin: 0;
      }
    </style>
  </body>
</html>
```

### 14.2 :style 数组语法

```html
<div id="app">
  <div :style="[defaultStyles, { backgroundColor: isBlack ? 'black' : 'white' }]">
    <span :style="{ color: isBlack ? 'white' : 'black' }" @click="isBlack = !isBlack">
      当前为{{ isBlack ? '黑夜模式' : '白天模式' }}，点我切换
    </span>
  </div>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const isBlack = ref(false) // 是否为为黑夜模式
      const defaultStyles = ref({ width: '100%', height: '100%' })
      return { isBlack, defaultStyles }
    },
  })
  app.mount('#app')
</script>
```

可以看到，这里将固定不变的样式存在了一个对象当中。并利用一个存储**style**对象的数组来表示：

```html
<div :style="[defaultStyles, { backgroundColor: isBlack ? 'black' : 'white' }]">
</div>
```

如果需要把`{ backgroundColor: isBlack ? 'black' : 'white' }`也存起来，需要使用计算属性来实现，不然依赖的数据发生变化无法引起Vue的重视，也就不会更新页面的主题了。

改为：

```js
const activeStyles = computed(() => ({ backgroundColor: isBlack.value ? 'black' : 'white' }))
	return { isBlack, defaultStyles, activeStyles }
},
```

和

```html
<div id="app">
  <div :style="[defaultStyles, activeStyles]">
    <span :style="{ color: isBlack ? 'white' : 'black'}" @click="isBlack = !isBlack">
      当前为{{ isBlack ? '黑夜模式' : '白天模式' }}，点我切换
    </span>
  </div>
</div>
```

### 14.3 类名样式绑定

曾有前辈说过，我们的代码不只有code，还有诗和远方。什么意思？我们的代码要像诗一样优雅！所以就有了，`html`,`CSS`,`JavaScript`分离，内联样式能不用就不用这样的规范。

既然内联样式这么垃圾，我们还是用`class`替换掉它吧。

我们不仅可以对`style`使用`v-bind`指令。对`class`使用`v-bind`当然也是可以的。

```html
<div :class="{ active: isActive }"></div>
```

可以看到，这里给`class`传入了一个对象，其中键表示类名，值表示与键同名的类是否启用/激活。

改写前面那个切换主题例子：

```html
<div id="app">
  <div :class="{ default: true, active: isBlack }">
    <span :class="{ 'active-color': isBlack }" @click="isBlack = !isBlack">
      当前为{{ isBlack ? '黑夜模式' : '白天模式' }}，点我切换
    </span>
  </div>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const isBlack = ref(false) // 是否为为黑夜模式
      return { isBlack }
    },
  })
  app.mount('#app')
</script>
<style>
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .default {
    width: 100%;
    height: 100%;
  }
  .active {
    background-color: black;
  }
  .active-color {
    color: white;
  }
</style>
```

### 14.4 :class 数组语法

与上面的`style`一样，`class`也能使用数组语法。

```html
<div :class="['default', isBlack ? 'active' : '']"></div>
```

可以看出区别在于`class`中的数组元素不是一个个的对象(**styleObj**)，而是需要启用的类的类名。

也就是，这个数组是该元素需要应用的类的列表，如果不需要某个类了，就从数组中移除，反之添加到数组中。

## 十五、表单绑定

在本文的一开始，我们就讲到了`v-model`语法，但不能只是停留在`input:text`上，我们来扩展一下该指令的应用。

### 15.1 文本输入框（Text）

首先来看看双向绑定的原理图：

![图片描述](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502110406925.png)

emmm，看了又好像没看对吧。其实它本质上只是一个利用了用户代理实现的语法糖而已。从这个图中也能一瞥`v-model`的命令由来，“**view-model**”代表视图和模型的双向奔赴。

用了`v-model`后我们就不再需要表单的`value`值了，只需要把`Model`中维护的变量作为`value`使用即可。 

### 15.2 文本域（TextArea）

使用方法和`Text`一致，直接用`v-model`绑定到一个变量上即可。唯一需要注意的是，不能使用这样的语法：

```html
<textarea>{{myArea}}</textarea>
<!-- 不等同于下方的写法 -->
<textarea v-model="myArea"></textarea>
```

### 15.3 复选框（CheckBox）

#### 15.3.1 单个复选框

单个复选框可以直接这样绑定：

```html
单个：<input type="checkbox" v-model="checked">
```

这里的`checked`：

```js
const checked = ref(false);
```

#### 15.3.2多个复选框

那如果多个复选框之间有关联呢？

我们来看一段代码：

```html
<div id="app">
  <p>
    请选择你的爱好：
    <input type="checkbox" id="mountaineering" value="登山" v-model="hobbies" />
    <label for="mountaineering">登山</label>
    <input type="checkbox" id="basketball" value="篮球" v-model="hobbies" />
    <label for="basketball">篮球</label>
    <input type="checkbox" id="parachute" value="跳伞" v-model="hobbies" />
    <label for="parachute">跳伞</label>
  </p>
  <span>你的爱好有: {{ hobbies }}</span>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const hobbies = ref([])
      return { hobbies }
    },
  })
  app.mount('#app')
</script>
```

可以看到，每个爱好都是一个复选框并有自己的值。他们都与一个数组绑定在了一起，勾选时会被添加到这个数组中，反之移除。

### 15.4 单选框（Radio）

单选框之间是互斥的，所以我们能将多个单选框绑定给一个`radio`，根据不同的选取，绑定的值将会是多个互斥单选框中的其中一个。

```html
<div id="app">
    <h3>性别：{{gender}}</h3>
    <label for="sex">男：</label><input value="男" type="radio" name="sex" id="sex" v-model="gender">
    <label for="sex">女：</label><input value="女" type="radio" name="sex" id="sex" v-model="gender">
</div>
<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const gender = ref('未选择');
            return { gender };
        },
    });
    app.mount("#app");
</script>
```

### 15.5 选择框（Select）

选择框也分两种：

- 单选
- 多选

其中单选框最为主流。

#### 15.5.1 单选选择框

来看一段代码：

```html
<div id="app">
    <h2>选择的城市：{{city}}</h2>
    <select v-model="city">
        <option disabled value="">-- 请选择你的城市 --</option>
        <option>北京</option>
        <option>杭州</option>
        <option>上海</option>
    </select>
</div>
<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const city = ref('');
            return { city };
        },
    });
    app.mount("#app");
</script>
```

可以看到，选择的值最终落在`select`身上，所以我们将`<select>`与我们的变量`city(Ref)`绑定起来。

#### 15.5.2 多选选择框

只需要在`<select>`中添加一个`multiple`属性就能让选择框变成多选选择框。我们再参照多选框的方法，将`<select>`与一个数组双绑定即可。

```html
<div id="app">
    <h2>选择的城市：{{city}}</h2>
    <select v-model="city" multiple>
        <option disabled value="">-- 请选择你的城市 --</option>
        <option>北京</option>
        <option>杭州</option>
        <option>上海</option>
    </select>
</div>
<script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup() {
            const city = ref(['浙江']);
            return { city };
        },
    });
    app.mount("#app");
</script>
</body>
```

### 15.6 修饰符

`v-model` 的修饰符包括以下三种：

| 修饰符    | 说明                                             |
| --------- | ------------------------------------------------ |
| `.lazy`   | 在 `change` 事件之后将输入框的值与数据进行同步。 |
| `.number` | 自动将用户的输入值转为数值类型。                 |
| `.trim`   | 自动过滤用户输入的首尾空白字符。                 |

以`lazy`为例，解释一下双向绑定修饰符的用法：

```html
<div id="app">
  <input type="text" v-model.lazy="msg" />
  <h1>{{ msg }}</h1>
</div>
<script>
  const { createApp, ref } = Vue
  const app = createApp({
    setup() {
      const msg = ref('Hello World!')
      return { msg }
    },
  })
  app.mount('#app')
</script>
```

运行上述代码，你会发现在文本框的`change`事件后绑定的数据才被更新，其实就是输入失焦才更新数据。

实际上，`lazy`的意义在于性能。在日常生活中需要实时更新`input`框的场景很少，所以没有必要输入改变就立即更新绑定的数据。在提交表单后再更新就好了。