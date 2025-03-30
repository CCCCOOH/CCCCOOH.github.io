import{_ as a,b as i,k as n,o as p}from"./app-DX64DwqP.js";const l={};function e(c,s){return p(),i("div",null,s[0]||(s[0]=[n(`<h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍"><span>一、介绍</span></a></h2><p>在上一篇笔记中简单介绍了<code>MongoDb</code>的使用方法，想必任何一个第一次学这个数据库的前端开发者早已无比火热了，现在让我们来直接开🦌一个 <code>Restful API</code>规范的应用吧。</p><h2 id="二、安装驱动" tabindex="-1"><a class="header-anchor" href="#二、安装驱动"><span>二、安装驱动</span></a></h2><p>这里说的所谓的安装驱动，就是在<code>node.js</code>中安装这个模块，这里假设你还没有安装<code>express</code>模块。</p><p>打开一个文件夹，</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">init</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">回车跳过项目信息配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">i</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">express</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置连接" tabindex="-1"><a class="header-anchor" href="#三、配置连接"><span>三、配置连接</span></a></h2><p>在根目录新建一个配置信息的文件夹：<code>config</code>，并创建文件<code>config/mongoDbConnection.js</code>：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">MongoClient</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">require</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Replace</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">the</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">uri</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">string</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">with</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">your</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">connection</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">string.</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">uri</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dbName</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">myBlog</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_db</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">connectDb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">try</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">new</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MongoClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">useUnifiedTopology</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">connect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_db</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dbName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">catch</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">err</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">throw</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">连接到数据库出错</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getCollection</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">collection</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_col</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">async</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=&gt;</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">try</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">db</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">connectDb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_col</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">collection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">collection</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">catch</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">err</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">throw</span><span class="space"> </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">连接</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">connection</span><span class="space"> </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">出错</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_col</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里说一个我在官方文档看到的小技巧，<code>url</code>可以在<code>Mongo Compass</code>中通过粘贴获得：</p><p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/image-20250325214747615.png" alt="image-20250325214747615"></p><p>这段代码很长，看起来非常劝退，但是稍微扒一下就能发现一点儿也不难。</p><p>因为其中用到了很多防御性编程，所以看起来较为臃肿，我来理一理核心逻辑：</p><ul><li>通过解构赋值导入<code>mongodb</code>模块下的<code>MongoClient</code>类后面用于创建服务链接。</li><li><code>url</code>存放数据库的地址。</li><li>定义了一个<code>connectDb()</code>方法链接数据库返回并存到<code>_db</code>中以便复用。连接失败报错（防御性编程）。</li><li><code>_db</code>用于存放连接到的数据库，便于全局多次复用。</li></ul><h3 id="_3-1-connectdb-方法" tabindex="-1"><a class="header-anchor" href="#_3-1-connectdb-方法"><span>3.1 connectDb() 方法</span></a></h3><p>这里用到了几个我比较陌生的API，也来扒一下：</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span class="space"> </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">new</span><span class="space"> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MongoClient</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span class="space"> </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span class="space"> </span><span class="space"> </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">useUnifiedTopology</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span class="space"> </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">可以看出，MongoClient功能类似于连接数据库客户端</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">connect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">一个Promise</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回客户端连接到的结果</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">await</span><span class="space"> </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">client</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">db</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dbName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">一个Promise</span><span class="space"> </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">返回客户端中的一个数据库</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>差点就去查资料了，还好我突然理解了~</p><p>对照这我们的<code>MongoDB Compass</code>其实就很好理解了：</p><p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/image-20250325220135877.png" alt="image-20250325220135877"></p><ul><li>我们用导入的类<code>MongoClient</code>创建了一个客户端的对象，并传入客户端的<code>url</code>参数作为客户端寻址。</li><li>创建完<code>client</code>后并不会直接连接客户端，需要异步地调用<code>client.connect()</code>方法来连接。</li><li>连接后我们需要选择一个数据库进行操作，所以异步地调用了<code>client.db(dbName)</code>并传入我们需要访问的数据库名。</li></ul><p>完成后，我们就可以像之前那样，用<code>db.xxx</code>来进行一系列集合与文档的操作了，语法甚至都完全一样。</p><h3 id="_3-2-getcollection-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-getcollection-方法"><span>3.2 getCollection() 方法</span></a></h3><p>我们在这个文件中还创建了一个用于获取集合的方法，并将其导出为模块。</p><p>这个方法代码更加简单，通过<code>getCollection</code>方法来得到了<code>db</code>数据库，并获取<code>collection</code>集合返回，将函数闭包并将获取的集合存入<code>_col</code>。</p>`,25)]))}const t=a(l,[["render",e],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/demo/blc8jgxs/","title":"通过Express和MongoDb实现RestfulAPI应用","lang":"zh-CN","frontmatter":{"title":"通过Express和MongoDb实现RestfulAPI应用","createTime":"2025/03/25 21:41:10","permalink":"/demo/blc8jgxs/","description":"一、介绍 在上一篇笔记中简单介绍了MongoDb的使用方法，想必任何一个第一次学这个数据库的前端开发者早已无比火热了，现在让我们来直接开🦌一个 Restful API规范的应用吧。 二、安装驱动 这里说的所谓的安装驱动，就是在node.js中安装这个模块，这里假设你还没有安装express模块。 打开一个文件夹， 三、配置连接 在根目录新建一个配置信...","head":[["meta",{"property":"og:url","content":"https://shenying.online/demo/blc8jgxs/"}],["meta",{"property":"og:site_name","content":"Sy_blogSite"}],["meta",{"property":"og:title","content":"通过Express和MongoDb实现RestfulAPI应用"}],["meta",{"property":"og:description","content":"一、介绍 在上一篇笔记中简单介绍了MongoDb的使用方法，想必任何一个第一次学这个数据库的前端开发者早已无比火热了，现在让我们来直接开🦌一个 Restful API规范的应用吧。 二、安装驱动 这里说的所谓的安装驱动，就是在node.js中安装这个模块，这里假设你还没有安装express模块。 打开一个文件夹， 三、配置连接 在根目录新建一个配置信..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/image-20250325214747615.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-25T16:07:28.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-25T16:07:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过Express和MongoDb实现RestfulAPI应用\\",\\"image\\":[\\"https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/image-20250325214747615.png\\",\\"https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/image-20250325220135877.png\\"],\\"dateModified\\":\\"2025-03-25T16:07:28.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.67,"words":802},"git":{"updatedTime":1742918848000,"contributors":[{"name":"CCCCOOH","username":"CCCCOOH","email":"c3156298376@163.com","commits":2,"avatar":"https://avatars.githubusercontent.com/CCCCOOH?v=4","url":"https://github.com/CCCCOOH"}]},"autoDesc":true,"filePathRelative":"notes/demo/11.Mongodb/2.通过Express和MongoDb实现RestfulAPI应用.md"}');export{t as comp,k as data};
