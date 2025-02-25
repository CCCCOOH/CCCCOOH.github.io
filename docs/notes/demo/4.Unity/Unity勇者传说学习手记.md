---
title: Unity勇者传说学习手记
createTime: 2025/02/23 21:48:02
permalink: /demo/yrys2r0c/
---
# Readme

最近开始学习Unity制作2D动作游戏，由于一些操作第一次接触，为了加深印象，准备写这样一篇同步教程的笔记。

之前也接触过Unity，用 Unity 制作过一个非常简单的小游戏 Flappy Bird，并且魔改成了泰拉瑞亚的版本。这一次打算更加深入的学习一下 Unity，首先是一直在学的 Godot 有点遇到了瓶颈。

## Godot 瓶颈

学了几个月的 Godot 引擎了，很多功能对我来说都很熟悉。瓦片制作，粒子效果，场景，信号。。。感觉用 Godot 制作游戏开始枯燥起来，一切都在不停的重复。但其实，让我开始尝试 Unity 最根本的原因是 Godot 的教程太少了。在看了很多很多教程后，我发现 Godot 的优质教程真的有，但不多。于是决定"偷窥"一些Unity教程，等学到一些新的技巧后再做决定，决定以后使用哪个引擎。希望接触了 Unity 后能带给我更多的想法和改变。

## 关于 Unity

这篇 Readme 写在我学习了 Unity 最基本的资源导入和瓦片集之后。有一些简单的对比和感悟（Godot 和 Unity），带给我最大的感受就是 Unity 一切的流程很繁琐，但是就像瑞士军刀一样，功能也很强大。但是我还是觉得，就效率而言，相比 Godot 还是不足。就拿设置地形瓦片来举例子，Godot 可以直接在瓦片图上设置地形掩码，而 Unity 居然需要一个一个的设置，Godot 的可视化设置地形可以节省很多很多时间！就一个简单的草地地形就能至少相差 10 分钟的设置时间差距至少，而且这还只是一个，要知道一般游戏都会有很多地形。

目前在瓦片和资源导入方面感觉 Unity 有点低于我的预期，不是那么好用。

## 为什么开始学习 Unity

上面讲了很多 Unity 我自我认为的缺点，但是我还是想夸夸 Unity。

想必大家都知道 Unity 社区的厉害，没错，全球最大游戏引擎社区就是这么恐怖。拥有最多的开发者和最多的教程、技术文章。这也是我为什么从 Godot “暂时” 跳槽到 Unity 的第一个原因。

齐次，现在 Godot 对我来说只是一个玩具，学会 Godot 固然做游戏快，效率高，有意思。可惜的是，没有太多的企业使用 Godot 开发大型的项目，所以，为了给以后游戏开发就业留条后路，我还是选择尝试学习 Unity。

当然还有一些小小的原因，我最近在 Godot 开发玩家角色脚本时也发现了一些 Godot 的弱点。在动画的状态转换上，Godot 并没有提供向 Unity 那样强大的可视化动画状态机工具。这导致我在 Godot 中修改角色动画状态不得不使用硬编码的方式，在 Unity 中让我看到了处理这个事情更多的可能性，同时也最初的催生了我学习 Unity 的想法。



# 项目准备

这是一篇 Unity 2022 最新稳定版本的教程同步笔记，本文将会讲解一些开始学习必须的条件。

## 安装环境

首先是安装 **UnityHub**，然后在 **UnityHub** 中安装 **Unity** 的版本(2022)。

> 只需要安装 开发者工具 和文档即可，导出到其他平台的工具等不需要。

这里我遇到一个问题，那就是安装时出现了应用安装失败的报错，解决方案：检查电脑中是否已经存在 VS2022，如果已经有了，卸载以前的版本，重新安装。

## VisualStudioCode && Unity

我选择使用编辑进化的 **VisualStudioCode** 来开发 Unity 中的 C# 脚本。 

> 使用 VsCode 配置方法参考: https://code.visualstudio.com/docs/other/unity

## 创建项目

创建项目选择一个自己常用的 Unity 工作空间文件夹，然后在 UnityHub 中进行创建，创建时选择第三个蓝色我框选出来的模板。

![image-20240727063857073](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270736869.png)

# 导入素材

## 编辑器布局

点击每个窗口右上角的三个点可以有更多的窗口选项。

![image-20240727064735126](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730068.png)

在屏幕的右上角有一个菜单可以保存布局或读取已经报错的布局。

![image-20240727064859894](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730037.png)

## 工具按钮

编辑器上的工具按钮在启动的时候是蓝色的，在不启动的时候是灰色的。

![image-20240727064952526](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730335.png)

这个按钮将会决定场景中的物体是以锚点显示还是以中心点显示。

![image-20240727065039413](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730493.png)

常用的工具按钮可以拖拽到场景的最上方。

![image-20240727065151003](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730598.png)

通过 Hierarchy 窗口左上角的`+`可以创建一些我们想要的物体。

![image-20240727065237786](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730666.png)

可以通过更改`Gizmose`来修改小工具的显示，最简单的就是点击关闭或者启动。还可以在下拉菜单中修改大小等诸多属性。

![image-20240727065347075](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730673.png)

## 游戏素材的准备

最关键的当然是我们的游戏素材，Unity 中有两种方式找到我们的素材：Unity 官方素材商店或者本地。我们使用第二种方法。

> 素材提供：
>
> 人物 https://brullov.itch.io/generic-char-asset 
>
> 场景 https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16

将下载好的素材拖到 Unity 项目中的 `Assets`文件夹中。

## 更改设置

选择 **Editor** > **Preferences**: 找到 `Create Objects Origin `并勾选。

> 勾选后，每次创建一个新的物体，坐标就是(0, 0, 0)，否则物体将是随机坐标，不好找。

![image-20240727065911213](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730972.png)

可以更改 Colors 中的 `Playmode tint`来修改启动游戏时编辑器的主色调，提醒你现在编辑的内容是会重置的。

> 在游戏启动时进行的编辑都会在关闭游戏时重置，并不会保存。

![image-20240727070100468](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730478.png)

## 图像缩放

点击`Transform`里`Scale`左边的小链接可以将缩放设置为等比例缩放，也就是锁定。

![image-20240727070319387](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730617.png)

## 设置图片素材

图中框出了对于一个图片素材，首先需要修改的三个属性。

- `Pixels Per Unit`
- `Filter Mode`
- `Compression`

![image-20240727070559157](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730998.png)

我们将`Pixels Per Unit`修改为`16`，将`Filter Mode`修改为`Point (no filter)`，将`Compression`修改为`None`，然后我将依次讲解三个修改这么做的原因。

### Pixels Per Unit

像素最小单元，这个属性代表 Unity 场景中每一个小方格的大小，这个属性是根据素材来决定的。例如，本游戏中每个素材都采用的`16x16`的像素绘制，那么在素材包中默认每个小方格的大小也就是我们素材的单位就是`16`，所以修改这个属性表示我们图像素材的最小方格单位。

![image-20240727070921709](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730331.png)

### Filter Mode

过滤模式，在像素游戏中，我们不添加任何的过滤。这个选项有点类似 Godot 中的渲染模式，在 Godot 中我们总是希望像素游戏选择 `Nearest`，这里有点不同。

### Compression

图像压缩，我们的像素游戏的图像不大，不吃性能，在压缩就真成马赛克了，所以不压缩来保证图像的质量。



都设置好后我们点击`Apply`来保存设置。

![image-20240727071408362](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730754.png)

对于项目中所有的图片，我们都需要来这样设置。

## 设置人物图像(设置图像集)

我们的人物是一个图像，里面包含了人物的动画信息。点击 Sprite Editor 可以通过 Unity 查看这个图像。

![image-20240727071641417](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730568.png)

这是一个图集，所以我们需要设置`Sprite Mode`为`Multiple`。其他设置和所有的图像一样，这是唯一的区别。

![image-20240727071940465](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730494.png)

## 切割图像集

通常我们不选择自动切割来创作动画，因为自动切割的位置比较随意，在处理单张图像的时候还可以，但是动画会出很多问题，不利于开发。

在本项目中呢，人物图集的数量是固定的，水平方向上有`8`个精灵，垂直方向上有`11`个精灵图。

![image-20240727072144707](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730134.png)

### 切割

所以我们根据数量进行切割精灵集，选择`Grid By Cell Count`。在`Column & Row`中键入**C: 8, R: 11**。

![image-20240727072234828](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730661.png)

### 锚点

我们希望人物的锚点处于人物脚底，所以将`Pivot`设置为`Bottom`，并再次进行切割。

![image-20240727072537931](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730351.png)

点击右上角的`Apply`进行保存应用。

![image-20240727072637642](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730483.png)

同时，不要忘记再次在检查器窗口中点击`Apply` ，来保存图像的更改。

![image-20240727072703758](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730677.png)

窗口标题上的`*`表示没有保存，这时请不要忘记保存。

切割好的图片，下拉菜单后会有很多图片。可以将他直接拖入场景窗口，来简单的显示我们的玩家。

![image-20240727072923846](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730640.png)

# 场景绘制和叠层设置

## 设置地图

选择地图的精灵，在精灵图集的检查器中进行如下修改。

![image-20240728034841318](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280349825.png)

## 切割地图

点击 `Sprite Editor` 进行编辑，并按照每个格子`16x16`进行切割。

![image-20240728035028817](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280350850.png) 

## 设置瓦片调色盘

打开瓦片调色盘并新建一个调色盘，可以在`Assets`中创建一个`Palettes`文件夹来专门存放调色盘。

![image-20240728035135444](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280354556.png)

![image-20240728035208157](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280354641.png)

将刚才切割好的图片直接拖拽到调色盘中，系统会询问你这一片一片的瓦片存放在那里，可以新建一个`Tiles`文件夹来存放瓦片。

## 使用瓦片调色盘

因为调色盘只是一个存放瓦片的仓库，并不能用来绘制地图。可以理解为是一个调色盘，但不包括调色笔。所以，请在主场景中创建一个`Tilemap`并且是矩形的。

![image-20240728035613325](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430074.png)

这时返回`Tilepalettes`中会发现，这里就多了一个`Tilemap`可供选择。

![image-20240728035732736](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430065.png)

## 修复瓦片锚点

这个时候，如果你选择一个瓦片在场景中进行绘制会发现瓦片不在格子当中，原因是瓦片的锚点在我们设置为了`bottom`，所以编辑器会把`bottom`这个位置当成是瓦片的中心绘制在这个格子当中，从而出现如下问题。

![image-20240728035804835](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430079.png)

> **解决方案**：回到地图的精灵切割，将锚点设置成`center`并重新切割，应用即可。

绘制好后请注意一点，如果你的画面太小或太大，修改`Scale`属性将不会影响游戏最终的画面呈现，这是一个调试使用的视图缩放。而在其左侧菜单中的选项，则会应用到实际游戏当中。

![image-20240728040049920](https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202407280403810.png)

实际上，你可以通过修改相机的`size`参数来修改游戏画面的大小，我最终将其修改为了`6`。

![image-20240728040320841](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280403041.png)

## 分层(叠层)绘制地图

你可能已经发现了，在`Unity`当中的物体上都装有很多的小组件`Component`，在大多数图形精灵上都会有一个`Sprite Renderer`，他设置了图形绘制的顺序，可以用来实现分层的绘制。

类似于 **Godot** 我们可以在这里创建不同的层级，然后设置对应的`Order`来分层绘制。

![image-20240728040616689](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409735.png)

> // 注意，同样`order`下，按照层级从上到下进行绘制。

![image-20240728040731601](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409410.png)

添加完后，返回选择层级即可分层，这里将人物放在`Middle`该层。

![image-20240728040909075](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409361.png)

## 扩展地图绘制工具

在默认的绘制工具栏中，少了几个常用的工具。例如，没有图像反转和图像旋转工具。我们可以在`Editor`>`TilePalettle`中添加他们。

![image-20240728041149291](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280412400.png)

## 修改叠层绘制结构

我们可以使用多个`Tilemap`来绘制叠层，因为在刚才我们创建了三个层级，所以我们应该这么做。将三个层级分配个多个`Tilemap`，从而使分层绘制更加便于管理和使用。

![image-20240728041459296](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430963.png)

在同样的层级中，例如`Middle`层中，如果也有多个`Tilemap`，我们可以修改该`Tilemap`的`Order in Layer`属性值来在同一个层级中手动分层。

## 分层绘制焦点

如果你已经动手绘制了一些的分层的瓦片，你可能会发现你有时会忘记你正在绘制的是哪一层。其实可以使用右下角的瓦片焦点工具来突出强调当前层级中的瓦片。

![image-20240728041719954](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430492.png)

## 修改相机背景

修改相机中的相机组件中`Environment`中的`Background`来修改相机的底色。

## 小作业

动手绘制一些场景和叠层来熟悉这个功能的使用吧。

# (规则瓦片)瓦片地形和动画瓦片

## 准备阶段

在`Tilemap`中创建一个新的文件夹起名叫做`Rule Tile`，创建一个`Rule Tile`，用来设置瓦片地形，我们将用他来绘制地形图，类似于Godot中的瓦片地形。

![image-20240728044157547](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517522.png)

这里给他取名为了`Ground 1`，用于创建一个地面的瓦片集。在检查器中设置默认图像(没有实际作用，可以理解为它的“头像”后续可以随意更改)，用于识别地形集。

![image-20240728044348035](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517794.png)

因为后续我们设置地形也需要反复这样的选择，那么久就需要快速寻找我们的精灵图像并且是通过名字来查找的。所以，我们回到地形精灵集的图像编辑界面，并修改每一个小图块的名字(右下角修改)。

![image-20240728044712594](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517476.png)

> 这个过程中小心不要拖动蓝色的锚点。

## 创建地形规则

### 单一地形

首先需要创建一个规则，这里创建规则的方法也类似于 Godot 中的地形集设置。回到刚才创建的瓦片规则，在其中添加规则。

![image-20240728045012210](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517271.png)

> // 点击`加号`，我的朋友。

	然后点击`Select`选择这个规则瓦片的精灵集，例如，我们可以选择地图左上角的精灵图。

![image-20240728045136716](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517496.png)

然后设置它的规则可以看到，坐上角的这个地形方块它的左边和上面都没有方块，而它的右边和下面皆有方块。所以我们在掩码中就设置为对应的规则。

![image-20240728045403694](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517931.png)

![image-20240728045528522](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517478.png)

用同样的方法来继续添加其他方向和位置的地形。

### 随机地形

在地形中间的这块，我们其实希望它自由随机的生成，也就是每次创建时在几个中间的图片中随机选择一张。

![image-20240728045649259](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517679.png)

那么我们可以将他的`Output`属性设置为`Random`，然今将随机数量`Size`修改为你需要的数量，例如这里只有三张，所以设置为`3`，然后为每一种随机的可能设置对应的精灵图。

![image-20240728045752867](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518121.png)

![image-20240728045911483](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518636.png)

设置完成后将我们的规则地形拖入到调色盘`Palettle`中即可。

## 设置拐角的规则

你可以在调色盘中去选择这个地形掩码然后进行绘制，别忘记使用矩形工具来进行批量绘制。然后，你可能会发现，在地形拐角处，出现了奇怪的图像。

![image-20240728050205457](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518256.png)

很容易发现，地形拐角是一个上下左右都有方块的地形。但是在斜上方会有一个空的缺口，而且是必然的。所以，我们需要单独设置四个拐角的规则和图像。

![image-20240728050453262](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518207.png)

![image-20240728050510440](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518591.png)

> 这里只举了这样一个拐角作为例子。

因为正中心的方块也是四个方向都有邻居方块，如果它被放在了规则集的上面，就会优先被匹配从而轮不到这个拐角方块，所以我们需要将其拖动到规则集的最上方来提高优先级。对于其他的三个拐角也是同理。

对于其他的地形，我们可以直接使用`Ctrl`+`D`来将`Ground 1`地形集在文件中复制，然后修改名称创建，这样可以省去设置地形掩码的时间，只用集中于图像的选择即可。

> 可以看出，这样一个一个的设置地形集相比Godot有好也有坏，好处是可以让资源更加自由不需要美术师将同一个地形一定放在一个区域，坏处是效率稍低。

## 动态地形(瀑布)

在这个场景中，并没有动态的瓦片集，但是对于流水的精灵来说，它有多个精灵帧，组合在了一起就是一个动态的瓦片。我们只需要按照相同的原理来制作一个动画瓦片即可。

在文件夹中创建一个`Animated Tiles`的文件夹，并在里面创建一个动态的瓦爿。

![image-20240728051159848](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518473.png)

由于我们的瀑布有左中右三个瀑布，我们可以复制一下并创建三个动画瓦片。`WaterFall Left`, `WaterFall Middle`, `WaterFall Right`。

![image-20240728051223879](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518349.png)

通过`Number of Animated Sprites`来设置动画的帧数也就是精灵数量，并选择相应的精灵图。 

![image-20240728051351256](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518288.png)

> 在选择前，推荐去地图集的精灵编辑器设置一下瀑布的名字(`name`)。

如果需要修改动画的速度，可以修改`Minimum Speed`和`Maximum Speed`来修改动画速度的最大值和最小值。

![image-20240728051547082](https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518992.png)

## 小作业

可以去实现一下草团的地形，并尽可能的创建更多的地形来丰富场景和自我练习。