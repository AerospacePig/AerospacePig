<script setup>
  import { ref } from 'vue';
  import Home from './views/Home.vue';

  const screenSize = ref('');
  const checkScreenSize = (value) => {
    screenSize.value = value;
  }
</script>

<template>
  <div class="mainWindow" :class="{ smallWindow: screenSize === 'small' }"> 
    <Home @screen-size="checkScreenSize"></Home>
  </div>
</template>

<style scoped lang="scss">
  .mainWindow {
    white-space: nowrap;
    margin: 0 auto;
    width: 920px;
    height: 100%;
  }
  .smallWindow {
    white-space: normal;
    width: 90vw;
  }
</style>
