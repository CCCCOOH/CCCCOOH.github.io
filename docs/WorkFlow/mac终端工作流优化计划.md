---
title: mac终端工作流优化计划
createTime: 2025/02/23 21:46:30
permalink: /article/rxw8b0hx/
contributors: CCCCOOH
---
# 一、引言

自从使用了Hexo写博客后，加上最常用的电脑逐渐变成了Mac。两者在一起迸发出的化学反应导致我使用终端的频率不断增加，甚至于现在有了想要抛弃VsCode转向Vim的想法。

今天给zsh增加了美化和插件，还发明了一个很高效的Hexo工作流，这里就来说一下。

# 二、美化

关于zsh的美化，网上已经有大量的教程了，本文不单独赘述。这里把我看到的讲的很好的教程贴出来：

首先是Youtube上看到的关于Mac上终端美化的教程（包括了VSCode终端）：

<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/CF1tMjvHDRA?si=GSicTCAlmAMQNFiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

这个教程讲的非常好，包括其中的命令也单独地写了一篇文章，推荐去看一看。做完后你的Mac终端就会变得和我一样**beautiful**：

![截屏2025-02-16 11.21.45](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-02-16%2011.21.45.png)

> 不知道为什么我的mac截图有时候会出现bug，不知道是M1老了还是什么原因，这张图我截了三遍右下角才出来，下面还卡出来这么个东西怎么都去不掉。

<img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-02-16%2011.23.41.png" alt="截屏2025-02-16 11.23.41" style="zoom:50%;" />

# 三、Hexo工作流

个人发现了一种很高效的Hexo工作流，可以让你终端起手并且不用麻烦的cd。

首先跟这上面的Youtube教程做完后安装好了`oh-my-zsh`这个zsh的插件，在你的**zshrc**的配置文件中要有这样一行：

```bash
plugins=(z wd)
```

这是插件的列表，里面的`z wd`是两个插件，z用来进入常用目录，wd用来添加收藏目录。

直接`z`可以提示常用的目录，并用`z menu`进入这个menu目录。

进入你常用的目录后，`wd add`可以将其添加到你的wd收藏夹，在任何位置使用`wd xxx`就可秒进这个目录。再也不用`cd ll cd ll`疯狂循环了。`wd list`可以列出收藏目录列表，`wd rm`移除收藏目录。

完成这一切后，我们进入到`hexo`的`_posts`博客目录下，进去`wd ad`。然后`_posts`就能随时用`wd _posts`进入了。

这样就完成了工作流中重要的一步。然后我们`vim bash_profile`，添加一个自定义的函数：

```bash
 funciton typora() {                                                                
     open -a typora $1
}
```

解读一下，这里的open -a typora会打开typora编辑器，如果`open -a typora 你好.md`就会用typora打开这个markdown文件。这里的`$1`是一个站位符，相当于函数的传参。

完成之后我们`wd`进入到`_posts`目录，然后执行`typora xxx.md`就可以打开你的`xxx.md`这篇文章了。

搭配上mac的快捷键`command+space`，我们就可以开始打连招了：

`command+space`切出聚焦搜索，搜索`ter`跳出终端回车，`wd _posts`进入文章目录，`ll -t`按照时间排序并列出文章，`typora xxx.md`用typora打开文章。

发现没有，全程不使用鼠标一气呵成。我们甚至可以进一步包装成我们想要的函数！不过考虑到不在目录没有提示的原因就不进一步包装了。

由于我才用了Gitactions来自动化Hexo文章，我们还可以在工作流中加上最后的点睛之笔，也就是自动git推送的包装。

我们`vim ~/.gitconfig`，添加函数：

![截屏2025-02-16 11.41.53](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2025-02-16%2011.41.53.png)

```bash
pushall = "!f() { git add . && git commit -m \"$1\" && git push origin main; }; f"
```

有了最这个包装，就能将平时一直用的`git add . && git commit -m "xxx" && git push origin main`用一句简单的语法代替。

在写完文章后，我们直接`wd`到Hexo到根目录下，然后`git pushall "写了一篇新的✍️"`就能直接推送了，并且由于我们配置了Gitaciton，github会自动将源代码推送后再次构建博客的静态页面，优雅...实在是优雅。

# 四、总结

经过一段时间的体验我发现，不是终端不好用，不是vim不好用，也不是Hexo不好用。如果你觉得你现在的工作流很繁琐，有时候多在自己身上找找原因。是不是菜？如果菜，就多练。很多你认为很麻烦的操作在一些奇技淫巧后可能会突然豁然开朗。
