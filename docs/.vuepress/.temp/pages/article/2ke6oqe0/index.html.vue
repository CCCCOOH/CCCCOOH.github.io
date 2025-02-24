<template><div><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1.前言</span></a></h2>
<p>如你所见，博客小站现在已经迁移到了<mark>Vuepress</mark>框架。</p>
<p>用了一段时间的<code v-pre>Hexo</code>，最终还是离开了他。原因是在我自己开发过一段时间的<code v-pre>Hexo</code>主题后，我发现了<code v-pre>Hexo</code>目前存在的许多问题：</p>
<ul>
<li><code v-pre>Hexo</code>是一个台湾大学生开发的，在框架上主要使用模版语言主题开发效率低。</li>
<li>主题虽多，功能有限，扩展性一般。</li>
<li>性能平庸。</li>
<li>文件管理实在鸡肋。</li>
</ul>
<p>在官网阅读完<mark>Vuepress-Plume</mark>主题的文档后，我果断选择将博客迁移到了Vueperess框架。</p>
<p><code v-pre>Plume</code>的文件管理方式实在吸引我，他其他的专业性功能也强到可怕。<mark>Plume</mark>自动解析并识别文件结构，而于此对应的<code v-pre>Hexo</code>居然只可以将所有的博客文件全部摊在一个<code v-pre>_posts</code>文件夹中，这是何等的悲哀。</p>
<p><code v-pre>Vue</code>，一个<mark>T0级别</mark>的前端框架。基于Vue的Vuepress，提供的功能也非常多，其中杀手级功能数不胜数，我一个羸弱blogger在Plume面前完全没有任何抵抗力。可以说，<code v-pre>Plume</code>这种既面向文档又面向博客的框架，简直就是我这种简约风狂热者的梦中主题。</p>
<p>说个有意思的，我自己开发的主题居然和<code v-pre>Plume</code>在设计风格上相似度极高[+tip1]。
[+tip1]: 这我还开发个锤锤，人家都把我梦想中的主题开发好喂我嘴里了...</p>
<h2 id="_2-问题" tabindex="-1"><a class="header-anchor" href="#_2-问题"><span>2.问题</span></a></h2>
<p>在部署<code v-pre>Vuepress</code>的过程中，由于其设计的不同出现了些许问题。</p>
<p>之前部署Hexo我使用的是私有仓库存放源代码，Gitpage仓库存放静态打包📦资源的方式。本地推送代码到源码仓库后Gitactions将静态资源同步到Gitpage仓库。</p>
<p>而<code v-pre>Vuepress</code>中默认的方式是在Gitpage仓库中建立一个分支存放源码并将打包资源也放在本仓库中。</p>
<p>我一开始没意识到这个问题，仍然采用双仓库部署。结果复用文档的部署工作流代码时才发现部署到了源代码的仓库中。</p>
<p>第二个是权限的问题。</p>
<p>在发现了问题一后，我在Gitpage中用main分支来保管源码。在使用官方<code v-pre>workflows/docs.yml</code>时发现推送会报一个权限的错误：</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/截屏.png" alt="截屏"></p>
<p>查阅相关资料才发现，是仓库中权限没给够，去仓库的<code v-pre>Settings/Actions</code>中将权限拉高即可。</p>
</div></template>


