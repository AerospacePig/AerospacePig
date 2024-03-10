<script setup></script>

<template>
  <div class="header">
    <p class="header-titel">AerospacePig</p>
    <p class="header-describe">Write some essays or daily notes, or write something interesting.</p>
  </div>
</template>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    p {
      margin: 0;
    }
    .header-titel {
      height: 60%;
      font-family: SquareItalics, sans-serif;
      font-size: 50px;
    }
    .header-describe {
      height: 40%;
      font-size: 22px;
      font-family: DancingScript, sans-serif;
      color: rgba(0, 0, 0, 1);
    }
    hr {
      margin: 0;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.07);
    }
  }
</style>