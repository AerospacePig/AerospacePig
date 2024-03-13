<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const router  = useRouter();
  const toHome = () => {
    router.push('/');
  }
  const props = defineProps({
    screenSize: String
  })
</script>

<template>
  <div class="header" :class="{ smallWindow: props.screenSize === 'small' }">
    <p class="header-titel" @click="toHome">AerospacePig</p>
    <p class="header-describe">Write down programming notes, essays, <br v-show="props.screenSize === 'small'"/>reading notes, and Galgame-related notes.</p>
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
      cursor: pointer;
      &:hover {
        color: rgba(0, 90, 170, 1);
      }
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
  .smallWindow {
    border-bottom: none;
    p {
      text-align: center;
    }
    .header-titel {
      font-size: 40px;
    }
    .header-describe {
      font-size: 20px;
    }
  }
</style>