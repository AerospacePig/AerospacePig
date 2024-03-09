<script setup>
  import { useRouter } from 'vue-router';
  import PageHeader from '../components/PageHeader.vue';
  import Items from '../components/Items.vue';
  import Sidebar from '../components/Sidebar.vue';
  import PageFoot from '../components/PageFoot.vue';
  import ItemPage from './ItemPage.vue';

  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }
</script>

<template>
  <div class="page-header">
    <PageHeader></PageHeader>
  </div>

  <div v-show="currentRoute() === 'home'" class="items">
    <Items></Items>
  </div>

  <div v-show="currentRoute() === 'itemPage'" class="item-page">
    <ItemPage></ItemPage>
  </div>

  <div class="sidebar">
    <Sidebar></Sidebar>
  </div>

  <div class="page-foot">
    <PageFoot></PageFoot>
  </div>
</template>

<style scoped lang="scss">

</style>