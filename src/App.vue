<script setup>
  import Home from './views/Home.vue';
</script>

<template>
  <div class="mainWindow"> 
    <Home></Home>
  </div>
</template>

<style scoped lang="scss">
  .mainWindow {
    white-space:nowrap; // 保证元素不随窗口位移
    margin: 0 auto;
    width: 920px;
    height: 100%;
  }
</style>
