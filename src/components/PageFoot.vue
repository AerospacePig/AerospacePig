<script setup></script>

<template>
  <div class="foot-content">
    <p><a href="https://github.com/AerospacePig">@AerospacePig&nbsp;</a>的博客, 只为自己用心写每一篇博文</p>
    <p>本博客文章皆为原创, 版权归作者AerospacePig所有。</p>
    <p>所有文章从未向任何个人或组织授权转载过, 严禁任何人以任何形式转载或抄袭文章内容！</p>
  </div>
</template>

<style scoped lang="scss">
  .foot-content {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-height: 2;
    color: rgba(0, 0, 0, 0.7);
    p {
      margin: 0;
      a {
        padding-bottom: 0.2vh;
        &:link, &:visited, &:active {
          color: rgba(0, 90, 170, 1);;
        }
        &:hover {
          color: rgba(0, 0, 0, 1);
          opacity: 0.7;
        }
      }
    }
  }
</style>