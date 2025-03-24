---
title: 最难部署的数据库非Mongodb莫属
createTime: 2025/03/25 02:34:31
permalink: /article/0yvjvflq/
---

## 一、前言

> 本文将讲述Mongodb的部署过程，以MacOS为例。

由于最近node项目一直装不上sqlite，让我发现了Mongodb这个宝藏。

## 二、下载文件

进入Mongodb的官网，最上方导航栏选择`产品》社区版`：

![mongo](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/mongo.png)

点击这个绿色的下载按钮：
![mongo2](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/mongo2.png)


下拉到这个部分下载对应的文件：
![20250325024051](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250325024051.png)

> 完成后跟着这个博客来部署：[CSDN博客链接](https://blog.csdn.net/m0_53401968/article/details/127060323)

这里说一下，如果因为某些特殊原因在启动时报了这样的错误：

![20250325024240](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250325024240.png)

不要害怕，重启电脑或用mac的活动监视器强制关闭上一次的mongod进程即可。

