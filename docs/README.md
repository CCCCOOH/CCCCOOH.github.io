---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: banner
    banner: https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/hollow.jpeg
    bannerMask:
      light: 0.1
      dark: 0.3
    hero:
      name: Sy_COOH
      tagline: GameDev&FrontEnd.
      text: 一个简单的coder
      image: https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/1280px-Knight_Action.png
      actions:
        -
          theme: brand
          text: 博客
          link: /blog/
        -
          theme: sponsor
          text: 笔记
          link: /demo/
        -
          theme: alt
          text: Github →
          link: https://github.com/CCCCOOH
  -
    type: features
    title: 'Languages'
    features:
      -
        title: Vue
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/skill-icons--vuejs-dark.png" />
      -
        title: Unity
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/skill-icons--unity-light.png" />
      -
        title: Unreal
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/skill-icons--unrealengine.png" />
      -
        title: Godot
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/skill-icons--godot-dark.png" />
      -
        title: GameMakerStudio
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/file-icons--gamemaker.png" />
      -
        title: Web5
        icon: <img src="https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/skill-icons--html.png" />
  -
    type: text-image
    title: About
    description: 学过气前端编程、做独立游戏开发白日梦。
    image: https://ccccooh.oss-cn-hangzhou.aliyuncs.com/img/1280px-Knight_Action.png
    list:
      -
        title: Games
        description: Counter-Strike2、HollowKnight、Celese
      -
        title: Sport
        description: 乒乓球...
      -
        title: Other
        description: Programming、GameDev、FrontEnd。
  -
    type: custom
---

<!-- 手动导入Repo卡片组件 -->
<script setup>
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
</script>

<h2 align="center" style="margin-bottom: 30px; font-size: 2em; font-weight: bold;">Projects</h2>

<CardGrid>
<RepoCard repo="CCCCOOH/Xjufe_small_platformergame" />
<RepoCard repo="CCCCOOH/Godot3.3.3Platfomr2D" />
<RepoCard repo="CCCCOOH/hexo-theme-Syight" />
<RepoCard repo="CCCCOOH/Godot4_SelfPainting_game" />
<RepoCard repo="CCCCOOH/Godot_PVZ_Shooter" />
<RepoCard repo="CCCCOOH/Godot4_similarSurvivor" />
<RepoCard repo="CCCCOOH/bilibili-search-home" />
<RepoCard repo="CCCCOOH/CleverPlanner" />
</CardGrid>