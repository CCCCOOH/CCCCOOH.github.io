<template><div><p>平时一直没注意到家里的路由器在偷懒。最近成功榨干家里的带宽，把平时一直<code v-pre>20mb/s</code>左右下载速度的路由器一番改造后成功steam下载速度稳定<code v-pre>85+Mb/s</code>。平时一直都只发挥了他的1/3不到，真是太可惜了。</p>
<h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件"><span>硬件</span></a></h2>
<p>首先检查硬件，就千兆路由器而言，确保路由器是千兆路由器，网线至少是超五类网线。确认好硬件上满足要求后，打开电脑的网络设置界面查看理论的带宽上限：</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202501241436932.png" alt=""></p>
<p>这是我的理论带宽上限，可以看到是有<code v-pre>1000Mbps</code>的，也就是千兆网。将它除以八得到<code v-pre>125Mb/s</code>，也就是理论上最高能到达的网速。当然，这个网速是受限于木桶效应的，如果提供服务的服务器没有能力到达这个速度，那速度将不会高于该服务器。</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202501241453735.png" alt="image-20250124144114459"></p>
<h2 id="路由器设置" tabindex="-1"><a class="header-anchor" href="#路由器设置"><span>路由器设置</span></a></h2>
<p>找到你的路由器，查看路由器标签上的管理员后台地址，在电脑的浏览器中输入进入到后台界面。为了追求极致的网速，首先将路由器的无限功能通通给关掉。关掉<code v-pre>5G</code>/<code v-pre>2.4G</code>这两个无限发射功能，也就是说家里的手机设备将不再享受到这台路由器提供的<code v-pre>WIFI</code>服务了。如果你家里只有一个路由器，请酌情设置。但是不好意思，我家里刚好有两个，满足条件。</p>
<blockquote>
<p>路由器如果开启了无限发射功能，也就是常说的<code v-pre>WIFI</code>功能会很影响路由器的性能，并且会分散带宽，为了追求极致的网速，一定要关掉。</p>
</blockquote>
<p>完成这一步后，将路由的模式从路由模式设置为桥接模式，并且开启<code v-pre>NAT</code>硬件加速。其他的设置还要根据路由器的种类考虑，但是总归能在后台面板折腾一下。</p>
<p>还有，不要忘记开启<code v-pre>IPv6</code>，这个也有用。完成这些步骤后，用一根<code v-pre>&gt;=1000Mbps</code>的网线从路由器物理层面连接到你的电脑，任务栏右下角将会出现一个以太网的图标，不同于<code v-pre>WIFI</code>的图标。</p>
<h2 id="软件层面的优化" tabindex="-1"><a class="header-anchor" href="#软件层面的优化"><span>软件层面的优化</span></a></h2>
<p>完成这些步骤后，在网上找一个测速软件。这些软件能检测你现在理论能跑的带宽速度，因为并不是所有的软件都能一直跑满你的带宽的，具体还受限于电脑性能的调教，这点接下来会讲。</p>
<p>这里我用这个软件测出来能跑到<code v-pre>940Mbps</code>左右的带宽，证明上面的折腾基本已经奏效了。接下来就是选择合适的服务器商以及电脑性能的调教了。</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202501241453954.png" alt="image-20250124145209660"></p>
<p>这里举个例子，即使你的带宽在合适情况下能跑到千兆，但在某些应用场景下仍然网速只有<code v-pre>20~30Mb/s</code>，你知道为什么吗？就拿百度网盘举例，如果没有开通超级会员，就算你是万兆宽带，你也只能跑到几百<code v-pre>kb/s</code>的速度。这就是服务器的问题了，百度网盘没有给普通用户提供这样的服务，毕竟提供网络传输的流量是要烧金币的。</p>
<p>实际测试下，我开通了百度网盘的会员能正常跑到<code v-pre>100Mb/s</code>。</p>
<h2 id="steam-调优" tabindex="-1"><a class="header-anchor" href="#steam-调优"><span>Steam 调优</span></a></h2>
<p>如果你能确定服务器商那边提供的服务能到达千兆，那最后的问题就是你的电脑了。别忘了，你的电脑上还有<code v-pre>CPU</code>和网卡这样的硬件，即使上面的所有条件你都完成了，如果应用在<code v-pre>CPU</code>上的调度不够，最后网速还是不能跑到理论值。</p>
<p>就比如我，在完成了上面的所有调教后。我确定我在百度网盘是能跑到<code v-pre>100Mb/s</code>的，但是奇怪的事情就发生了。我的<code v-pre>Steam</code>在选择了最近的服务器，杭州服务器<code v-pre>CDN</code>的情况下，只能跑到<code v-pre>40~50Mb/s</code>。这里的情况就是我的电脑有问题了，肯定不是服务器那边的问题。要知道<code v-pre>Steam</code>是一个很有钱的公司，一个海外的公司在中国砸了几十个<code v-pre>CDN</code>内容分发服务器，跑不满千兆就只能是我自身的问题。</p>
<p>其实刚才也提到了，就是<code v-pre>CPU</code>调度的问题。我在将电脑的电源计划修改为性能模式后发现没有很大的变化。</p>
<p>这个时候，打开<code v-pre>Steam</code>下载，并打开任务管理器，如果看到<code v-pre>Steam</code>相关的进程旁边有绿色的小叶子+<code v-pre>效能</code>两个字，火速把效能选项关掉。选择任务管理器的详细设置，将<code v-pre>Steam</code>相关的进程优先级全部设置为同步。这个时候再打开下载，你会发现下载速度很快就翻了一倍，并且伴随着<code v-pre>CPU</code>利用率的提升，风扇也会呼啦呼啦地转起来。</p>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202501241506947.png" alt="image-20250124150553380"></p>
<p>完成了<code v-pre>CPU</code>的调教，你别急，还有。不知道你有没有观察过，<code v-pre>Steam</code>下载时往往还会附带一个磁盘使用情况的可视图。它也会对下载速度产生影响，毕竟网卡和硬盘也是要相互协作的。如果硬盘的缓冲区拖累了速度，整体的下载速度还是会变慢，也就不一定能到达理想的下载速度。打开设备管理器，找到你用于<code v-pre>Steam</code>下载的硬盘，将写入缓冲关闭。</p>
<blockquote>
<p>如果这张盘上有重要文件，不建议关闭写入缓存。会导致这张盘不那么难稳定。</p>
</blockquote>
<p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/202501241512711.png" alt="image-20250124151204066"></p>
<p>其实，关于带宽调教还有很多学问，比如本文没有讲到的<code v-pre>CPU</code>核心利用的探讨，真实的带宽调教还要受限于具体的情况，本文仅给出个体情况作为参考。</p>
</div></template>


