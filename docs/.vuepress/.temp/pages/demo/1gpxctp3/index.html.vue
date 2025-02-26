<template><div><p><code v-pre>VueRouter</code>是Vue提供的一个路由管理器，专门用于处理路由和url的映射关系，有点儿像<code v-pre>Nginx</code>的功能。</p>
<p>功能如下图所示：</p>
<div style="text-align:center"><p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250226181117.png" alt="20250226181117"></p>
</div><p>例如，当用户访问<code v-pre>https://shenying.online/a</code>，web服务就会收到请求。然后解析路径<code v-pre>/a</code>，程序就会把这个请求交给类似的路由管理器来管理。</p>
<p>而前端不需要像传统的路由器那样使用服务器来解析，而是通过一个本地的程序来进行hash映射或者利用H5中的history API实现。</p>
<p>一般使用前端路由的程序为不涉及页面跳转的单页面应用。</p>
<p>前端路由有如下优点：</p>
<ol>
<li><mark>页面刷新速度快</mark>：由于不需要向服务器发送请求，所以这个过程不会受到网络延迟的影响，实际上只是完成部分组件间的切换，因此页面的刷新速度会比较快，用户体验也更好些。</li>
<li><mark>复用性强</mark>：由于使用前端路由的应用为单页面应用，所以代码中很多 CSS、JS 都可以共用，避免了过多的重复加载，大大提升了性能。</li>
<li><mark>页面状态可记录</mark>：如果不使用前端路由，仅通过 Ajax 在页面进行局部切换的应用，由于页面 URL 始终保持不变，因此页面的状态是无法记录的，而前端路由很好的解决了这个问题。例如，使用了前端路由的应用中访问 https://www.lanqiao.cn/a 这个链接，再打开后会直接触发 /a 匹配的路由页面中的事件。</li>
</ol>
<p>当然，缺点也存在：使用浏览器前进和后退时浏览器不会将之前的请求结果放入缓存，导致会重新发送请求。</p>
</div></template>


