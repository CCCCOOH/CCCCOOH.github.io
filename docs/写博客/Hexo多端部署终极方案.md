---
title: Hexo多端部署终极方案
createTime: 2025/02/23 21:05:00
permalink: /article/3ghh2hbc/
contributors: 'CCCCOOH'
copyright:
  author:
    name: CCCCOOH
    url: https://github.com/ccccooh
---
## 一、故事背景

故事发生在大学上学期间（而不是寒假）。上学期间，宿舍条件极其恶劣，半夜断电、空间狭小。我们大学垃圾条件使用游戏本的种种弊端被无限放大：游戏本电源适配器极其臃肿，不插电的情况续航堪忧（难以超过两个小时），并且由于其结构上的臃肿，在狭小的宿舍空间每次移动、打开犹如小平房开拖拉机。

将游戏本带去图书馆学习就更是天方夜谭，在此之前我也买了一个MatePad的平板，但是平板的使用场景对一个计科学生来说也实在有限。

于是，我用在学校做临时监考工作挣的钱入了一台MacBookAir（二手只要3k左右）。与此同时，我也预知了我即将支付不起博客网站巨额服务器费用的未来，未雨绸缪将博客迁移到了Hexo框架上，从此再无数据担忧。

我在我的MacBook上第一次部署了Hexo框架，并且由于在学校的主力机是Mac，从来没有想过在我的游戏本（也就是Windows系统）上部署Hexo框架会怎样。或者说，我从来没有考虑过移植的问题。

事情的转机从我的寒假生活开始。寒假回到家中，我的ROG魔霸新锐2023游戏本再次启动（没错我就是故意写全了得瑟的😁）。之前的缺点（笨重、移动续航堪忧）瞬间不再是缺点！在家里我的游戏本也是直接化身游戏主机站桩输出，不再需要频繁移动使用。于是我将可怜的MacBook抛到一边，低刷低配的低能MacOS一边去，Windows万岁。

直到一段时间后我又开始写Hexo博客，习惯了Wordpress网页端后台直接书写博客的我一时间竟不知道如何在我的Windows上写博客。我看了几篇博客：[Hexo从Mac到Windows](https://blog.trotyl.xyz/post/61834/)。我本来以为这样就能解决了，抄作业嘛多简单~

结果就是，我看了好几篇类似的Mac迁移Hexo到Windows的博客，在我的电脑上按照相同的步骤最终都会在同一个步骤报错。报错！报错！还是报错。

尝试过和人机ChatGPT老师交流，无果ed。

谁知这事儿就这样撂下了，我也懒得研究了，几乎有半个寒假，我每次想在我的`shenying.online`上发布博客都是将阵地转移到Mac上操作。就这么麻烦的事儿我干了一个寒假，就因为跟着上面说的博客做爆了错没有成功移植（要知道我寒假主力机一直是Windows的ROG，你可以想象我正在用windows写Markdown格式的博客，但是到了发布到Gitpage的时候却不得不打开Mac再复制过去发布一遍）。

直到2月12日事情才迎来了转机，我实在无法忍受这种写博客的割裂感了！我要像Hexo(骇客)一样写博客！我不能忘记老祖宗传下来的编程教养：优雅。这么粗鲁的事情不能再干下去了，一点儿也不Hexo。

接下来就是我自己弄懂的Heox博客部署原理以及多端部署的核心思路。

## 二、Hexo 文件结构解读

想知道Hexo如何多端部署，先要知道Hexo是怎么工作的。首先我们来看看Hexo框架的文件结构：

![image-20250212124219664](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502121242478.png)

看好了，别眨眼。这里的`node_modules`是node的用到的库，系统会根据你安装的主题啊之类的自定义自动生成，不用太关注他（意思是弄丢了也没事儿，毕竟不是核心数据）。

`public`是你用`hexo g`后生成的静态文件。相应的`hexo clean`会删除他。

`scaffolds`也是Hexo初始化会自动生成的默认文件，你写文章不会影响里面的文件所以不用管他。

`source`就非常重要了，我们重点来看一下。可以看到，里面存放的是最核心的文件，也就是博客网站的生命，博客文章的.md格式文件，草稿，还有一些主题生成的文件，这里以我常用的主题redefine为例，个别文件可能不一样。

`themes`文件夹里没什么重要的文件，不用管。

![image-20250212124812396](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502121248329.png)

这里就要谈一下Hexo的工作机制了，Hexo本质上还是类似Vue脚手架那一套的前端框架。你可以理解为你在本地编写了source中的文件，这时候你想要发布到网页上去，Hexo就会帮你项目打包到public文件夹中并成为一个静态的前端项目，然后将public文件夹中的文件部署到Gitpage。

发现没有，这里的`public`的功能很像你写一个程序，编译成了exe。你把exe发送给别人让别人直接执行。

并且这里的`source`相当于是你的元数据，类似于数据库一样至关重要的存在。

接着说说这里的`_config.yml`，这是你的网站的一些配置，也就是个性化的自定义文件。如果你使用的主题，就会有主题对应的`_config.yml`来配置你的主题的一些个性化设置，例如这里有两个主题：`config.landscape.yml`和`config.redefine.ym`。

`package.json`中存放着你用npm下载的包的信息，你可以理解为npm是一个应用商店，这就是应用商店的应用列表。我看的教程中就是告诉我把原来电脑的`package.json`拷贝过来然后在根目录`npm install`。结果我按着操作，每次安装都会抱一堆警告和错误。

所以，这个文件我们也不需要。

### 2.1 需要的文件

综上所述，我们其实只需要关注我们博客网站的核心文件即可，我建议将他们专门备份到一个代码仓库：

![image-20250212125723148](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502121257523.png)

没错，就是他们。你看我多谨慎。想想如果我还在使用Wordpress博客来备份还需要备份什么数据库，如果用Hexo静态博客框架就只需要把你的文章的`.md`文件和站点配置文件`_config.yml`全塞进一个仓库就行了，多方便。

> 当然还有一种更加优雅的方案：创建一个名为Hexo的分支，存放你的Heox本地配置文件。网上都能找到教程，[点我跳转到其中一篇](https://www.jianshu.com/p/7d8df0de1fc7)。

由于Hexo会将source经过框架内部的处理和美化最终生成一个public部署到Gitpage，而public又是有别于source的。比如，`你好世界.md`这篇文章在`public`中找到后已经变成了`你好世界.html`了。所以Github的博客托管仓库中是没有我们的source的，也找不到那些文章的`.md`的markdown文件。它都变成`html`格式了，你还怎么玩？

这些重要文件只会在你的本地计算机上，所以一定要自己及时备份起来以防后患（说不定哪天你的电脑就自己偷偷喝咖啡了呢~🔪）。

完成这些文件的备份，工作就很机械了。我的终极完美适配的思路是：按照原来你部署的方式，老老实实地从零开始部署。冷静地打开你的主题的官方文档，老老实实地把主题包括每一个插件自己安装上。

没错，你没有听错，终极的方案就是这么朴实无华。

然后的然后，把`source`和`config`相关的文件一五一十的替换。在Gitpage或者说Github的博客托管仓库中创建一个新的Branch，BranchName（分支名）就见仁见智了，比如我在Windows写博客的时候，用windows这个branch。

然后就是很是很重要的一点（我已经不知道说了多少个然后了，果然连接词还是得多学啊，Then，After that什么的，哈哈）。你最后总要`hexo d`然后把你的静态文件托管上去的吧，所以别傻傻的把`_config.yml`完全替换过去。你总得把里面的branch名字改成你新创建的branchName吧。

![image-20250212130931767](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202502121309870.png)

## 三、协同方案分析

完成了上述，你已经有一个专门分支了吧？我的建议是每个电脑一个分支。我来举个例子，比如你最新的进度是在Mac上写的，并且分支名是main（github由于种族问题已经将默认分支master改成了main了），这个时候你想在windows电脑上写一篇文章，然后你就写，写完之后`hexo clean`、`hexo g`、`hexo d`一步没落下，最终静态文件被托管到了branch `windows`下。

这个时候你可能又回到了mac电脑上了，就需要同步一下博客的进度。所以你需要将`main`分支和`windows`分支同步即可。

具体的，如果长期在windows上写博客，并且懒得更新原来的分支了，你可以在Gitpage将默认分支改为windows（非必需），将Gitpage的渲染的分支改为windows（必须）。

这里可以使用本方案：

> 语言很人机因为是问的ChatGPT，DeepSeek服务器太垃圾了。

1.**切换到 `main` 分支**：

```
git checkout main
```

2.**拉取 `main` 分支的最新更新**：

```
git pull origin main
```

3.**切换到 `wind` 分支**：

```
git checkout wind
```

4.**将 `main` 的更新合并到 `wind`**：

```
git merge main
```

这样，`wind` 分支就会包含 `main` 分支的最新内容。如果有冲突，你需要手动解决冲突。

5.**推送合并后的 `wind` 分支**：

```
git push origin wind
```

## 四、【更新】GitActions大法

在评论区看到同学说`GitActions`大法，当时认为是Hugo的方法，并不以为意。直到最近在了解了Gitactions的工作原理后我才恍然大悟并将其奉为圭臬。误会这位同学了～

具体的部署方法参考这位博主：

> [参考链接](https://xulianjun.github.io/2024/09/08/Hexo%20+%20GitHub%20Action%EF%BC%8C%E9%9B%B6%E6%88%90%E6%9C%AC%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)

因为该博主的博客存在实效的可能，这里将关键信息copy过来以防万一。

原理是利用Github提供的自动化服务（收费，每月2000分钟免费额度）。亲测每次部署30s左右，大概能使用400次。也就是满打满算能发布400次文章。这是最理想的情况，实际中可能因为文章修改等多种原因大打折扣。不过也是够用了。

实际上该方法在每次更新的效率上来说和原本没有什么区别，甚至稍慢于`hexo`提供的推送方法。但由于其直接维护博客的源码，然后交给Github自动更新博客。

真正做到了每次更新每次备份。否则你至少也需要一段时间进行手动备份，手动备份相对较为繁琐：拉去源码仓库，切换分支，推送。。。

关键步骤：

- 创建一个`Tokens`，将权限拉满。

- 在`.github/workspace`下添加一个yml文件，编辑：

```yml
  name: Deploy Hexo to GitHub Pages
  
  on:
    push:
      branches:
        - main  # 当推送到 main 分支时触发
  
  jobs:
    build:
      runs-on: ubuntu-latest
  
      steps:
        - name: Checkout repository
          uses: actions/checkout@v2
          with:
            submodules: false  # 禁用子模块检查
  
        - name: Setup Node.js
          uses: actions/setup-node@v2
          with:
            node-version: 'v20.17.0'
  
        - name: Install Dependencies
          run: npm install
  
        - name: Install Hexo Git Deployer
          run: |
            npm install hexo-deployer-git --save
            npm install hexo-cli -g
  
        - name: Clean and Generate Static Files
          run: |
            hexo clean
            hexo generate
  
        - name: Configure Git
          run: |
            git config --global user.name 'github-actions[bot]'
            git config --global user.email 'github-actions[bot]@users.noreply.github.com'
  
        - name: Deploy to GitHub Pages
          run: |
            cd public/
            git init
            git add -A
            git commit -m "Create by workflows"
            git branch -M main
            git remote add origin https://{Token}@github.com/{user}/{repo}.git    # 保存静态网页文件的公开仓
            git push origin HEAD:main -f
```

  

  

注意将`{Token}`和`{user}`,`{repo}`替换成你的信息：

  - **token**为鉴权密钥
  - **user**为Github账户名
  - **repo**为仓库名

## 五、【更新】VScode同步管理
### 5.1 前言

最近发现其实可以完全抛弃Typora，拥抱VScode。
在VScode中我们可以安装一个`MarkdownAllInOne`插件：
![](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/Screenshot%202025-02-19%20094137.png)
使用该插件后基本实现了和Typora相同的效果，甚至还要更加高效。
主要体现在两点，首先是Typora性能泰拉跨了，Typora的底层实现居然是前端三件套你敢信。离谱的是，只要随便改写一下`license`的js文件的`hasActived`代码就能直接破解。基本没有任何用户防御性可言。

> 感慨这一一点也是因为最近在写我的Vue3笔记时，由于字数来到了1万以上，导致Typora输入中文时经常产生滞后我才发现这么明显的。

之前一直觉得Typora是个付费软件很香，真正用了之后发现其实也就那么回事。他最大的优点可能就是开发主题文件非常简单吧，毕竟写个CSS就好了。

回归正题，我们可以在Vscode中直接管理Git，并通过安装插件的方式扩展Vscode将其打造为最强Hexo+Markdown博客工作流软件！

### 5.2 安装插件

1. 安装`Picgo`插件
![20250219095517](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250219095517.png)

安装完成后需要配置Picgo的配置文件，你可以选择跟着我来做也可以去阅读[官方文档](https://github.com/PicGo/vs-picgo)。

> 本博客的文章可能有时效性，具体以官方文档为准。

打开C盘找到你的用户`AppData`文件夹，往下找到`AppData\Roaming\picgo`，在理面有一个`data.json`。里面存放你的图床配置。
打开Vscode的设置，搜索`Picgo`并将目录粘贴上去：
![20250219095918](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250219095918.png)

`Picgo`官方文档中对于快捷键的介绍：
- 从剪切板上传图像：`ctrl`+`alt`+`u`
- 从资源管理器上传图像： `ctrl`+`alt`+`e`
- 在输入框中上传图像：`ctrl`+`alt`+`o`

类似的插件还有很多，推荐阅读一下[官方对于Markdown的介绍](https://code.visualstudio.com/docs/languages/markdown#_editing-markdown)。

### 5.3 对比Typora

现在再来对比一下Typora，基本上可以说Typora是被干的渣都不剩了。我用过很长一段时间Typor，发现Typora有很多毛病：

- 标题大纲显示不明确
- 无法自定义 `Snippets`

这是VScode提供的markdown文件大纲：
![20250219111709](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250219111709.png)

可以看到层级明确，不用在去寻找到底要写几个`#`了。

如果你的博客框架提供一些特殊的语法，你就需要使用自定义代码块。而Vscode可以轻松实现。比如，我希望定义一个按钮模块，Redefine主题采用的是EJS模板语法，所以我需要在Markdown中写这样的代码来添加：
```ejs
{% btn [可选大小]::[名称]::[url]::[可选图标] %}
```
如果你用Typora来写，那就太痛苦了。而使用Vscode你可以定义这样一个用户代码块：
```json
{
	// Place your snippets for markdown here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Redefine-Button: ": {
		"prefix": "button",
		"body": [
			"{% btn ${1:center large regular}::${2:name}::${3:url}::${4:icon} %}"
		],
		"description": "Redefine-button"
	},
	"Redefine-Note: ": {
		"prefix": "note",
		"body": [
			"{% notel ${1:blue red cyan purple orange yellow green} ${2:icon} ${3:title} %}",
			"  $4",
			"{% endnotel %}"
		],
		"description": "Redefine-note"
	},
	"Redefine-Collapse: ": {
		"prefix": "collapse",
		"body": [
			"{% folding ${1:yellow blue green red orange pink cyan white black gray}::${2:title} %}",
			"  $3",
			"{% endfolding %}"
		],
		"description": "redefine-collapse"
	},
	"Redefine-Tabs: ": {
		"prefix": "tabs",
		"body": [
			"{% tabs ${1:tabs_id} %}",
			"  <!-- tab ${2:tab_first_name} -->",
			"    $3",
			"  <!-- endtab -->",
			"{% endtabs %}"
		],
		"description": "redefine-tabs"
	},
	"Redefine-tab: ": {
		"prefix": "tab",
		"body": [
			"<!-- tab ${1:tab_first_name} -->",
			"  $2",
			"<!-- endtab -->",
		],
		"description": "redefine-tab"
	},
}
```
然后只需要输入`button`并按下`Ctrl`+`Space`就会自动创建一个按钮的EJS模板。

最后来说一下Typora仅剩的一个优点吧。
Typora其实相比于VScode，最大的特点就是一体化编写Markdown，在这一点上，Typora还是有优势的。实时编写，实时查看编写的结果。

### 5.4 Git管理
我们可以利用VScode的Git管理工具来管理Hexo博客源码的仓库，效果如下：
![20250219115544](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250219115544.png)
同时，如果你登录了Github，你的所有插件信息都可以继承。