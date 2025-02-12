---
title: Gitpage使用自己的域名替换github域名
date: 2024-12-22 19:51:44
tags: Hexo
excerpt: "记录关于Hexo的一些事情..."
categories:
  - 主题
  - Hexo
---

## 简单记录

继搬迁博客到主题`Hexo`后，我做的第一件事情就是搬迁域名。在搬迁博客到`Gitpage`后，我将博客部署到了`Github`上，使用[ccccooh.github.io](https://ccccooh.github.io)访问它。但是之前的域名[shenying.website](https://shenying.website)却差点用不了。不过好在经过我的几经折腾最终找到了方法。

具体方法参见这篇博客：

> https://www.cnblogs.com/xieqk/p/Github-Page-DNS.html

根据该文章的方法，我发现之前漏掉的两个错误：没有解析**Github**的**ip**地址，只添加了**Gitpage**的**CNAME**解析。并且没有在**Gitpage**的仓库页面绑定域名。

需要说明的是，本博客由于搭建在Github仓库，网络环境非常不稳定，访问速度基本处于量子叠加的状态。我在我的Mac上无论是否使用科学上网都能很快速的访问，但是在我的Windows电脑以及平板上访问速度非常慢，需要开启科学手段才能获得正常体验。并且我的手机使用联通网络访问也很快。

综上，使用联通或者科学上网可以快速打开本站，当然如果你能看到这句话基本上也是符合部分条件的。

## 经过

不知道有没有小伙伴也想把博客迁移到`Hexo`上？无论如何，在这里我分享一下我迁移过程中看到的几篇主要的文档和文章：

{% btn regular::推荐一个民间教程::https://fanyfull.github.io/2021/10/16/Github-Hexo-%E7%9C%9F-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA-GitHub-%E9%9D%99%E6%80%81%E5%8D%9A%E5%AE%A2/::fa-solid fa-play-circle %}

{% btn regular::Hexo官方文档::https://hexo.io/zh-cn/docs/::fa-solid fa-play-circle %}

{% btn regular::Redefine主题文档::https://redefine-docs.ohevan.com/zh::fa-solid fa-play-circle %}

> `Redefine`这个主题是在`Hexo`官网看到的，很简约动画衔接德芙般丝滑。

## Redefine 文章模块

> 推荐在主题官方文档自行查看。

由于前端部分框架使用`Vue`，可以看得出来模块的语法风格也都是`Vue`的，或者说就是渲染的`Vue`代码，学过`Vue`的小伙伴应该知道`Vue`的语法有多强大。

### Notes 笔记模块

```vue
{% notel [颜色] [可选: 自定义图标] [标题] %}
内容
支持换行
{% endnotel %}
```

具体例子：

```vue
{% notel default fa-info 信息 %}
换行测试
换行测试
换行测试
{% endnotel %}
 
{% notel blue 提示 %}
换行测试
换行测试
换行测试
{% endnotel %}
 
{% notel red 自定义标题 %}
换行测试
换行测试
换行测试
{% endnotel %}
```



|    参数    |        说明        |                            可选值                            |
| :--------: | :----------------: | :----------------------------------------------------------: |
|    颜色    | 提示块的样式或颜色 | `blue` `red` `cyan` `purple` `orange` `yellow` `green`等颜色 |
| 自定义图标 |  自定义图标，选填  | [Fontawsome ](https://fontawesome.com/search) 的图标名称后半部分，比如 `fa-image` |

效果：

{% notel default fa-info 信息 %}
换行测试
换行测试
换行测试
{% endnotel %}

{% notel blue 提示 %}
换行测试
换行测试
换行测试
{% endnotel %}

{% notel red 自定义标题 %}
换行测试
换行测试
换行测试
{% endnotel %}

### 小号提示块

```vue
{% note [样式/颜色] [可选: 自定义图标] %}
笔记内容
{% endnote %}
```

具体例子：

```vue
{% note %} 默认 提示块标签 {% endnote %} {% note default %} default 提示块标签
{% endnote %} {% note primary %} primary 提示块标签 {% endnote %} {% note
success %} success 提示块标签 {% endnote %} {% note info %} info 提示块标签 {%
endnote %} {% note warning %} warning 提示块标签 {% endnote %} {% note danger %}
danger 提示块标签 {% endnote %} {% note red fa-bolt%} 自定义提示块标签 {%
endnote %}
```



|    参数    |        说明        |                            可选值                            |
| :--------: | :----------------: | :----------------------------------------------------------: |
| 样式/颜色  | 提示块的样式或颜色 | `success` `default` `primary` `info` `warning` `danger` `tip` `question` 以及 `blue` `red` `cyan` `purple` `orange` `yellow` `green`等颜色 |
| 自定义图标 |  自定义图标，选填  | [Fontawsome ](https://fontawesome.com/search) 的图标名称后半部分，比如 `fa-image` |

效果：

{% note %} 默认 提示块标签 {% endnote %} {% note default %} default 提示块标签
{% endnote %} {% note primary %} primary 提示块标签 {% endnote %} {% note
success %} success 提示块标签 {% endnote %} {% note info %} info 提示块标签 {%
endnote %} {% note warning %} warning 提示块标签 {% endnote %} {% note danger %}
danger 提示块标签 {% endnote %} {% note red fa-bolt%} 自定义提示块标签 {%
endnote %}

### 按钮

语法：

```vue
{% btn [可选大小]::[名称]::[url]::[可选图标] %}
```

具体例子：

```vue
不设置任何参数的 {% btn 按钮:: / %} 适合融入段落中。
 
regular 按钮适合独立于段落之外：
 
{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}
 
{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}
 
large 按钮更具有强调作用，建议搭配 center 使用：
 
{% btn center large::开始使用::https://redefine-docs.ohevan.com::fa-solid fa-download %}
```

可选变量：

```vue
center, regular, large, center large, center regular
```

> 图标请使用[font-awesome](https://fontawesome.com/v4/icons/)

效果：

不设置任何参数的 {% btn 按钮:: / %} 适合融入段落中。

regular 按钮适合独立于段落之外：

{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}

{% btn regular::示例博客::https://www.ohevan.com::fa-solid fa-play-circle %}

large 按钮更具有强调作用，建议搭配 center 使用：

{% btn center large::开始使用::https://redefine-docs.ohevan.com::fa-solid fa-download %}

### 折叠



语法：

```vue
{% folding [颜色]::[标题] %}
 
需要写的内容
 
{% endfolding %}
```

例子：

```vue
{% folding blue::Folding 测试： 点击查看更多 %}
 
啊啊啊啊啊
 
{% note danger  %}
danger 提示块标签
{% endnote %}
 
{% note tip  %}
tip 提示块标签
{% endnote %}
 
{% endfolding %}
```

效果：

{% folding blue::Folding 测试： 点击查看更多 %}

啊啊啊啊啊

{% note danger  %}
danger 提示块标签
{% endnote %}

{% note tip  %}
tip 提示块标签
{% endnote %}

{% endfolding %}

参数可选的颜色列表：

```vue
yellow, blue, green, red, orange, pink, cyan, white, black, gray
```

### 分栏选项卡

语法：

```vue
{% tabs 页面内不重复的ID %}
 
<!-- tab 栏目1名称 -->
 
内容
 
<!-- endtab -->
<!-- tab 栏目2名称 -->
 
内容
 
<!-- endtab -->
 
{% endtabs %}
```

具体例子：

```vue
{% tabs First unique name %}
 
<!-- tab First Tab-->
 
**This is Tab 1.**
 
<!-- endtab -->
 
<!-- tab Second Tab-->
 
**This is Tab 2.**
 
This is Tab 2.
 
<!-- endtab -->
 
<!-- tab Third Tab-->
 
**This is Tab 3.**
 
This is Tab 3.
 
This is Tab 3.
 
<!-- endtab -->
 
{% endtabs %}
```



效果：

{% tabs First unique name %}

<!-- tab First Tab-->

**This is Tab 1.**

<!-- endtab -->

<!-- tab Second Tab-->

**This is Tab 2.**

This is Tab 2.

<!-- endtab -->

<!-- tab Third Tab-->

**This is Tab 3.**

This is Tab 3.

This is Tab 3.

<!-- endtab -->

{% endtabs %}
