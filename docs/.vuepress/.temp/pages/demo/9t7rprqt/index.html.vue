<template><div><p>学习vim的过程中发现了很多很好的资源，其中不乏bilibili上up主的精品教程。也在YouTube上看过很多教程。但Learn-Vim这个Github仓库实在让我受益良多。</p>
<p>本笔记便是出于此仓库：</p>
<blockquote>
<p><a href="https://github.com/iggredible/Learn-Vim/blob/master/" target="_blank" rel="noopener noreferrer">仓库地址</a></p>
</blockquote>
<p>附上个人.vimrc配置文件:</p>
<div class="language-vim line-numbers-mode" data-ext="vim" data-title="vim"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">syntax on</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	" 开启语法高亮</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> number</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	" 设置行号</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> relativenumber</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	" 设置相对行号</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> wrap</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 开启代码包裹，防止溢出屏幕	</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> showcmd</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 显示命令</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> wildmenu</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 开启补全菜单</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> hlsearch</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 开启搜索高亮</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> incsearch</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 开启实时搜索高亮</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> ignorecase</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 搜索忽略大小写</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> cursorline</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		" 开启鼠标地平线</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">" 按下冒号重制高亮</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">exec </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">"nohlsearch"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">" 将大写JK映射为5倍jk</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> J 5j</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> K 5k</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">nnoremap</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">esc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">esc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> :noh</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">esc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">" 映射自动保存</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> S :w</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Q :q</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> s :</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">nop</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> R  :</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">source</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">call</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plug#begin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'vim-airline/vim-airline'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'iamcco/markdown-preview.nvim'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> { </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">'do'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: { -> </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdp#util#install</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> }</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'for'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">'markdown'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'vim-plug'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">]}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'iamcco/markdown-preview.nvim'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> { </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">'do'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">'cd app &#x26;&#x26; npx --yes yarn install'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'preservim/nerdtree'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'jiangmiao/auto-pairs'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'preservim/nerdcommenter'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Plug</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 'connorholyday/vim-snazzy'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">call</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> plug#end</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">color</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> molokai</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> sr</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> splitright</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:vsplit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sl :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> nosplitright</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:vsplit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> st</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> nosplitbelow</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:split</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">map</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> sb</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> :</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">set</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> splitbelow</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:split</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">CR</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">Up</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">NOP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">Down</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">NOP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">Left</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">NOP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">noremap</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">Right</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">NOP</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、vim语法" tabindex="-1"><a class="header-anchor" href="#二、vim语法"><span>二、vim语法</span></a></h1>
<p>vim的语法只有一句，<code v-pre>verb+noun</code>！</p>
<h2 id="_2-1-动词" tabindex="-1"><a class="header-anchor" href="#_2-1-动词"><span>2.1 动词</span></a></h2>
<p>这里简要罗列出vim的动词列表：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>y    复制</span></span>
<span class="line"><span>d    删除</span></span>
<span class="line"><span>c    修改(删除并开始编辑)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-名词" tabindex="-1"><a class="header-anchor" href="#_2-2-名词"><span>2.2 名词</span></a></h2>
<p>以下皆是名词，但分为了两种。</p>
<h3 id="_2-2-1-简单名词" tabindex="-1"><a class="header-anchor" href="#_2-2-1-简单名词"><span>2.2.1 简单名词</span></a></h3>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>h    左</span></span>
<span class="line"><span>j    下</span></span>
<span class="line"><span>k    上</span></span>
<span class="line"><span>l    右</span></span>
<span class="line"><span>w    单词</span></span>
<span class="line"><span>}    跳到下一段落</span></span>
<span class="line"><span>$    行末尾</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-补充的名词" tabindex="-1"><a class="header-anchor" href="#_2-2-2-补充的名词"><span>2.2.2 补充的名词</span></a></h3>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>w         一个单词</span></span>
<span class="line"><span>p         一个段落</span></span>
<span class="line"><span>s         一个句子</span></span>
<span class="line"><span>( or )    一对 ( ) 括号</span></span>
<span class="line"><span>{ or }    一对 { } 括号</span></span>
<span class="line"><span>[ or ]    一对 [ ] 括号</span></span>
<span class="line"><span>&#x3C; or >    一对 &#x3C; > 括号</span></span>
<span class="line"><span>t         一对XML标签,例如&#x3C;html>&#x3C;/html></span></span>
<span class="line"><span>"         一对 " " 引号</span></span>
<span class="line"><span>'         一对 ' ' 引号</span></span>
<span class="line"><span>`         一对 ` ` 引号</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、移动" tabindex="-1"><a class="header-anchor" href="#三、移动"><span>三、移动</span></a></h1>
<h2 id="_3-1-字符导航" tabindex="-1"><a class="header-anchor" href="#_3-1-字符导航"><span>3.1 字符导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>h   向左</span></span>
<span class="line"><span>j   向下</span></span>
<span class="line"><span>k   向上</span></span>
<span class="line"><span>l   向右</span></span>
<span class="line"><span>gj  Down in a soft-wrapped line</span></span>
<span class="line"><span>gk  Up in a soft-wrapped line</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁用箭头的设置:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>noremap &#x3C;Up> &#x3C;NOP></span></span>
<span class="line"><span>noremap &#x3C;Down> &#x3C;NOP></span></span>
<span class="line"><span>noremap &#x3C;Left> &#x3C;NOP></span></span>
<span class="line"><span>noremap &#x3C;Right> &#x3C;NOP></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相对行号:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>set relative number</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-2-计算编号" tabindex="-1"><a class="header-anchor" href="#_3-2-计算编号"><span>3.2 计算编号</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>[count] + motion</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-3-词语导航" tabindex="-1"><a class="header-anchor" href="#_3-3-词语导航"><span>3.3 词语导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>w     移动到下一个word的开头</span></span>
<span class="line"><span>W     移动到下一个WORD的开头</span></span>
<span class="line"><span>e     移动到下一个word的结尾</span></span>
<span class="line"><span>E     移动到下一个WORD的结尾</span></span>
<span class="line"><span>b     移动到上一个word的开头</span></span>
<span class="line"><span>B     移动到上一个WORD的开头</span></span>
<span class="line"><span>ge    移动到上一个word的结尾</span></span>
<span class="line"><span>gE    移动到上一个WORD的结尾</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-行导航" tabindex="-1"><a class="header-anchor" href="#_3-4-行导航"><span>3.4 行导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>0     跳转到当前行的第一个字符</span></span>
<span class="line"><span>^     跳转到当前行的第一个非空白字符</span></span>
<span class="line"><span>g_    跳转到当前行的最后一个非空白字符</span></span>
<span class="line"><span>$     跳转到当前行的最后一个字符</span></span>
<span class="line"><span>n|    跳转到当前行的第n列</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-搜索动词" tabindex="-1"><a class="header-anchor" href="#_3-5-搜索动词"><span>3.5 搜索动词</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>f    在同一行搜索下一个匹配</span></span>
<span class="line"><span>F    在同一行搜索前一个匹配</span></span>
<span class="line"><span>t    在同一行搜索下一个匹配，但是光标落在目标前</span></span>
<span class="line"><span>T    在同一行搜索下一个匹配，但是光标落在目标后</span></span>
<span class="line"><span>;    在同一行使用上一次搜索，方向相同</span></span>
<span class="line"><span>,    在同一行使用上一次搜索，方向相反</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-句子导航和段落导航" tabindex="-1"><a class="header-anchor" href="#_3-6-句子导航和段落导航"><span>3.6 句子导航和段落导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>(    跳到上一个句子</span></span>
<span class="line"><span>)    跳到下一个句子</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个有两个段落的句子：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>I am a sentence. I am another sentence because I end with a period. I am still a sentence when ending with an exclamation point! What about question mark? I am not quite a sentence because of the hyphen - and neither semicolon ; nor colon :</span></span>
<span class="line"><span></span></span>
<span class="line"><span>There is an empty line above me.</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>个人感觉句子、段落在代码里可能就不是那么实用。但用于写文章博客还是很屌的。</p>
</blockquote>
<h2 id="_3-7-匹配导航" tabindex="-1"><a class="header-anchor" href="#_3-7-匹配导航"><span>3.7 匹配导航</span></a></h2>
<blockquote>
<p>程序员专用</p>
</blockquote>
<p>光标在成对的括号中其中一对上时按下<code v-pre>%</code>来跳到对应的括号上。</p>
<p>使用场景：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>(define (fib n)</span></span>
<span class="line"><span>  (cond ((= n 0) 0)</span></span>
<span class="line"><span>        ((= n 1) 1)</span></span>
<span class="line"><span>        (else</span></span>
<span class="line"><span>          (+ (fib (- n 1)) (fib (- n 2)))</span></span>
<span class="line"><span>        )))</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>光标在其中一个括号上可以快速跳转到对应的括号。</p>
<h2 id="_3-8-行号导航" tabindex="-1"><a class="header-anchor" href="#_3-8-行号导航"><span>3.8 行号导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>gg    去到第一行</span></span>
<span class="line"><span>G     去到最后一行</span></span>
<span class="line"><span>nG    去到第n行</span></span>
<span class="line"><span>n%    去到第百分之n行</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>ctrl+g</code>来显示行数。</p>
<p>gg和GG绝对是实用中的实用。</p>
<h2 id="_3-9-窗口导航" tabindex="-1"><a class="header-anchor" href="#_3-9-窗口导航"><span>3.9 窗口导航</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>H     去到屏幕的最上方</span></span>
<span class="line"><span>M     去到屏幕的最中间</span></span>
<span class="line"><span>L     去到屏幕的最底部  </span></span>
<span class="line"><span>nH    去到离屏幕顶部n行的位置</span></span>
<span class="line"><span>nL    去到离屏幕底部n行的位置</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-10-滚动" tabindex="-1"><a class="header-anchor" href="#_3-10-滚动"><span>3.10 滚动</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>Ctrl-E    向下滚动一行</span></span>
<span class="line"><span>Ctrl-D    向下滚动半个屏幕</span></span>
<span class="line"><span>Ctrl-F    向下滚动</span></span>
<span class="line"><span>Ctrl-Y    向上滚动一行</span></span>
<span class="line"><span>Ctrl-U    向上滚动半个屏幕</span></span>
<span class="line"><span>Ctrl-B    向上滚动整个屏幕</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-11-搜索导航" tabindex="-1"><a class="header-anchor" href="#_3-11-搜索导航"><span>3.11 搜索导航</span></a></h2>
<blockquote>
<p>这里的搜索是整个文档的。</p>
</blockquote>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>/    向后搜索一个匹配</span></span>
<span class="line"><span>?    向前搜索一个匹配</span></span>
<span class="line"><span>n    重复上一个匹配，方向相同</span></span>
<span class="line"><span>N    重复上一个匹配，方向相反</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索结束后关闭高亮(在~/.vimrc中添加配置)：</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>nnoremap &#x3C;esc>&#x3C;esc> :noh&#x3C;return>&#x3C;esc></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>额外的补充:</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>*     向后搜索光标位置的单词</span></span>
<span class="line"><span>#     向前搜索光标位置的单词</span></span>
<span class="line"><span>g*    在*的基础上增加了模糊匹配</span></span>
<span class="line"><span>g#    在#的基础上增加了模糊匹配</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-12-标记位置" tabindex="-1"><a class="header-anchor" href="#_3-12-标记位置"><span>3.12 标记位置</span></a></h2>
<p>标记当前位置，类似书签。</p>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>ma    标记a的位置</span></span>
<span class="line"><span>`a    精确跳转到标记的a的位置</span></span>
<span class="line"><span>'a    跳转到标记a的行首</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中小写表示局部标记，大些表示全局标记。</p>
<p>局部标记每个文件(缓冲区)只有一个，全局标记所有文件共享。</p>
<p>使用marks来查看所有的标记。</p>
<p>更多的标记用的不多，这里直接饮用(不是错别字❌)原文:</p>
<div class="language-vim line-numbers-mode" data-ext="vim" data-title="vim"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">''</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Jump back </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the last line </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> current buffer before jump</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">``    Jump back </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the last position </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> current buffer before jump</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`[    Jump </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> beginning of previously changed / yanked text</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`]    Jump </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the ending of previously changed / yanked text</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C; </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   Jump </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the beginning of last visual </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">selection</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`>    Jump </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the ending of last visual </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">selection</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">`</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Jump back </span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">to</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> the last edited file when exiting vim</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-13-所有的跳转" tabindex="-1"><a class="header-anchor" href="#_3-13-所有的跳转"><span>3.13 所有的跳转</span></a></h2>
<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>'a       去到标记的a行</span></span>
<span class="line"><span>`a       去到标记的a位置</span></span>
<span class="line"><span>G       Go to the line(这个没懂，shift+G不是跳转到文档底部吗？)</span></span>
<span class="line"><span>/       向后搜索</span></span>
<span class="line"><span>?       向前搜索</span></span>
<span class="line"><span>n       重复最后一次搜索，方向一致</span></span>
<span class="line"><span>N       重复最后一次搜索，方向相反</span></span>
<span class="line"><span>%       找到匹配项</span></span>
<span class="line"><span>(       跳到上一句</span></span>
<span class="line"><span>)       跳到下一句</span></span>
<span class="line"><span>{       跳到上一段</span></span>
<span class="line"><span>}       跳到下一段</span></span>
<span class="line"><span>L       去到显示窗口的最后一行</span></span>
<span class="line"><span>M       去到窗口的中间</span></span>
<span class="line"><span>H       去到显示窗口的顶部</span></span>
<span class="line"><span>[[      去到上一次会话</span></span>
<span class="line"><span>]]      去到下一次会话</span></span>
<span class="line"><span>:s      Substitute</span></span>
<span class="line"><span>:tag    去到定义的标签</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>具体说明见Lear-Vim作者文档✍️。</p>
</blockquote>
</div></template>


