<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits(['transitive-classify'])
  const handleClick = (classifyName) => {
    emit('transitive-classify', classifyName);
  }
</script>

<template>
  <div class="page-sidebar">
    <ul>
      <li class="item-caprice">
        <h4>随想:</h4>
        <p class="caprice">“&nbsp;最近对伪娘上瘾, 想穿女装...&nbsp;”</p>
        <!-- <p>"&nbsp;沧浪之水清兮，可以濯我缨。沧浪之水浊兮，可以濯我足。"<br/>——&nbsp;先秦 · 佚名</p> -->
      </li>
      <li class="classify">
        <h4>分类:</h4>
        <p @click="handleClick('编程生涯')">编程生涯</p>
        <p @click="handleClick('闲言碎语')">闲言碎语</p>
        <p @click="handleClick('书籍阅读')">书籍阅读</p>
        <p @click="handleClick('Galgame相关')">Galgame相关</p>
        <p @click="handleClick('首页')">首页</p>
      </li>
      <li class="item-blogroll">
        <h4>友链:</h4>
        <p><a href="https://nicebowl.fun/">NiceBowl的博客</a></p>
        <p><a href="https://rosmontis.com/">迷迭香的博客</a></p>
        <p><a href="https://www.fufugal.com/">初音的青葱</a></p>
        <p><a href="https://cd-yurigame.com/">Yuritopia</a></p>
        <p><a href="https://qingjuacg.top/">青桔网(不是共享单车)</a></p>
      </li>
      <li class="item-about">
        <h4>关于:</h4>
        <p>声明:&nbsp;这个网站的UI是直接模仿<a href="https://nicebowl.fun/">@NiceBowl&nbsp;</a>的博客, 当初看到这个作者的博客那精简的UI一眼就爱上了, 所以自己用Vue3也模仿了一个...(我已经尽可能去还原了), <i style="text-decoration: line-through;">另外, 这位博主爱搞黄色的爱好很对我口味儿。</i></p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .page-sidebar {
    ul {
      padding: 0;
      margin: 30px 0;
      li {
        margin: 30px 0;
        white-space: normal;
        list-style-type: none;
        h4 {
          margin: 20px 0;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
        }
        p {
          letter-spacing: 1px;
          line-height: 1.5;
          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.6);
          a {
            text-decoration: underline;
            text-underline-offset: 5px;
            text-decoration-color: rgba(0, 0, 0, 0.2);
            padding-bottom: 0.2vh;
            &:link, &:visited, &:active {
              color: rgba(0, 90, 170, 1);
            }
            &:hover {
              color: rgba(0, 0, 0, 1);
              opacity: 0.7;
            }
          }
        }
        .caprice {
          color: rgba(0, 90, 170, 1);
        }
      }
      .classify {
        p {
          color: rgba(0, 90, 170, 1);
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 5px;
          text-decoration-color: rgba(0, 0, 0, 0.2);
          padding-bottom: 0.2vh;
          &:hover {
            color: rgba(0, 0, 0, 1);
            opacity: 0.7;
          }
        }
      }
    }
  }
</style>