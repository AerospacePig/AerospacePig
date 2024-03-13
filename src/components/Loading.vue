<script setup></script>

<template>
  <div class="container">
    <div class="loading-spinner"></div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    .loading-spinner {
      margin: 0;
      padding: 0;
      border: 3px solid rgba(0, 0, 0, 0.2);
      border-top: 3px solid rgba(0, 157, 255, 1);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 2s linear infinite;
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
  }
</style>