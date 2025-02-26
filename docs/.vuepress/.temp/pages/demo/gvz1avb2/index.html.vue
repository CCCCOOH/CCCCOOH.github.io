<template><div><h2 id="pinia-是什么" tabindex="-1"><a class="header-anchor" href="#pinia-是什么"><span>Pinia 是什么</span></a></h2>
<p><code v-pre>Pinia</code>最初是一个实验，用于取代<code v-pre>vuex</code>。Vuex主要服务于vue2，目前能使用vuex4来在vue3中使用，但仍然存在很大的缺陷，所以推出了<code v-pre>Pinia</code>。</p>
<h2 id="为什么叫-pinia" tabindex="-1"><a class="header-anchor" href="#为什么叫-pinia"><span>为什么叫 Pinia</span></a></h2>
<p>Pinia（发音为 <mark>/piːnjʌ/</mark>，类似于英语中的 <mark>peenya</mark>）是最接近有效包名 piña（西班牙语中的 <em>pineapple</em> ）的词，即为菠萝，其 logo 也被设计成了菠萝的模样。</p>
<div class="demo-wrapper no-padding">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    
  </div>
  <div class="demo-container" >
<div style="text-align:center"><p><img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/20250226185944.png" alt="20250226185944"></p>
</div></div></div><p>菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。与状态管理器中的概念 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。</p>
<h2 id="pinia-vs-vuex" tabindex="-1"><a class="header-anchor" href="#pinia-vs-vuex"><span>Pinia vs Vuex</span></a></h2>
<p>Pinia 试图尽可能接近 Vuex 的理念。Pinia 的作者 I(Eduardo) 是 Vue 核心团队的一员，并积极参与 Router 和 Vuex 等 API 的设计。</p>
<ul>
<li><mark>Vuex 核心概念</mark>：<code v-pre>State</code>、<code v-pre>Getter</code>、<code v-pre>Mutation</code>、<code v-pre>Action</code>、<code v-pre>Module</code>。</li>
<li><mark>Pinia 核心概念</mark>：<code v-pre>State</code>、<code v-pre>Getters</code>、<code v-pre>Actions</code>、<code v-pre>Plugins</code>、<code v-pre>Stores outside of components</code>。</li>
</ul>
<p>不难看出大部分的核心概念都是相似的。</p>
<p>不过相比于<code v-pre>Vuex</code>，<code v-pre>Pinia</code>可以更好的支持<code v-pre>TypeScript</code>并且舍弃了<code v-pre>Mutation</code>。</p>
<h2 id="关于版本问题" tabindex="-1"><a class="header-anchor" href="#关于版本问题"><span>关于版本问题</span></a></h2>
<p>Pinia 既支持 Vue2 也支持 Vue3，一般情况下 Vue2 习惯性使用 Vuex，而 Vue3 使用 Pinia。</p>
<p>Pinia 当前的最新版本是 2.x（截止 2023 年 8 月），而 Vuex 当前的最新版本是 4.x。<mark>Pinia 可以认为就是 Vuex 的第五个版本</mark>，因为它的作者是官方的开发人员，并且<mark>已经被官方接管了</mark>。</p>
<p>Pinia 是新版本的 Vuex，建议在你的项目中直接使用它，尤其是使用了 Vue3+TypeScript 的项目。</p>
</div></template>


