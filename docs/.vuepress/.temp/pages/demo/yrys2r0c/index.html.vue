<template><div><h1 id="readme" tabindex="-1"><a class="header-anchor" href="#readme"><span>Readme</span></a></h1>
<p>最近开始学习Unity制作2D动作游戏，由于一些操作第一次接触，为了加深印象，准备写这样一篇同步教程的笔记。</p>
<p>之前也接触过Unity，用 Unity 制作过一个非常简单的小游戏 Flappy Bird，并且魔改成了泰拉瑞亚的版本。这一次打算更加深入的学习一下 Unity，首先是一直在学的 Godot 有点遇到了瓶颈。</p>
<h2 id="godot-瓶颈" tabindex="-1"><a class="header-anchor" href="#godot-瓶颈"><span>Godot 瓶颈</span></a></h2>
<p>学了几个月的 Godot 引擎了，很多功能对我来说都很熟悉。瓦片制作，粒子效果，场景，信号。。。感觉用 Godot 制作游戏开始枯燥起来，一切都在不停的重复。但其实，让我开始尝试 Unity 最根本的原因是 Godot 的教程太少了。在看了很多很多教程后，我发现 Godot 的优质教程真的有，但不多。于是决定&quot;偷窥&quot;一些Unity教程，等学到一些新的技巧后再做决定，决定以后使用哪个引擎。希望接触了 Unity 后能带给我更多的想法和改变。</p>
<h2 id="关于-unity" tabindex="-1"><a class="header-anchor" href="#关于-unity"><span>关于 Unity</span></a></h2>
<p>这篇 Readme 写在我学习了 Unity 最基本的资源导入和瓦片集之后。有一些简单的对比和感悟（Godot 和 Unity），带给我最大的感受就是 Unity 一切的流程很繁琐，但是就像瑞士军刀一样，功能也很强大。但是我还是觉得，就效率而言，相比 Godot 还是不足。就拿设置地形瓦片来举例子，Godot 可以直接在瓦片图上设置地形掩码，而 Unity 居然需要一个一个的设置，Godot 的可视化设置地形可以节省很多很多时间！就一个简单的草地地形就能至少相差 10 分钟的设置时间差距至少，而且这还只是一个，要知道一般游戏都会有很多地形。</p>
<p>目前在瓦片和资源导入方面感觉 Unity 有点低于我的预期，不是那么好用。</p>
<h2 id="为什么开始学习-unity" tabindex="-1"><a class="header-anchor" href="#为什么开始学习-unity"><span>为什么开始学习 Unity</span></a></h2>
<p>上面讲了很多 Unity 我自我认为的缺点，但是我还是想夸夸 Unity。</p>
<p>想必大家都知道 Unity 社区的厉害，没错，全球最大游戏引擎社区就是这么恐怖。拥有最多的开发者和最多的教程、技术文章。这也是我为什么从 Godot “暂时” 跳槽到 Unity 的第一个原因。</p>
<p>齐次，现在 Godot 对我来说只是一个玩具，学会 Godot 固然做游戏快，效率高，有意思。可惜的是，没有太多的企业使用 Godot 开发大型的项目，所以，为了给以后游戏开发就业留条后路，我还是选择尝试学习 Unity。</p>
<p>当然还有一些小小的原因，我最近在 Godot 开发玩家角色脚本时也发现了一些 Godot 的弱点。在动画的状态转换上，Godot 并没有提供向 Unity 那样强大的可视化动画状态机工具。这导致我在 Godot 中修改角色动画状态不得不使用硬编码的方式，在 Unity 中让我看到了处理这个事情更多的可能性，同时也最初的催生了我学习 Unity 的想法。</p>
<h1 id="项目准备" tabindex="-1"><a class="header-anchor" href="#项目准备"><span>项目准备</span></a></h1>
<p>这是一篇 Unity 2022 最新稳定版本的教程同步笔记，本文将会讲解一些开始学习必须的条件。</p>
<h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境"><span>安装环境</span></a></h2>
<p>首先是安装 <strong>UnityHub</strong>，然后在 <strong>UnityHub</strong> 中安装 <strong>Unity</strong> 的版本(2022)。</p>
<blockquote>
<p>只需要安装 开发者工具 和文档即可，导出到其他平台的工具等不需要。</p>
</blockquote>
<p>这里我遇到一个问题，那就是安装时出现了应用安装失败的报错，解决方案：检查电脑中是否已经存在 VS2022，如果已经有了，卸载以前的版本，重新安装。</p>
<h2 id="visualstudiocode-unity" tabindex="-1"><a class="header-anchor" href="#visualstudiocode-unity"><span>VisualStudioCode &amp;&amp; Unity</span></a></h2>
<p>我选择使用编辑进化的 <strong>VisualStudioCode</strong> 来开发 Unity 中的 C# 脚本。</p>
<blockquote>
<p>使用 VsCode 配置方法参考: https://code.visualstudio.com/docs/other/unity</p>
</blockquote>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2>
<p>创建项目选择一个自己常用的 Unity 工作空间文件夹，然后在 UnityHub 中进行创建，创建时选择第三个蓝色我框选出来的模板。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270736869.png" alt="image-20240727063857073"></p>
<h1 id="导入素材" tabindex="-1"><a class="header-anchor" href="#导入素材"><span>导入素材</span></a></h1>
<h2 id="编辑器布局" tabindex="-1"><a class="header-anchor" href="#编辑器布局"><span>编辑器布局</span></a></h2>
<p>点击每个窗口右上角的三个点可以有更多的窗口选项。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730068.png" alt="image-20240727064735126"></p>
<p>在屏幕的右上角有一个菜单可以保存布局或读取已经报错的布局。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730037.png" alt="image-20240727064859894"></p>
<h2 id="工具按钮" tabindex="-1"><a class="header-anchor" href="#工具按钮"><span>工具按钮</span></a></h2>
<p>编辑器上的工具按钮在启动的时候是蓝色的，在不启动的时候是灰色的。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730335.png" alt="image-20240727064952526"></p>
<p>这个按钮将会决定场景中的物体是以锚点显示还是以中心点显示。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730493.png" alt="image-20240727065039413"></p>
<p>常用的工具按钮可以拖拽到场景的最上方。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730598.png" alt="image-20240727065151003"></p>
<p>通过 Hierarchy 窗口左上角的<code v-pre>+</code>可以创建一些我们想要的物体。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730666.png" alt="image-20240727065237786"></p>
<p>可以通过更改<code v-pre>Gizmose</code>来修改小工具的显示，最简单的就是点击关闭或者启动。还可以在下拉菜单中修改大小等诸多属性。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730673.png" alt="image-20240727065347075"></p>
<h2 id="游戏素材的准备" tabindex="-1"><a class="header-anchor" href="#游戏素材的准备"><span>游戏素材的准备</span></a></h2>
<p>最关键的当然是我们的游戏素材，Unity 中有两种方式找到我们的素材：Unity 官方素材商店或者本地。我们使用第二种方法。</p>
<blockquote>
<p>素材提供：</p>
<p>人物 https://brullov.itch.io/generic-char-asset</p>
<p>场景 https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16</p>
</blockquote>
<p>将下载好的素材拖到 Unity 项目中的 <code v-pre>Assets</code>文件夹中。</p>
<h2 id="更改设置" tabindex="-1"><a class="header-anchor" href="#更改设置"><span>更改设置</span></a></h2>
<p>选择 <strong>Editor</strong> &gt; <strong>Preferences</strong>: 找到 <code v-pre>Create Objects Origin </code>并勾选。</p>
<blockquote>
<p>勾选后，每次创建一个新的物体，坐标就是(0, 0, 0)，否则物体将是随机坐标，不好找。</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730972.png" alt="image-20240727065911213"></p>
<p>可以更改 Colors 中的 <code v-pre>Playmode tint</code>来修改启动游戏时编辑器的主色调，提醒你现在编辑的内容是会重置的。</p>
<blockquote>
<p>在游戏启动时进行的编辑都会在关闭游戏时重置，并不会保存。</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730478.png" alt="image-20240727070100468"></p>
<h2 id="图像缩放" tabindex="-1"><a class="header-anchor" href="#图像缩放"><span>图像缩放</span></a></h2>
<p>点击<code v-pre>Transform</code>里<code v-pre>Scale</code>左边的小链接可以将缩放设置为等比例缩放，也就是锁定。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730617.png" alt="image-20240727070319387"></p>
<h2 id="设置图片素材" tabindex="-1"><a class="header-anchor" href="#设置图片素材"><span>设置图片素材</span></a></h2>
<p>图中框出了对于一个图片素材，首先需要修改的三个属性。</p>
<ul>
<li><code v-pre>Pixels Per Unit</code></li>
<li><code v-pre>Filter Mode</code></li>
<li><code v-pre>Compression</code></li>
</ul>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730998.png" alt="image-20240727070559157"></p>
<p>我们将<code v-pre>Pixels Per Unit</code>修改为<code v-pre>16</code>，将<code v-pre>Filter Mode</code>修改为<code v-pre>Point (no filter)</code>，将<code v-pre>Compression</code>修改为<code v-pre>None</code>，然后我将依次讲解三个修改这么做的原因。</p>
<h3 id="pixels-per-unit" tabindex="-1"><a class="header-anchor" href="#pixels-per-unit"><span>Pixels Per Unit</span></a></h3>
<p>像素最小单元，这个属性代表 Unity 场景中每一个小方格的大小，这个属性是根据素材来决定的。例如，本游戏中每个素材都采用的<code v-pre>16x16</code>的像素绘制，那么在素材包中默认每个小方格的大小也就是我们素材的单位就是<code v-pre>16</code>，所以修改这个属性表示我们图像素材的最小方格单位。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730331.png" alt="image-20240727070921709"></p>
<h3 id="filter-mode" tabindex="-1"><a class="header-anchor" href="#filter-mode"><span>Filter Mode</span></a></h3>
<p>过滤模式，在像素游戏中，我们不添加任何的过滤。这个选项有点类似 Godot 中的渲染模式，在 Godot 中我们总是希望像素游戏选择 <code v-pre>Nearest</code>，这里有点不同。</p>
<h3 id="compression" tabindex="-1"><a class="header-anchor" href="#compression"><span>Compression</span></a></h3>
<p>图像压缩，我们的像素游戏的图像不大，不吃性能，在压缩就真成马赛克了，所以不压缩来保证图像的质量。</p>
<p>都设置好后我们点击<code v-pre>Apply</code>来保存设置。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730754.png" alt="image-20240727071408362"></p>
<p>对于项目中所有的图片，我们都需要来这样设置。</p>
<h2 id="设置人物图像-设置图像集" tabindex="-1"><a class="header-anchor" href="#设置人物图像-设置图像集"><span>设置人物图像(设置图像集)</span></a></h2>
<p>我们的人物是一个图像，里面包含了人物的动画信息。点击 Sprite Editor 可以通过 Unity 查看这个图像。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730568.png" alt="image-20240727071641417"></p>
<p>这是一个图集，所以我们需要设置<code v-pre>Sprite Mode</code>为<code v-pre>Multiple</code>。其他设置和所有的图像一样，这是唯一的区别。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730494.png" alt="image-20240727071940465"></p>
<h2 id="切割图像集" tabindex="-1"><a class="header-anchor" href="#切割图像集"><span>切割图像集</span></a></h2>
<p>通常我们不选择自动切割来创作动画，因为自动切割的位置比较随意，在处理单张图像的时候还可以，但是动画会出很多问题，不利于开发。</p>
<p>在本项目中呢，人物图集的数量是固定的，水平方向上有<code v-pre>8</code>个精灵，垂直方向上有<code v-pre>11</code>个精灵图。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730134.png" alt="image-20240727072144707"></p>
<h3 id="切割" tabindex="-1"><a class="header-anchor" href="#切割"><span>切割</span></a></h3>
<p>所以我们根据数量进行切割精灵集，选择<code v-pre>Grid By Cell Count</code>。在<code v-pre>Column &amp; Row</code>中键入<strong>C: 8, R: 11</strong>。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730661.png" alt="image-20240727072234828"></p>
<h3 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点"><span>锚点</span></a></h3>
<p>我们希望人物的锚点处于人物脚底，所以将<code v-pre>Pivot</code>设置为<code v-pre>Bottom</code>，并再次进行切割。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730351.png" alt="image-20240727072537931"></p>
<p>点击右上角的<code v-pre>Apply</code>进行保存应用。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730483.png" alt="image-20240727072637642"></p>
<p>同时，不要忘记再次在检查器窗口中点击<code v-pre>Apply</code> ，来保存图像的更改。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730677.png" alt="image-20240727072703758"></p>
<p>窗口标题上的<code v-pre>*</code>表示没有保存，这时请不要忘记保存。</p>
<p>切割好的图片，下拉菜单后会有很多图片。可以将他直接拖入场景窗口，来简单的显示我们的玩家。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407270730640.png" alt="image-20240727072923846"></p>
<h1 id="场景绘制和叠层设置" tabindex="-1"><a class="header-anchor" href="#场景绘制和叠层设置"><span>场景绘制和叠层设置</span></a></h1>
<h2 id="设置地图" tabindex="-1"><a class="header-anchor" href="#设置地图"><span>设置地图</span></a></h2>
<p>选择地图的精灵，在精灵图集的检查器中进行如下修改。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280349825.png" alt="image-20240728034841318"></p>
<h2 id="切割地图" tabindex="-1"><a class="header-anchor" href="#切割地图"><span>切割地图</span></a></h2>
<p>点击 <code v-pre>Sprite Editor</code> 进行编辑，并按照每个格子<code v-pre>16x16</code>进行切割。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280350850.png" alt="image-20240728035028817"></p>
<h2 id="设置瓦片调色盘" tabindex="-1"><a class="header-anchor" href="#设置瓦片调色盘"><span>设置瓦片调色盘</span></a></h2>
<p>打开瓦片调色盘并新建一个调色盘，可以在<code v-pre>Assets</code>中创建一个<code v-pre>Palettes</code>文件夹来专门存放调色盘。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280354556.png" alt="image-20240728035135444"></p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280354641.png" alt="image-20240728035208157"></p>
<p>将刚才切割好的图片直接拖拽到调色盘中，系统会询问你这一片一片的瓦片存放在那里，可以新建一个<code v-pre>Tiles</code>文件夹来存放瓦片。</p>
<h2 id="使用瓦片调色盘" tabindex="-1"><a class="header-anchor" href="#使用瓦片调色盘"><span>使用瓦片调色盘</span></a></h2>
<p>因为调色盘只是一个存放瓦片的仓库，并不能用来绘制地图。可以理解为是一个调色盘，但不包括调色笔。所以，请在主场景中创建一个<code v-pre>Tilemap</code>并且是矩形的。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430074.png" alt="image-20240728035613325"></p>
<p>这时返回<code v-pre>Tilepalettes</code>中会发现，这里就多了一个<code v-pre>Tilemap</code>可供选择。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430065.png" alt="image-20240728035732736"></p>
<h2 id="修复瓦片锚点" tabindex="-1"><a class="header-anchor" href="#修复瓦片锚点"><span>修复瓦片锚点</span></a></h2>
<p>这个时候，如果你选择一个瓦片在场景中进行绘制会发现瓦片不在格子当中，原因是瓦片的锚点在我们设置为了<code v-pre>bottom</code>，所以编辑器会把<code v-pre>bottom</code>这个位置当成是瓦片的中心绘制在这个格子当中，从而出现如下问题。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430079.png" alt="image-20240728035804835"></p>
<blockquote>
<p><strong>解决方案</strong>：回到地图的精灵切割，将锚点设置成<code v-pre>center</code>并重新切割，应用即可。</p>
</blockquote>
<p>绘制好后请注意一点，如果你的画面太小或太大，修改<code v-pre>Scale</code>属性将不会影响游戏最终的画面呈现，这是一个调试使用的视图缩放。而在其左侧菜单中的选项，则会应用到实际游戏当中。</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202407280403810.png" alt="image-20240728040049920"></p>
<p>实际上，你可以通过修改相机的<code v-pre>size</code>参数来修改游戏画面的大小，我最终将其修改为了<code v-pre>6</code>。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280403041.png" alt="image-20240728040320841"></p>
<h2 id="分层-叠层-绘制地图" tabindex="-1"><a class="header-anchor" href="#分层-叠层-绘制地图"><span>分层(叠层)绘制地图</span></a></h2>
<p>你可能已经发现了，在<code v-pre>Unity</code>当中的物体上都装有很多的小组件<code v-pre>Component</code>，在大多数图形精灵上都会有一个<code v-pre>Sprite Renderer</code>，他设置了图形绘制的顺序，可以用来实现分层的绘制。</p>
<p>类似于 <strong>Godot</strong> 我们可以在这里创建不同的层级，然后设置对应的<code v-pre>Order</code>来分层绘制。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409735.png" alt="image-20240728040616689"></p>
<blockquote>
<p>// 注意，同样<code v-pre>order</code>下，按照层级从上到下进行绘制。</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409410.png" alt="image-20240728040731601"></p>
<p>添加完后，返回选择层级即可分层，这里将人物放在<code v-pre>Middle</code>该层。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280409361.png" alt="image-20240728040909075"></p>
<h2 id="扩展地图绘制工具" tabindex="-1"><a class="header-anchor" href="#扩展地图绘制工具"><span>扩展地图绘制工具</span></a></h2>
<p>在默认的绘制工具栏中，少了几个常用的工具。例如，没有图像反转和图像旋转工具。我们可以在<code v-pre>Editor</code>&gt;<code v-pre>TilePalettle</code>中添加他们。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280412400.png" alt="image-20240728041149291"></p>
<h2 id="修改叠层绘制结构" tabindex="-1"><a class="header-anchor" href="#修改叠层绘制结构"><span>修改叠层绘制结构</span></a></h2>
<p>我们可以使用多个<code v-pre>Tilemap</code>来绘制叠层，因为在刚才我们创建了三个层级，所以我们应该这么做。将三个层级分配个多个<code v-pre>Tilemap</code>，从而使分层绘制更加便于管理和使用。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430963.png" alt="image-20240728041459296"></p>
<p>在同样的层级中，例如<code v-pre>Middle</code>层中，如果也有多个<code v-pre>Tilemap</code>，我们可以修改该<code v-pre>Tilemap</code>的<code v-pre>Order in Layer</code>属性值来在同一个层级中手动分层。</p>
<h2 id="分层绘制焦点" tabindex="-1"><a class="header-anchor" href="#分层绘制焦点"><span>分层绘制焦点</span></a></h2>
<p>如果你已经动手绘制了一些的分层的瓦片，你可能会发现你有时会忘记你正在绘制的是哪一层。其实可以使用右下角的瓦片焦点工具来突出强调当前层级中的瓦片。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280430492.png" alt="image-20240728041719954"></p>
<h2 id="修改相机背景" tabindex="-1"><a class="header-anchor" href="#修改相机背景"><span>修改相机背景</span></a></h2>
<p>修改相机中的相机组件中<code v-pre>Environment</code>中的<code v-pre>Background</code>来修改相机的底色。</p>
<h2 id="小作业" tabindex="-1"><a class="header-anchor" href="#小作业"><span>小作业</span></a></h2>
<p>动手绘制一些场景和叠层来熟悉这个功能的使用吧。</p>
<h1 id="规则瓦片-瓦片地形和动画瓦片" tabindex="-1"><a class="header-anchor" href="#规则瓦片-瓦片地形和动画瓦片"><span>(规则瓦片)瓦片地形和动画瓦片</span></a></h1>
<h2 id="准备阶段" tabindex="-1"><a class="header-anchor" href="#准备阶段"><span>准备阶段</span></a></h2>
<p>在<code v-pre>Tilemap</code>中创建一个新的文件夹起名叫做<code v-pre>Rule Tile</code>，创建一个<code v-pre>Rule Tile</code>，用来设置瓦片地形，我们将用他来绘制地形图，类似于Godot中的瓦片地形。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517522.png" alt="image-20240728044157547"></p>
<p>这里给他取名为了<code v-pre>Ground 1</code>，用于创建一个地面的瓦片集。在检查器中设置默认图像(没有实际作用，可以理解为它的“头像”后续可以随意更改)，用于识别地形集。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517794.png" alt="image-20240728044348035"></p>
<p>因为后续我们设置地形也需要反复这样的选择，那么久就需要快速寻找我们的精灵图像并且是通过名字来查找的。所以，我们回到地形精灵集的图像编辑界面，并修改每一个小图块的名字(右下角修改)。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517476.png" alt="image-20240728044712594"></p>
<blockquote>
<p>这个过程中小心不要拖动蓝色的锚点。</p>
</blockquote>
<h2 id="创建地形规则" tabindex="-1"><a class="header-anchor" href="#创建地形规则"><span>创建地形规则</span></a></h2>
<h3 id="单一地形" tabindex="-1"><a class="header-anchor" href="#单一地形"><span>单一地形</span></a></h3>
<p>首先需要创建一个规则，这里创建规则的方法也类似于 Godot 中的地形集设置。回到刚才创建的瓦片规则，在其中添加规则。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517271.png" alt="image-20240728045012210"></p>
<blockquote>
<p>// 点击<code v-pre>加号</code>，我的朋友。</p>
</blockquote>
<pre><code>然后点击`Select`选择这个规则瓦片的精灵集，例如，我们可以选择地图左上角的精灵图。
</code></pre>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517496.png" alt="image-20240728045136716"></p>
<p>然后设置它的规则可以看到，坐上角的这个地形方块它的左边和上面都没有方块，而它的右边和下面皆有方块。所以我们在掩码中就设置为对应的规则。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517931.png" alt="image-20240728045403694"></p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517478.png" alt="image-20240728045528522"></p>
<p>用同样的方法来继续添加其他方向和位置的地形。</p>
<h3 id="随机地形" tabindex="-1"><a class="header-anchor" href="#随机地形"><span>随机地形</span></a></h3>
<p>在地形中间的这块，我们其实希望它自由随机的生成，也就是每次创建时在几个中间的图片中随机选择一张。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280517679.png" alt="image-20240728045649259"></p>
<p>那么我们可以将他的<code v-pre>Output</code>属性设置为<code v-pre>Random</code>，然今将随机数量<code v-pre>Size</code>修改为你需要的数量，例如这里只有三张，所以设置为<code v-pre>3</code>，然后为每一种随机的可能设置对应的精灵图。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518121.png" alt="image-20240728045752867"></p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518636.png" alt="image-20240728045911483"></p>
<p>设置完成后将我们的规则地形拖入到调色盘<code v-pre>Palettle</code>中即可。</p>
<h2 id="设置拐角的规则" tabindex="-1"><a class="header-anchor" href="#设置拐角的规则"><span>设置拐角的规则</span></a></h2>
<p>你可以在调色盘中去选择这个地形掩码然后进行绘制，别忘记使用矩形工具来进行批量绘制。然后，你可能会发现，在地形拐角处，出现了奇怪的图像。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518256.png" alt="image-20240728050205457"></p>
<p>很容易发现，地形拐角是一个上下左右都有方块的地形。但是在斜上方会有一个空的缺口，而且是必然的。所以，我们需要单独设置四个拐角的规则和图像。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518207.png" alt="image-20240728050453262"></p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518591.png" alt="image-20240728050510440"></p>
<blockquote>
<p>这里只举了这样一个拐角作为例子。</p>
</blockquote>
<p>因为正中心的方块也是四个方向都有邻居方块，如果它被放在了规则集的上面，就会优先被匹配从而轮不到这个拐角方块，所以我们需要将其拖动到规则集的最上方来提高优先级。对于其他的三个拐角也是同理。</p>
<p>对于其他的地形，我们可以直接使用<code v-pre>Ctrl</code>+<code v-pre>D</code>来将<code v-pre>Ground 1</code>地形集在文件中复制，然后修改名称创建，这样可以省去设置地形掩码的时间，只用集中于图像的选择即可。</p>
<blockquote>
<p>可以看出，这样一个一个的设置地形集相比Godot有好也有坏，好处是可以让资源更加自由不需要美术师将同一个地形一定放在一个区域，坏处是效率稍低。</p>
</blockquote>
<h2 id="动态地形-瀑布" tabindex="-1"><a class="header-anchor" href="#动态地形-瀑布"><span>动态地形(瀑布)</span></a></h2>
<p>在这个场景中，并没有动态的瓦片集，但是对于流水的精灵来说，它有多个精灵帧，组合在了一起就是一个动态的瓦片。我们只需要按照相同的原理来制作一个动画瓦片即可。</p>
<p>在文件夹中创建一个<code v-pre>Animated Tiles</code>的文件夹，并在里面创建一个动态的瓦爿。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518473.png" alt="image-20240728051159848"></p>
<p>由于我们的瀑布有左中右三个瀑布，我们可以复制一下并创建三个动画瓦片。<code v-pre>WaterFall Left</code>, <code v-pre>WaterFall Middle</code>, <code v-pre>WaterFall Right</code>。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518349.png" alt="image-20240728051223879"></p>
<p>通过<code v-pre>Number of Animated Sprites</code>来设置动画的帧数也就是精灵数量，并选择相应的精灵图。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518288.png" alt="image-20240728051351256"></p>
<blockquote>
<p>在选择前，推荐去地图集的精灵编辑器设置一下瀑布的名字(<code v-pre>name</code>)。</p>
</blockquote>
<p>如果需要修改动画的速度，可以修改<code v-pre>Minimum Speed</code>和<code v-pre>Maximum Speed</code>来修改动画速度的最大值和最小值。</p>
<p><img src="https://raw.githubusercontent.com/CCCCOOH/PicturesBed/master/202407280518992.png" alt="image-20240728051547082"></p>
<h2 id="小作业-1" tabindex="-1"><a class="header-anchor" href="#小作业-1"><span>小作业</span></a></h2>
<p>可以去实现一下草团的地形，并尽可能的创建更多的地形来丰富场景和自我练习。</p>
</div></template>


